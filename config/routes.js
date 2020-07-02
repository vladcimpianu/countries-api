// Initialize express router
const express = require('express');
const router = express.Router();
const countries = require('../repositories/countriesRepositories');
const countriesMiddleware = require('../middlewares/countriesMiddlewares');
const countriesController = require('../controllers/countriesController');

// Get all countries
router.get('/api/countries', countriesController.getAllCountries);

// Get one country
router.get('/api/countries/:name', countriesMiddleware.countryExists, countriesController.getCountries)

// Create a country
router.post('/api/countries', countriesMiddleware.checkCountryConformity, countriesController.createCountry)

// Update one country
router.put('/api/countries/:name', countriesMiddleware.countryExists, countriesController.updateCountry)

// Export API routes
module.exports = router;