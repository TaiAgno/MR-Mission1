# Mission 1

## Description

This project was developed to create an interface to provide a car value from two inputs, car model and car year.
For that, it was used Express to emulate a server, JSON for parsing, Jest for testing and Postman for interface.
TDD principles were applied, using the logic of red, green, refactor.

SELF-DISCLAIMER

I have very limited experience with JavaScript, and using Node, JSON and Express is almost completely new to me, so I understand this code is quite infantile. As I see it, a good analogy is a stickman drawing from a kindergarden child, comparing to hyper-realistic drawings from colleagues and group mates.

## Getting Started

### Dependencies

* JSON
* Node
* Nodemon
* Jest
* Express

### Installing

* npm install jest ts-jest ts-node @types/jest @jest/globals express
* npm install nodemon --save-dev

### Executing program

* Enter npm start on terminal
* Enter npm run dev (if using nodemon)
* On Postman, create a new POST request
* Navigate to http://localhost:8001/car-value (assuming server is listening on port 8001)
* Go to body tab, select raw radio button, and change input format to JSON
* Add to the body { "carModel": "Civic", "carYear": 2000 }
* Click send, it should respond with { "value": 6600 }

### Testing

* npm test will run the test suite

## Review

Any and all comments are appreciated.

I am certain that there is a much better way to do this, however at this stage having a working code suffices for me.

## Author

Tai Agnoletto

Group 1, Dev Team, Mission Ready (October 2023 intake)