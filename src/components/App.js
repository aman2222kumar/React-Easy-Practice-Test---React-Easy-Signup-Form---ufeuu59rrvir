import React from "react";
import "../styles/App.css";

const App = () => {
  function HandleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <form onSubmit={HandleSubmit}>
        <label>
          Enter Name:
          <input type="text" name="name"></input>
        </label>
        <br />
        <label>
          Enter Email:
          <input type="email" name="email"></input>
        </label>
        <br />
        <label>
          Enter Password:
          <input type="password" name="password"></input>
        </label>
        <br />
        <label>
          your consent:
          <input type="checkbox" name="checkbox"></input>
        </label>
        <br />
        <button>sign up</button>
      </form>
    </>
  );
};

export default App;
