import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import CountryCard from "../CountryCard";

export default function AllCountries() {
  // fetch all countries on page load (what hook should you use for that?) then save the received array of countries in a local state (call it countries)

  const [counteries, setCounteries] = useState([]);

  const fetchCounteries = async () => {
    const fetchedCounteriews = await fetch("https://restcountries.com/v2/all");
    const fetchedDataInJson = await fetchedCounteriews.json();
    setCounteries(fetchedDataInJson);
  };

  useEffect(() => {
    fetchCounteries();
  }, []);
  return (
    <div className="cardsContainer">
      {/* show the countries you received from fetch and saved in the local state (use CountryCard component to display each individual one) */}

      {counteries.map((elem, i) => (
        <NavLink key={i} to={`/OneCountry/${elem.alpha2Code}`}>
          <CountryCard country={elem} />
        </NavLink>
      ))}
    </div>
  );
}
