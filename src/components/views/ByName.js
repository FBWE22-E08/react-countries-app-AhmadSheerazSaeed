import React, { useState } from "react";
import CountryCard from "../CountryCard";
import SearchResult from "../SearchResult";

export default function ByName() {
  //save the user input in a local state (call it searchInput), then fetch that country on submit, then save the received country in another local state (call it country) - always check how does the response look like using console.log before saving it in the state.
  const [searchInput, setSearchInput] = useState("");
  const [countrySearched, setCountrySearched] = useState("");
  const [chkError, setCheckError] = useState(false);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchInput) {
      alert("Enter Country Name To Search");
    } else {
      fetchData();
    }
  };

  const fetchData = async () => {
    const response = await fetch(
      `https://restcountries.com/v2/name/${searchInput} `
    );

    if (response.ok) {
      const searchedCountry = await response.json();
      setCountrySearched(searchedCountry);
    } else {
      setCheckError(true);

      console.log("ERROR");
    }
  };

  return (
    <div>
      <form style={{ padding: "30px" }}>
        <input onChange={handleChange} type="text" />
        <button onClick={handleSubmit}>search</button>
      </form>
      {/* show the country you received from fetch and saved in the local state (use SearchResult component to display that country) */}
      {console.log(countrySearched.length)}
      {countrySearched.length > 0 ? (
        <CountryCard country={countrySearched[0]} />
      ) : (
        ""
      )}
    </div>
  );
}
