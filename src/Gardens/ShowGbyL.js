import './FrontPage.css';
import { useEffect, useState } from 'react';


function ShowGbyL(props)
{
    function filbyloc(L)
  {
      return function(obj)
      {
        let match = L.toLowerCase();
        let targetl = obj.garden.location.toLowerCase();

        return targetl.includes(match);
      }


console.log(" L : " + L);
  }
    return (
        
        <div className="front-page-container">
       <p>
                 <strong>Location:</strong>{" "}
                 {props.selectedlocation}
               </p>
               <p><b>----------------------------------------------------------------------------------------------------------------------------------------------------------</b></p>
            
      { props.sview.filter(filbyloc(props.selectedlocation)).map((i) => (
                <div className="garden-info">
              
               <p>
               <h2>Contact Person:</h2>
               <p>
                 <strong>Name:</strong>{" "}
                 {i.garden.contact_person.name}
               </p>
               <p>
                 <strong>Email:</strong>{" "}
                 {i.garden.contact_person.email}
               </p>
                 <strong>Description:</strong>{" "}
                 {i.garden.description}
               </p>
       
               <h2>Vegetables:</h2>
               <ul>
                 {i.garden.vegetables.map((vegetable, index) => (
                   <li key={index}>{vegetable}</li>
                 ))}
               </ul>
       
               <h2>Fruits:</h2>
               <ul>
                 {i.garden.fruits.map((fruit, index) => (
                   <li key={index}>{fruit}</li>
                 ))}
               </ul>
       
               
       
               <img
                 src={i.garden.garden_image_url}
                 alt="Garden"
                 className="garden-image"
               />
               <p><b>----------------------------------------------------------------------------------------------------------------------------------------------------------</b></p>
             </div>
      )

       )}
   
    </div>
        
    );
}

export default ShowGbyL;