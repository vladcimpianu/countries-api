const countries = require('./CountriesMockdata');

// Get all countries
exports.getAllCountries = () => countries;

// Get one country
exports.getCountries = (countryName) => {
    const wantedCountries = countries.filter( country => country.domainName === countryName);
    return wantedCountries;
};

// Delete Country
exports.deleteCountry = (countryToDelete) => {
    const countriesLeft = countries.filter( country => country.domainName !== countryToDelete)
    return countriesLeft;
}