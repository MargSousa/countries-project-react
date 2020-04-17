import React from 'react';
import './CountryInfo.css';

class CountryInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryInfo: this.props.countryInformation,
      countryCurrencies: this.props.countryInformation.currencies[0],
      countryLanguages: this.props.countryInformation.languages[0],
    };
  }

  render() {
    let country = this.state.countryInfo;
    let currency = this.state.countryCurrencies;
    let languages = this.state.countryLanguages;

    return (
      <div className="Country-Info">
        <div className="section">
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
          <div className="flag">
            <img src={country.flag} className="flag-image" alt="flag" />
          </div>
        </div>
      </div>
    );
  }
}

export default CountryInfo;
