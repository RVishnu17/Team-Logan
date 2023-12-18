import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
import {AddGbyL} from './Gardens/AddGbyL'
import { FrontPage } from './Gardens/FrontPage';
import ShowGbyL from './Gardens/ShowGbyL';
const firebaseConfig = {
  apiKey: "AIzaSyAWYp7Lkkafo-Kw2nLCY929zPXMjNp0KG8",
  authDomain: "makeyourownveggies.firebaseapp.com",
  projectId: "makeyourownveggies",
  storageBucket: "makeyourownveggies.appspot.com",
  messagingSenderId: "112820819708",
  appId: "1:112820819708:web:36b836c1997163321b2979",
  measurementId: "G-ZENTVWQ1JL"
};
const vegURL = "https://raw.githubusercontent.com/Nikhat-ux/Team-Logan/main/Vegetables%20and%20Fruits.json";
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
var show_upl = false;
var show_gl = false;

function App() {
  const [data, setData]  = useState(null);
  const [loc, setLoc] = useState(null);
  const [error, Seterror] = useState(null);
  const [show_comp, Setshow] = useState(0);
  const [veginfo, Setveginfo] = useState([]);
  function handleclickonloc(e)
{ 
 setLoc(e);
 show_gl = true;

}
let locforupload = data ? data.map((i) => i.garden.location) : [];
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
    const fetchData_1 = async () => {
      try{
      const response = await fetch(vegURL);
      const JSON = await response.json();
      Setveginfo(JSON.vegetables);
    }
  
  catch(error)
  {
    Seterror(error);

  }
};

fetchData_1();  
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
    show_gl = false;
  }
  
 console.log("clicked location : " + show_gl);
 console.log("clicked upload : " + show_upl);
 console.log("Location Array : +  " + locforupload);
return (
    <div>
      
      <h1 className="Headertxt"> <a href=''>MakeYourOwnVeggies </a></h1>
      <button align="right" className="upbtn" onClick={changeupl} >Upload your garden</button>
   
      <div  className="container dropdown">
      
      <button className="right-aligned-button  dropbtn">Search Gardens on Locations { loc} </button>
      <div className="dropdown-content">
      {data && (data.map((p, index)=>
      (
        
      <a key={index} onClick={() => handleclickonloc(p.garden.location)}> {p.garden.location} </a>
      )))
      
      
}
</div>
    
   
        </div>
        {show_gl && data && <ShowGbyL selectedlocation={loc} sview={data} /> }
        {!show_upl && !show_gl && data && <FrontPage fview={data}/>}
        {show_upl && !show_gl && data && <AddGbyL vegdata={veginfo} locinfo={locforupload}  />}
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
