import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  // add NavLinks to allow the user to navigate to the 3 pages of the app
  return (
    <div className="header">
      <Link to="./allCountries">All Counteries</Link>
      <Link to="/byregion">By Region</Link>
      <Link to="/byname">By Name</Link>
    </div>
  );
}
