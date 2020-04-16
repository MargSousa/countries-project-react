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
        //console.log("countries", this.state.countries);
      });
  };

  handleChange = (event) => {
    let countryName = event.target.value;
    console.log(countryName);

    this.setState({
      selectedCountry: countryName,
    });
  };

  render() {
    return (
      <div className="Welcome">
        <h1>Welcome</h1>
        <h3>Choose a country to get all the details!</h3>
        <select
          name="country"
          value={this.state.selectedCountry}
          onChange={this.handleChange}
        >
          <option>Please select a country....</option>
          {this.state.countries.map((country) => (
            <option key={country} value={country}>
              {" "}
              {country}{" "}
            </option>
          ))}
        </select>
        <p>Country selected: {this.state.selectedCountry}</p>
      </div>
    );
  }
}

export default Welcome;
