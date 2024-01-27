import { useEffect} from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import spotify from 'spotify-web-api-js';
import {DataLayerValues} from "./DataLayer"
import Player from './Player';

function App() {
  const [{ token, user }, dispatch ] = DataLayerValues()
  useEffect(()=>{
    const hash =getTokenFromUrl();
  window.location.hash = "";
  const token = hash.access_token;
  if(token){
    dispatch({
      type:"SET_TOKEN",
      token: token
    })

    spotify.setAccessToken(token)
    spotify.getMe().then((user)=>{
      dispatch({
        type:"SET_USER",
        user:user
      })
      
    })
  }
  })
  console.log("token:",token);
  console.log("user:" , user);
  return (
    <div className="App">
    {token ? <Player/> : <Login/>}
    </div> 
  );
}

export default App;

