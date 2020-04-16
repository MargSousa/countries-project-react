import React from "react";
import axios from "axios";
import "./Welcome.css";

//1.	User enters the site with a welcome message saying "please select a country" with a dropdown of all the countries returned from the api.

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      selectedCountry: "",
    };
  }

  componentDidMount = () => {
    let url = `https://restcountries.eu/rest/v2/all`;
    axios
      .get(url)
      .then((response) => response.data)
      .then((getCountries) => {
        //console.log("countries", getCountries);
        let nameCountries = getCountries.map((element) => element.name);
        this.setState({
          countries: nameCountries,
        });
      });
  };

  handleChange = (event) => {
    let countryName = event.target.value;
    this.setState({
      selectedCountry: countryName,
    });
  };

  render() {
    return (
      <div className="Welcome">
        <h2 className="title">Explore the world</h2>
        <h4>Choose a country to get all the details!</h4>
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
        <p>Country selected: {this.state.selectedCountry}</p>
      </div>
    );
  }
}

export default Welcome;
