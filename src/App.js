import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';
import {AddGbyL} from './Gardens/AddGbyL'
import { FrontPage } from './Gardens/FrontPage';
import ShowGbyL from './Gardens/ShowGbyL';
import ShowVeg, { AddVegFruit } from './Gardens/ShowVeg';
const firebaseConfig = {
  apiKey: "AIzaSyAWYp7Lkkafo-Kw2nLCY929zPXMjNp0KG8",
  authDomain: "makeyourownveggies.firebaseapp.com",
  projectId: "makeyourownveggies",
  storageBucket: "makeyourownveggies.appspot.com",
  messagingSenderId: "112820819708",
  appId: "1:112820819708:web:36b836c1997163321b2979",
  measurementId: "G-ZENTVWQ1JL"
};
const vegURL = "https://raw.githubusercontent.com/RVishnu17/Team-Logan/main/Vegetables%20and%20Fruits.json";
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
var show_upl = false;
var show_gl = false;
var vegview = false;

const App = () => {
  const [data, setData] = useState(null);
  const [loc, setLoc] = useState(null);
  const [error, setError] = useState(null);
  const [showComp, setShowComp] = useState(0);
  const [vegInfo, setVegInfo] = useState([]);
  const [showUpl, setShowUpl] = useState(false);
  const [showGl, setShowGl] = useState(false);
  const [vegView, setVegView] = useState(false);

  const handleLocationClick = (e) => {
    setLoc(e);
    setShowGl(true);
  };

  const locForUpload = data ? data.map((i) => i.garden.location) : [];

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
      try {
        const response = await fetch(vegURL);
        const jsonData = await response.json();
        setVegInfo(jsonData.vegetables);
      } catch (error) {
        setError(error);
      }
    };

    fetchData_1();
    fetchData();
  }, []);

  const changeLoc = (l) => {
    setData(l);
  };

  const changeUpl = () => {
    setShowComp((prevComp) => prevComp + 1);
    setShowUpl((prevShowUpl) => !prevShowUpl);
    setShowGl(false);
  };

  const handleVegViewClick = () => {
    setVegView(true);
  };

  console.log(
    `show garden button: ${showGl}, upload button: ${showUpl}, vegtips button: ${vegView}`
  );

  return (
    <div>
      <h1 className="Headertxt">
        <a href="">MakeYourGreens </a>
      </h1>
      <button className="upbtn" onClick={changeUpl}>
        Upload your garden
      </button>

      <div className="container dropdown">
        <button className="right-aligned-button dropbtn">
          Search Gardens on Locations
        </button>

        <div className="dropdown-content">
          {data &&
            data.map((p, index) => (
              <a key={index} onClick={() => handleLocationClick(p.garden.location)}>
                {p.garden.location}
              </a>
            ))}
        </div>
      </div>

      {vegView && !showUpl && !showGl && vegInfo && <AddVegFruit vegnfru={vegInfo} />}
      {showGl && data && <ShowGbyL selectedlocation={loc} sview={data} />}
      {!vegView && !showUpl && !showGl && data && <FrontPage fview={data} />}
      {showUpl && !showGl && data && <AddGbyL vegdata={vegInfo} locinfo={locForUpload} />}
      <button className="upbtn" onClick={handleVegViewClick}>
        Tips on Growing Veggies
      </button>
    </div>
  );
};

export default App;
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

