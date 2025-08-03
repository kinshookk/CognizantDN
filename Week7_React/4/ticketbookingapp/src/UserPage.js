import React from "react";

function UserPage(props) {
  return (
    <div>
      <h2>Welcome, User!</h2>
      <p>You can now book your flights:</p>
      <ul>
        <li>
          Flight A – Mumbai to Delhi – ₹4500{" "}
          <button>Book Now</button>
        </li>
        <li>
          Flight B – Bangalore to Kolkata – ₹5500{" "}
          <button>Book Now</button>
        </li>
      </ul>
      <button onClick={props.onLogout}>Logout</button>
    </div>
  );
}

export default UserPage;
