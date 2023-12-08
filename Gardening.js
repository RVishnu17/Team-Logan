import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [locationFilter, setLocationFilter] = useState("");
  const [descriptionFilter, setDescriptionFilter] = useState("");
  const [contactFilter, setContactFilter] = useState("");

  useEffect(() => {
    const URL =
      "https://raw.githubusercontent.com/Nikhat-ux/Team-Logan/main/Garden.json";

    async function fetchData() {
      try {
        const response = await fetch(URL);
        const json = await response.json();
        setLoading(true);
        setData(json);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const filteredData = data.filter((garden) => {
    return (
      garden.garden.location
        .toLowerCase()
        .includes(locationFilter.toLowerCase()) &&
      garden.garden.description
        .toLowerCase()
        .includes(descriptionFilter.toLowerCase()) &&
      garden.garden.contact_person.name
        .toLowerCase()
        .includes(contactFilter.toLowerCase())
    );
  });

  const handleLocationFilter = () => {
    // Filter data based on location input
    // Update state accordingly
    // This function could be invoked by a button click
    // or integrated into a button event handler
    // Here's an example of integration with a button:
    // <button onClick={handleLocationFilter}>Filter by Location</button>
    // Similar buttons can be created for other filters
    // using respective handler functions.
    // Update state using setLocationFilter(value)
    console.log("Filter by Location:", locationFilter);
  };

  const handleDescriptionFilter = () => {
    // Handle filtering by description
    console.log("Filter by Description:", descriptionFilter);
  };

  const handleContactFilter = () => {
    // Handle filtering by contact person
    console.log("Filter by Contact Person:", contactFilter);
  };

  if (error) {
    return <h1>Error: {error.toString()}</h1>;
  } else if (!loading) {
    return <h1>Loading Data...</h1>;
  } else {
    return (
      <>
        <div>
          {/* Button for filtering by location */}
          <input
            type="text"
            placeholder="Filter by Location"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          />
          <button onClick={handleLocationFilter}>Filter by Location</button>

          {/* Button for filtering by description */}
          <input
            type="text"
            placeholder="Filter by Description"
            value={descriptionFilter}
            onChange={(e) => setDescriptionFilter(e.target.value)}
          />
          <button onClick={handleDescriptionFilter}>
            Filter by Description
          </button>

          {/* Button for filtering by contact person */}
          <input
            type="text"
            placeholder="Filter by Contact Person"
            value={contactFilter}
            onChange={(e) => setContactFilter(e.target.value)}
          />
          <button onClick={handleContactFilter}>
            Filter by Contact Person
          </button>
        </div>

        {filteredData.map((garden, index) => (
          <div key={index}>
            <h2>{garden.garden.location}</h2>
            <p>{garden.garden.description}</p>
            <p>Contact Person: {garden.garden.contact_person.name}</p>
            <img
              src={garden.garden.garden_image_url}
              alt={garden.garden.location}
            />
          </div>
        ))}
      </>
    );
  }
}

export default App;
