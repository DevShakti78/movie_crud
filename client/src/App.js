import logo from './logo.svg';
import './App.css';
import Showmovies from './components/Showmovies';

import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import Navbar from './components/Navbar';



function App() {
  
  const {isLoading,error} = useAuth0

  return (
    <div className="App">
      {
        error && <p>Authentication error</p>
      }
      {!error && isLoading && <p>Loading...</p>}

      {!error && !isLoading && (
        <>
        <Navbar/>
        <LoginButton/>
<LogoutButton/>
<Showmovies/>
        </>
      )}


    </div>
  );
}

export default App;
