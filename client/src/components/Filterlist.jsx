import React from 'react'

const Filterlist = (props) => {
     const onFilterValueChange = (e) =>{
// console.log(e.target.value)
props.filterValueSelected(e.target.value)
     }
  return (
    <div>
        <label for="filter">select the catogory</label>

<select name="filter" id="filter" onChange={onFilterValueChange}>
  <option value="all">all</option>
  <option value="series">series</option>
  <option value="movies">movies</option>
</select>
    </div>
  )
}

export default Filterlist