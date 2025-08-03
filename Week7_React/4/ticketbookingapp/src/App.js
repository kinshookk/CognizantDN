// src/App.js
import React, { useState } from 'react';
import { Greeting } from './Greeting';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => setIsLoggedIn(true);
  const handleLogoutClick = () => setIsLoggedIn(false);

  let button;
  if (isLoggedIn) {
    button = <button onClick={handleLogoutClick}>Logout</button>;
  } else {
    button = <button onClick={handleLoginClick}>Login</button>;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
  );
}

export default App;
