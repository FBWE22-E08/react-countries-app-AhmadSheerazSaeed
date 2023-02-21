import React, { useEffect, useState } from "react";
import CountryCard from "../CountryCard";

export default function ByRegion() {
  //save the user input in the pre-made local state (region), then fetch all countries of that region on page load and make sure it gets executed every time the state (region) changes (what hook should you use for that? and what should you add to it?) then save the received array of countries in a local state (call it countries)

  const [region, setRegion] = useState("Africa");
  const [regionalData, setRegionalData] = useState([]);

  const handleChange = (e) => {
    setRegion(e.target.value);
  };

  const fetchData = async () => {
    const response = await fetch(
      `https://restcountries.com/v2/region/${region}`
    );

    if (response.ok) {
      const fetchedDataJson = await response.json();
      setRegionalData(fetchedDataJson);
    } else {
      setRegionalData([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [region]);

  return (
    <div onChange={handleChange}>
      <input type={"radio"} name="region" defaultChecked value="Africa" />
      <label style={{ marginRight: "15px" }}>Africa</label>
      <input type={"radio"} name="region" value="Americas" />
      <label style={{ marginRight: "15px" }}>America</label>
      <input type={"radio"} name="region" value="Asia" />
      <label style={{ marginRight: "15px" }}>Asia</label>
      <input type={"radio"} name="region" value="Europe" />
      <label style={{ marginRight: "15px" }}>Europe</label>
      <input type={"radio"} name="region" value="Oceania" />
      <label>Oceania</label>

      <div className="cardsContainer">
        {/* show the countries you received from fetch and saved in the local state (use CountryCard component to display each individual one) */}
        {regionalData.length > 0 ? (
          regionalData.map((elem, i) => <CountryCard key={i} country={elem} />)
        ) : (
          <h2>No Data To Print</h2>
        )}
      </div>
    </div>
  );
}
