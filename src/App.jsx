import axios from 'axios';
import React, {useState, useEffect} from 'react'
import Card from './components/Card';
import './App.scss'
const url = "https://randomuser.me/api/";
const App = () => {
   const [user, setUser] = useState("");
   const users = async () =>{
    try {
        const {data} = await axios.get(url);
        setUser(data.results[0]);
    } catch (error) {
        alert(error);
    }
   }
   useEffect(() =>{
    users();
   }, [])
  return (
    <>
        <div className='App'>
            {user && <Card user = {user}/>}
        </div>
        <button className='button' onClick={users}>Random User</button>
    </>
  )
}
export default App