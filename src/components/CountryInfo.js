import React from "react";
import axios from "axios";
import "./CountryInfo.css";

class CountryInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryName: this.props.countryName,
      countryInfo: [],
      countryCurrencies: [],
      countryLanguages: [],
    };
  }

  componentDidMount = () => {
    let url = `https://restcountries.eu/rest/v2/all`;
    axios
      .get(url)
      .then((response) => response.data)
      .then((getCountries) => {
        let countryData = getCountries.filter(
          (element) => element.name === this.state.countryName
        );
        this.setState({
          countryInfo: countryData[0],
          countryCurrencies: countryData[0].currencies[0],
          countryLanguages: countryData[0].languages[0],
        });
      });
  };

  render() {
    let country = this.state.countryInfo;
    let currency = this.state.countryCurrencies;
    let languages = this.state.countryLanguages;

    // let currencies = this.state.countryInfo.currencies[0].name;
    // <p>Currency:{country.currencies[0].name}</p>
    // console.log("info", this.state.countryInfo.currencies[0].name);
    // console.log("info", countryData[0].languages[0]);

    return (
      <div className="Country-Info">
        <div className="section">
          <div className="flag">
            <img src={country.flag} className="flag-image" alt="flag" />
          </div>
          <div className="information">
            <div className="country-title">{country.name}</div>
            <div className="native-title">{country.subregion}</div>
            <div>Capital: {country.capital}</div>
            <div>Population: {country.population}</div>
            <div>
              Currency: {currency.name} ({currency.symbol})
            </div>
            <div>Language: {languages.name}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CountryInfo;
