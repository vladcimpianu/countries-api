// Initialize express router
const express = require('express');
const router = express.Router();
const countriesMiddleware = require('../middlewares/countriesMiddleware');
const countriesController = require('../controllers/countriesController');

// Get all countries
router.get('/api/countries', countriesController.getAllCountries);

// Get one country
router.get('/api/countries/:name', countriesMiddleware.countryExists, countriesController.getCountries)

router.get('/api/countries/:name/currency',

// Create a country
router.post('/api/countries', countriesMiddleware.checkCountryConformity, countriesController.createCountry)

// Update one country
router.put('/api/countries/:name', countriesMiddleware.countryExists, countriesController.updateCountry)

// Delete One Country
router.delete('/api/countries/:name', countriesMiddleware.countryToDelete, countriesController.deleteCountry);

// Export API routes
module.exports = router;