import React from "react";

function GuestPage(props) {
  return (
    <div>
      <h2>Welcome Guest!</h2>
      <p>You can view flight details below:</p>
      <ul>
        <li>✈️ Flight A – 10:00 AM – Mumbai to Delhi</li>
        <li>✈️ Flight B – 1:30 PM – Bangalore to Kolkata</li>
      </ul>
      <button onClick={props.onLogin}>Login to Book Tickets</button>
    </div>
  );
}

export default GuestPage;
