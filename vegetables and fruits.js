import React, { useState, useEffect } from "react";

function FruitVegetableComponent() {
  const [selectedType, setSelectedType] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/Nikhat-ux/Team-Logan/main/Vegetables%20and%20Fruits.json"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleButtonClick = (type) => {
    setSelectedType(type);
  };

  let filteredData = [];
  if (selectedType === "fruits") {
    filteredData = data.fruits || [];
  } else if (selectedType === "vegetables") {
    filteredData = data.vegetables || [];
  }

  return (
    <div>
      <button onClick={() => handleButtonClick("vegetables")}>
        Show Vegetables
      </button>
      <button onClick={() => handleButtonClick("fruits")}>Show Fruits</button>

      <h2>Selected Type: {selectedType}</h2>

      {loading ? (
        <p>Loading data...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <ul>
          {filteredData.map((item, index) => (
            <li key={index}>
              <h3>{item.name}</h3>
              <img src={item.image_url} alt={item.name} />
              <p>
                Calories: {item.nutrition ? item.nutrition.calories : "N/A"}
              </p>
              <p>Growing Tips: {item.growing_tips || "Not available"}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FruitVegetableComponent;
