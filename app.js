// Step 1 - set up express & mongoose

var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var cors = require("cors")
var fs = require('fs');
var path = require('path');
require('dotenv/config');
var imgModel = require('./model');

//setting up localstorage

if (typeof localStorage === "undefined" || localStorage === null) {
	var LocalStorage = require('node-localstorage').LocalStorage;
	localStorage = new LocalStorage('./scratch');
  }
// Step 2 - connect to the database
app.use(cors())
mongoose.connect(process.env.MONGO_URL,
	{ useNewUrlParser: true, useUnifiedTopology: true }, err => {
		console.log('connected')
	});

    var port = process.env.PORT || '5000'
    app.listen(port, err => {
        if (err)
            throw err
        console.log('Server listening on port', port)
    })
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
      
    // Set EJS as templating engine 
    app.set("view engine", "ejs");

    // Step 5 - set up multer for storing uploaded files

var multer = require('multer');
const { json } = require('body-parser');

var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads')
	},
	filename: (req, file, cb) => {
		cb(null, file.fieldname + '-' + Date.now())
	}
});

var upload = multer({ storage: storage });

app.get('/', (req, res) => {
    imgModel.find({}, (err, items) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        }
        else {
		
            res.render('imagesPage', { items: items });
        }
    });
});


app.get('/getrecords', (req, res) => {
    imgModel.find({}, (err, items) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        }
        else {
            res.send(JSON.stringify(items))
        }
    });
});
// Step 8 - the POST handler for processing the uploaded file

app.post('/create', upload.single('image'), (req, res, next) => {

	var obj = {
		name: req.body.name,
		desc: req.body.desc,
		catog: req.body.catog,
		rating: req.body.rating,
		votes: req.body.votes,
		rdate: req.body.rdate,
		subcatogory: req.body.subcatogory,
		img: {
			data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
			contentType: 'image/png'
		}
	}
	imgModel.create(obj, (err, item) => {
		if (err) {
			console.log(err);
		}
		else {
			item.save();
			res.redirect("/")
			
		}
	});

});



app.get('/delete/(:id)', function(req, res, next) {
    imgModel.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/');
        } else {
            console.log('Failed to Delete user Details: ' + err);
        }
    });
})
app.get('/edit/(:id)', function(req, res, next){
   
	imgModel.findById(req.params.id, (err, items) => {
	if (!err) {
		res.render("edit", { items: items });
	}else{
		req.flash('error', 'User not found with id = ' + req.params.id)
		res.redirect('/')
	}
});

})

