import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
import {AddGbyL} from './Gardens/AddGbyL'
const firebaseConfig = {
  apiKey: "AIzaSyAWYp7Lkkafo-Kw2nLCY929zPXMjNp0KG8",
  authDomain: "makeyourownveggies.firebaseapp.com",
  projectId: "makeyourownveggies",
  storageBucket: "makeyourownveggies.appspot.com",
  messagingSenderId: "112820819708",
  appId: "1:112820819708:web:36b836c1997163321b2979",
  measurementId: "G-ZENTVWQ1JL"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
var show_upl = false;

function App() {
  const [data, setData]  = useState(null);
  const [loc, setLoc] = useState(null);
  const [error, Seterror] = useState(null);
  const [show_comp, Setshow] = useState(0);
  function handleclickonloc(e)
{ 
 setLoc(e);
}
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataRef = ref(database, '/'); 
        const dataSnapshot = await get(dataRef);
        setData(dataSnapshot.val());
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
  function changeLoc(l)
  {
    setData(l);
  }

  
  function changeupl()
  {

    Setshow(show_comp + 1);
    console.log(show_comp);
    if(show_comp %2 ===0)
    {
      show_upl = true;
    }
    else{
      show_upl = false;
    }
  }
  function filbyloc(L)
  {
      new function(obj)
      {
        let match = L.toLowerCase();
        let targetl = obj.location.toLowerCase();

        return targetl.incudes(match);
      }
  }

  
return (
    <div>
      
      <h1 className="Headertxt">MakeYourOwnVeggies</h1>
      <div  className="container dropdown">
      <button className="right-aligned-button  dropbtn">Search Gardens on Locations </button>
      <div className="dropdown-content">
      {data && (data.map((p, index)=>
      (
        
      <a key={index} onClick={() => handleclickonloc(p.garden.location)}> {p.garden.location} </a>
      )))
      
      
}
</div>
    
    <button align="right" className="upbtn" onClick={changeupl} >Upload your garden</button>
        </div>

        {show_upl && <AddGbyL />}
</div>
    
  );
}
/*
  <h1 class="Headertxt">MakeYourOwnVeggie</h1>
      <div  class="container dropdown">
      <button class="right-aligned-button  dropbtn">Search Gardens on Locations </button>  
      
      
      {data&& (locarr.map((p)=>
      (
        <div class="dropdown-content">
      <a href="#"> p.location </a>
    
    </div>
      )))
      
      
}
    </div>*/
export default App;
