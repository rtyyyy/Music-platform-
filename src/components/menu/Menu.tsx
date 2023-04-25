import React from "react";
import "./menu.css";
import {  Link } from "react-router-dom";

function Menu({ header, items, active, setActive }) {
  return (
    <div
      className={active ? "menu active" : "menu"}
      onClick={() => setActive(false)}
    >
      <div className="blur" />
      <div className="menu__content" onClick={(e) => e.stopPropagation()}>
        <div className="menu__header">{header}</div>
        
        <ul>
          {items.map((item) => (
            <li>
              
              <Link to={item.href}>
              
              {item.value} 
              </Link>
            </li>
          ))}
          
        </ul>
      </div>
    </div>
  );
}

export default Menu;
