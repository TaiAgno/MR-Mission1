const express = require('express');
const bodyParser = require('body-parser');

const server = express();
const PORT = process.env.PORT || 8001;

server.use(bodyParser.json());

server.post('/car-value', (req, res) => {
  const { carModel, carYear } = req.body;

  try {
    const value = carValue(carModel, carYear);
    res.json({ value });
  } catch (error) {
    res.status(400).json({ error: error.message }); 
  }
});

function carValue(carModel, carYear) {
  const currentYear = new Date().getFullYear();
  const minimumYear = 1885;

  if (!carModel || !carYear) {
    throw new Error('Fields cannot be empty');
  }

  if (typeof carModel !== 'string' && typeof carModel !== 'number') {
    throw new Error('Model must be a string or a number');
  }

  if (typeof carYear !== 'number') {
    throw new Error('Car year must be provided in numbers, e.g. 1990');
  }

  if (carYear < minimumYear || carYear > currentYear) {
    throw new Error(`Car year must be a number smaller than ${currentYear} and bigger than ${minimumYear}`);
  }

  let carModelValue = 0;

  if (typeof carModel === 'string') {
    // Remove non-alphabetic characters from carModel
    const cleanedCarModel = carModel.replace(/[^a-z]/gi, '');

    for (let char of cleanedCarModel.toLowerCase()) {
      carModelValue += char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    }
    carModelValue *= 100;
  }

  return carModelValue + carYear;
}
  
  module.exports = carValue;

  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});