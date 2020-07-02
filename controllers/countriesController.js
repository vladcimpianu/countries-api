const countriesRepositories = require('../repositories/countriesRepositories');
// const countriesUtilities = require('../utilities/countriesUtilities');

//get all countries
exports.getAllCountries = (req, res) => {res.success(countriesRepositories.getAllCountries())};

// Get one country
exports.getCountries = (req, res) => {
    const { availableCountries } = req;
    res.success(availableCountries);
};

// Create a country
exports.createCountry = (req,res) => {
    const { name, capital } = req.body;
    let newCountry = {
        name,
        capital
    };
    const countries = countriesRepositories.getAllCountries();
    const newCountriesList = [...countries, newCountry];
    res.success(newCountriesList);
};

// Update one country
exports.updateCountry = (req, res) => {
    const { availableCountries } = req;
    const countryUpdateEntries  = req.body;
    const updatedCountry = availableCountries[0];
    
    updatedCountry.name = countryUpdateEntries.name ? countryUpdateEntries.name : updatedCountry.name;
    updatedCountry.capital = countryUpdateEntries.capital ? countryUpdateEntries.capital : updatedCountry.capital;
    updatedCountry.currency = countryUpdateEntries.currency ? countryUpdateEntries.currency : updatedCountry.currency;

    console.log(availableCountries);
    res.success(availableCountries);
}

// Delete One Country
exports.deleteCountry = (req, res) => {
    const { countryToDelete, countriesLeft } = req;
    res.success({ msg: `${countryToDelete} was successfully deleted!`, countriesLeft })
};