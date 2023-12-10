import './Upload.css'
import React, {useState, useEffect} from 'react';
export const AddGbyL = () =>
{    
    const [selectedVegetables, setSelectedVegetables] = useState([]);
    const [customVegetable, setCustomVegetable] = useState([]);

    const handleVegetableChange = (event) => {
      const { value, checked } = event.target;
  
      // Update the selected vegetables based on checkbox state
      if (checked) {
        setSelectedVegetables((prevSelected) => [...prevSelected, value]);
      } else {
        setSelectedVegetables((prevSelected) =>
          prevSelected.filter((vegetable) => vegetable !== value)
        );
      }}

      const handleCustomVegetableChange = (event) => {
        setCustomVegetable(event.target.value);
      };
    
      const addCustomVegetable = () => {
        if (customVegetable.trim() !== '') {
          setSelectedVegetables((prevSelected) => [...prevSelected, customVegetable]);
          setCustomVegetable('');
        }};
    return (
        <>
        
        
        <div  className="formm">
        <h2>Garden Information</h2>
        <form id="gardenForm">
        <label for="location">Location:</label>
        <select id="location" name="location" required>
            <option value="Maynooth">Maynooth</option>
            <option value="Kilcock">Kilcock</option>
            <option value="Liffey valley">Liffey valley</option>
            <option value="Lucan">Lucan</option>
            <option value="Greenfield">Greenfield</option>
            <option value="Dublin">Dublin</option>
        </select>
        <br></br>
        <br></br>
        <label htmlFor="vegetables">Vegetables:</label>
          <div className="checkbox-group">
            <div className="checkbox-item">
            <input
                type="checkbox"
                id="carrot"
                name="carrot"
                value="carrot"
                onChange={handleVegetableChange}
              />
              <label htmlFor="carrot">Carrot</label>
            </div>

            <div className="checkbox-item">
              <input
                type="checkbox"
                id="tomato"
                name="tomato"
                value="tomato"
                onChange={handleVegetableChange}
              />
              <label htmlFor="tomato">Tomato</label>
            </div>

            <div className="checkbox-item">
              <input
                type="checkbox"
                id="spinach"
                name="spinach"
                value="spinach"
                onChange={handleVegetableChange}
              />
              <label htmlFor="spinach">Spinach</label>
            </div>

            <div className="checkbox-item">
              <input
                type="checkbox"
                id="bellPepper"
                name="bellPepper"
                value="bellPepper"
                onChange={handleVegetableChange}
              />
              <label htmlFor="bellPepper">Bell Pepper</label>
            </div>

            <div className="checkbox-item">
              <input
                type="checkbox"
                id="broccoli"
                name="broccoli"
                value="broccoli"
                onChange={handleVegetableChange}
              />
              <label htmlFor="broccoli">Broccoli</label>
            </div>

            <div className="checkbox-item">
              <input
                type="checkbox"
                id="cucumber"
                name="cucumber"
                value="cucumber"
                onChange={handleVegetableChange}
              />
              <label htmlFor="cucumber">Cucumber</label>
            </div>

            <div className="checkbox-item">
              <input
                type="checkbox"
                id="potato"
                name="potato"
                value="potato"
                onChange={handleVegetableChange}
              />
              <label htmlFor="potato">Potato</label>
            </div>

            <div className="checkbox-item">
              <input
                type="checkbox"
                id="beetroot"
                name="beetroot"
                value="beetroot"
                onChange={handleVegetableChange}
              />
              <label htmlFor="beetroot">Beetroot</label>
            </div>

            <div className="checkbox-item">
              <input
                type="checkbox"
                id="onion"
                name="onion"
                value="onion"
                onChange={handleVegetableChange}
              />
              <label htmlFor="onion">Onion</label>
            </div>

            <div className="checkbox-item">
              <input
                type="checkbox"
                id="lettuce"
                name="lettuce"
                value="lettuce"
                onChange={handleVegetableChange}
              />
              <label htmlFor="lettuce">Lettuce</label> </div>
              {selectedVegetables.map((vegetable) => (
              <div className="checkbox-item" key={vegetable}>
                <input
                  type="checkbox"
                  id={vegetable}
                  name={vegetable}
                  value={vegetable}
                  onChange={handleVegetableChange}
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
                value={customVegetable}
                onChange={handleCustomVegetableChange}
              />
              <button type="button" onClick={addCustomVegetable}>
               Add
              </button>
            </div>
          </div>
          <br />
        <br></br>
        
        <label for="fruits">Fruits (comma-separated):</label>
        <input type="text" id="fruits" name="fruits" required/>
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
        
        <button type="button" onclick="submitForm()">Submit</button>
        <br></br>
        
            </form>
        </div>
        </>
    
    
    
    
    );
}

