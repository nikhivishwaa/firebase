import { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import app from "./config/firebase";
import "./App.css";

// create database instance
db = getDatabase(app);

function App() {
  const addentry = () => {
    set(ref(app, "users/nikhivishwa"), {
      id: 1,
      name: "nikhil vishwakarma",
      email: "nikhil@gmail.com",
    });
  };

  return (
    <>
      <div>
        <h1>Welcome to firebase youtube app</h1>
        <button onClick={addentry}>Add New</button>
      </div>
    </>
  );
}

export default App;
