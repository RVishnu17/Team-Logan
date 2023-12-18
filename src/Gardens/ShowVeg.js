import './ShowVeg.css';
import { useEffect, useState } from 'react';



export const AddVegFruit = ({ vegnfru }) => {
    const [expandedItem, setExpandedItem] = useState(null);
  
    const handleExpand = (index) => {
      setExpandedItem(expandedItem === index ? null : index);
    };
  
    return (
      <div>
        <h2>Vegetables and Fruits</h2>
        {vegnfru.map((item, index) => (
          <div key={index}>
            <h3 onClick={() => handleExpand(index)}>
              {item.name}
            </h3>
            {expandedItem === index && (
              <div>
                <img src={item.image_url} alt={item.name} style={{ maxWidth: '300px' }} />
                <p><strong>Nutrition:</strong></p>
                <ul>
                  <li><b>Calories:</b> {item.nutrition.calories}</li>
                  <li><b>Carbohydrates:</b> {item.nutrition.carbohydrates}</li>
                  <li><b>Fiber:</b> {item.nutrition.fiber}</li>
                  <li><b>Vitamin A:</b> {item.nutrition.vitamin_A}</li>
                  <li><b>Vitamin C: </b>{item.nutrition.vitamin_C}</li>
                </ul>
                <p><strong>Growing Tips: </strong>{item.growing_tips}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

