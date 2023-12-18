import React, { useState } from "react";
import "./FrontPage.css"; // Import your CSS file

export const FrontPage = (props) => {
  const [randomgarden, setRandomgarden] = useState([]);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  let randomnumber = getRandomInt(6);
  
  return (
    <div className="front-page-container">
      <h1>Latest Additions:</h1>
      <div className="garden-info">
      <p><b>-------------------------------------------------------------------------------------------------------------------------------------------------------</b></p>
               
      <h2>Contact Person:</h2>
        <p>
          <strong>Name:</strong>{" "}
          {props.fview[randomnumber].garden.contact_person.name}
        </p>
        <p><b>-------------------------------------------------------------------------------------------------------------------------------------------------------</b></p>
               
        <p>
          <strong>Email:</strong>{" "}
          {props.fview[randomnumber].garden.contact_person.email}
        </p>
        <p><b>-------------------------------------------------------------------------------------------------------------------------------------------------------</b></p>
               
        <p>
          <strong>Location:</strong>{" "}
          {props.fview[randomnumber].garden.location}
        </p>
        <p><b>-------------------------------------------------------------------------------------------------------------------------------------------------------</b></p>
               
        <p>
          <strong>Description:</strong>{" "}
          {props.fview[randomnumber].garden.description}
        </p>
        <p><b>-------------------------------------------------------------------------------------------------------------------------------------------------------</b></p>
               

        <h2>Vegetables:</h2>
        <ul>
          {props.fview[randomnumber].garden.vegetables.map((vegetable, index) => (
            <li key={index}>{vegetable}</li>
          ))}
        </ul>
        <p><b>-------------------------------------------------------------------------------------------------------------------------------------------------------</b></p>
               
        <h2>Fruits:</h2>
        <ul>
          {props.fview[randomnumber].garden.fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
        <p><b>-------------------------------------------------------------------------------------------------------------------------------------------------------</b></p>
               
       

        <img
          src={props.fview[randomnumber].garden.garden_image_url}
          alt="Garden"
          className="garden-image"
        />
        <p><b>-------------------------------------------------------------------------------------------------------------------------------------------------------</b></p>
               
      </div>
    </div>
  );
};
