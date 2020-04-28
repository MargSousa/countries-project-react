import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Welcome.css';
import CountryInfo from './CountryInfo';

// 1.	User enters the site with a welcome message saying "please select a country" with a dropdown of all the countries returned from the api.
// 2.	The user selects a country and all of the information that you want to display about that country is rendered.
// 3.	The user can then change country as they wish and the page must update the content shown to be relevant to the country selected

function Welcome() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCountryInfo, setSelectedCountryInfo] = useState([]);
  const [isCountrySelected, setIsCountrySelected] = useState(false);

  useEffect(() => {
    getCountries();
  }, []);

  function getCountries() {
    let url = `https://restcountries.eu/rest/v2/all`;
    axios
      .get(url)
      .then((response) => response.data)
      .then((getCountries) => {
        let getCountriesData = getCountries.map((element) => element);
        setCountries(getCountriesData);
      });
  }

  function handleChange(event) {
    let countrySelected = event.target.value;
    let countrySelectedData = countries.filter(
      (element) => element.name === countrySelected,
    );
    setIsCountrySelected(true);
    setSelectedCountry(countrySelected);
    setSelectedCountryInfo(countrySelectedData[0]);
  }

  return (
    <div className="Welcome">
      <h2 className="main-title">Explore the world</h2>
      <h5 className="title">Choose a country to get all the details!</h5>
      <form>
        <select
          className="select-form"
          name="country"
          value={selectedCountry}
          onChange={handleChange}
        >
          <option>Please select a country....</option>
          {countries.map((country) => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </form>
      {isCountrySelected && (
        <div>
          <CountryInfo countryInformation={selectedCountryInfo} />
        </div>
      )}
    </div>
  );
}

// class Welcome extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       countries: [],
//       selectedCountry: '',
//       countryInformation: [],
//       isCountrySelected: false,
//     };
//   }

//   getCountries = () => {
//     let url = `https://restcountries.eu/rest/v2/all`;
//     axios
//       .get(url)
//       .then((response) => response.data)
//       .then((getCountries) => {
//         let getCountriesData = getCountries.map((element) => element);
//         this.setState({
//           countries: getCountriesData,
//         });
//       });
//   };

//   componentDidMount = () => {
//     this.getCountries();
//   };

//   handleChange = (event) => {
//     event.preventDefault();
//     let countryName = event.target.value;
//     let selected = true;
//     let countryData = this.state.countries.filter(
//       (element) => element.name === countryName,
//     );
//     this.setState({
//       countryInformation: countryData[0],
//       selectedCountry: countryName,
//       isCountrySelected: selected,
//     });
//   };

//   render() {
//     return (
//       <div className="Welcome">
//         <h2 className="main-title">Explore the world</h2>
//         <h5 className="title">Choose a country to get all the details!</h5>
//         <form>
//           <select
//             className="select-form"
//             name="country"
//             value={this.state.selectedCountry}
//             onChange={this.handleChange}
//           >
//             <option>Please select a country....</option>
//             {this.state.countries.map((country) => (
//               <option key={country.name} value={country.name}>
//                 {country.name}
//               </option>
//             ))}
//           </select>
//         </form>
//         {this.state.isCountrySelected && (
//           <div>
//             <CountryInfo countryInformation={this.state.countryInformation} />
//           </div>
//         )}
//       </div>
//     );
//   }
// }

export default Welcome;
