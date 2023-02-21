import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CountryCard from "./CountryCard";

function OneCountry() {
  let { code } = useParams();
  const [country, setCountry] = useState({});

  const fetchData = () => {
    fetch(`https://restcountries.com/v2/alpha/${code}`)
      .then((res) => res.json())
      .then((data) => {
        setCountry(data);
        console.log(country);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        padding: "10px",
        width: "400px",
        height: "570px",
        borderRadius: "20px",
        marginBottom: "20px",
      }}
    >
      <img src={country.flag} alt={country.name} width="200px" />
      <h1>{country.name}</h1>
      <span style={{ fontSize: "27px" }}>
        <b>Capital:</b> {country.capital}
      </span>
      <span style={{ fontSize: "27px" }}>
        <b> Area:</b> {country.area} km<sup>2</sup>
      </span>
      <div style={{ fontSize: "27px" }}>
        <b>Population:</b> {country.population}
        <p>
          <b>Demonym: </b>
          {country.demonym}
        </p>
        <p>
          <b>Native Name: </b>
          {country.nativeName}
        </p>
        <p>
          <b>Numeric Code: </b>
          {country.numericCode}
        </p>
        <p>
          <b>Region: </b>
          {country.region}
        </p>
        <p>
          <b>Subregion: </b>
          {country.subregion}
        </p>
      </div>
    </div>
  );
}

export default OneCountry;
