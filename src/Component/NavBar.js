import { useState } from "react";
import "../App.css"

const NavBar = ({ unCompletedTodos , onSelect , status}) => {
    if(!unCompletedTodos) return  <h2 className="NB-header"> Set Your Todos</h2>
  return (
    <header>
          <span>{unCompletedTodos}</span>
          <h2>not Completed</h2>
          <select onChange={onSelect} value={status} className="Nav-select">
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="UnCompleted">UnCompleted</option>
          </select>
    </header>
  );
};

export default NavBar;
