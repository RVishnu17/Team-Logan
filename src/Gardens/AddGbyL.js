import './Upload.css'
import React, {useState, useEffect} from 'react';
export const AddGbyL = (props) =>
{    const [vegetablesincart, setvegetablesincart] = useState([]);
    const [selectedVegetables, setSelectedVegetables] = useState(() => {
      return props.vegdata.map((i)=> i.name);
    });
    const [customVegetable, setCustomVegetable] = useState([]);
      const handleCustomVegetableChange = (event) => {
        
        setCustomVegetable((prevCustomVegetable) => {
            
            
            return event.target.value;

          });
          
        };
        const handletickveg = (event) => {
          const {value, checked} = event.target;

          if(checked)
          {
            setvegetablesincart((prevSelected) => [...prevSelected, value]);
          }
          else
          {
            console.log(value + "unticked! and in cart : " + vegetablesincart);
          }
        }
      const addCustomVegetable = () => {
        if (customVegetable.trim() !== '') {
          setSelectedVegetables((prevSelected) => [...prevSelected, customVegetable]);
          
         // console.log('total' + selectedVegetables);
         // console.log('now adding' + customVegetable);
         setCustomVegetable('');
          
         
        }};
    return (
        <>
        
        
        <div  className="formm">
        <h2>Garden Information  </h2>
        <form id="gardenForm">
        <label htmlFor="location">Location:</label>
    <select id="location" name="location" required>
      {props.locinfo.map((location, index) => (
        <option key={index}>{location}</option>
      ))}
    </select>
        
 

        
        
        <br></br>
        <br></br>
        <label htmlFor="vegetables">Vegetables and fruits :</label>
          <div className="checkbox-group">
          {selectedVegetables.map((vegetable) => (
              <div className="checkbox-item" key={vegetable}>
                <input
                  type="checkbox"
                  id={vegetable}
                  onChange={handletickveg}
                  name={vegetable}
                  value={vegetable}
                
                />
                <label htmlFor={vegetable}>{vegetable}</label>
              </div>
            ))}
             
            <div className="checkbox-item">
              <input
                type="text"
                id="customVegetable"
                name="customVegetable"
                placeholder="Add Vegetable here"
                onChange={handleCustomVegetableChange}
              />
              <button type="button" onClick={addCustomVegetable}>
               Add, you already have : {vegetablesincart}
              </button>
            </div>
          </div>
          <br />
        <br></br>
        
        
        
        <label for="contactName">Contact Person Name:</label>
        <input type="text" id="contactName" name="contactName" required/>
        <br></br>
        
        <label for="contactEmail">Contact Person Email:</label>
        <input type="email" id="contactEmail" name="contactEmail" required/>
        <br></br>
        
        <label for="imageUrl">Garden Image URL:</label>
        <input type="url" id="imageUrl" name="imageUrl" required/>
        <br></br>
        
        <label for="description">Description:</label>
        <textarea id="description" name="description" rows="4" required></textarea>
        <br></br>
        
        <button type="button" onClick="submitForm()">Submit</button>
        <br></br>
        
            </form>
        </div>
        </>
    
    
    
    
    );
}

