import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Services = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Make the GET request
    axios.get('http://127.0.0.1:8000/')
      .then(response => {
        // Handle the response data
        setData(response.data);
      })
      .catch(error => {
        // Handle any errors
        setError(error);
        console.error("There was an error making the GET request!", error);
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className = "SignUp">
      <h3>Fetched Data:</h3>
      {/*error && <p>Error: {error.message}</p>*/}
      {data}
    </div>
  );
};

export default Services;
