import React from "react";
import officeImage from "./image.png"; // ✅ Import your image

function App() {
  const heading = <h1>Office Space , at Affordable Range</h1>;

  const office = {
    name: "DBS",
    rent: 50000,
    address: "Chennai",
  };

  const rentStyle = {
    color: office.rent < 60000 ? "red" : "green",
    fontWeight: "bold",
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {heading}
      <img
        src={officeImage} // ✅ Use the imported image here
        alt="Office Space"
        style={{ width: "300px", height: "300px", display: "block", margin: "20px 0" }}
      />
      <p><strong>Name:</strong> {office.name}</p>
      <p><strong style={rentStyle}>Rent: Rs. {office.rent}</strong></p>
      <p><strong>Address:</strong> {office.address}</p>
    </div>
  );
}

export default App;
