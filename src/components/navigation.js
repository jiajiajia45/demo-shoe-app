import React from 'react';
 
import { NavLink } from 'react-router-dom';
function Navigation  ()  {
    return (
       <div>
          <NavLink to="/">Leather Shoe--</NavLink>
          <NavLink to="/hike">--Hike Shoe--</NavLink>
          <NavLink to="/ladies">--Ladies variety--</NavLink>
          <NavLink to="/sandals">--plane sandals--</NavLink>
          <NavLink to="/skates">--Skates--</NavLink>
       </div>
    );
}
 
export default Navigation;