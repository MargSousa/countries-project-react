import React from 'react';
import './CountryInfo.css';

function CountryInfo(props) {
  let { countryInformation } = props;
  let languages = countryInformation.languages[0].name;
  let currencies = countryInformation.currencies[0];
  let population = countryInformation.population
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

  return (
    <div className="Country-Info">
      <div className="section">
        <div className="information">
          <div className="country-title">{countryInformation.name}</div>
          <div className="native-title">{countryInformation.subregion}</div>
          <div>Capital: {countryInformation.capital}</div>
          <div>Population: {population} hab.</div>
          <div>
            Currency: {currencies.name} ({currencies.symbol})
          </div>
          <div>Language: {languages}</div>
        </div>
        <div className="flag">
          <img
            src={countryInformation.flag}
            className="flag-image"
            alt="flag"
          />
        </div>
      </div>
    </div>
  );
}

export default CountryInfo;
