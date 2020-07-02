// const countriesRepositories = require('../repositories/countriesRepositories');
const countriesController = require('../controllers/countriesController');
const countriesRepositories = require('../repositories/countriesRepositories');
const countriesUtilities = require('../utilities/countriesUtilities');
// const customResponses = require('./customResponses');



exports.countryExists = (req, res, next) => {
    const availableCountries = countriesRepositories.getCountries(req.params.name);
    if(availableCountries.length !== 0) {
        req.availableCountries = availableCountries;
        next();
    } 
    else {
        const countryName = countriesUtilities.capitalizeName(req.params.name);
        res.status(400).json({ msg: `No country named ${countryName} in our database.` })
    }
}

exports.checkCountryConformity = (req, res, next) => {
    const {name, capital} = req.body;
    if (!name || !capital) {
        return res.status(400).json({ msg: `You must include a name & a capital` });
    }
    next();
}