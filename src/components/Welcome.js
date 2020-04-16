import React from "react";
import axios from "axios";
import "./Welcome.css";
import CountryInfo from "./CountryInfo";

// 1.	User enters the site with a welcome message saying "please select a country" with a dropdown of all the countries returned from the api.
// 2.	The user selects a country and all of the information that you want to display about that country is rendered.
// 3.	The user can then change country as they wish and the page must update the content shown to be relevant to the country selected

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      selectedCountry: "",
      isCountrySelected: false,
    };
  }

  componentDidMount = () => {
    let url = `https://restcountries.eu/rest/v2/all`;
    axios
      .get(url)
      .then((response) => response.data)
      .then((getCountries) => {
        let nameCountries = getCountries.map((element) => element.name);
        this.setState({
          countries: nameCountries,
        });
      });
  };

  // componentDidUpdate = () => {
  //   console.log()
  // };

  handleChange = (event) => {
    event.preventDefault();
    let countryName = event.target.value;
    let selected = true;

    console.log("selected", countryName);

    this.setState({
      selectedCountry: countryName,
      isCountrySelected: selected,
    });

    console.log("state-country", this.state.selectedCountry);
  };

  render() {
    return (
      <div className="Welcome">
        <h2 className="title main-title">Explore the world</h2>
        <h5 className="title">Choose a country to get all the details!</h5>

        <select
          className="select-form"
          name="country"
          value={this.state.selectedCountry}
          onChange={this.handleChange}
        >
          <option>Please select a country....</option>
          {this.state.countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>

        {this.state.isCountrySelected && (
          <div>
            <CountryInfo countryName={this.state.selectedCountry} />
          </div>
        )}
      </div>
    );
  }
}

export default Welcome;
