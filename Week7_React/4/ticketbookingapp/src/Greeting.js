// src/Greeting.js
import React from 'react';

function UserGreeting() {
  return <h1>Welcome back</h1>;
}

function GuestGreeting() {
  return <h1>Please sign up.</h1>;
}

export function Greeting({ isLoggedIn }) {
  return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
}
