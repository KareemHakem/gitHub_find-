import React from "react";
import NavBar from "./layout/NavBar";
import Search from "./components/Search";
import UserItem from "./components/UsersItem";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Search />
      <UserItem />
    </div>
  );
}

export default App;
