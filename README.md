# Stonks! - A Historical Stock Price App

## Visit

https://past-stonks.herokuapp.com

## Features to Try!

Use this app to calculate present value of investments made (or should have made) in the past

* Enter a valid stock ticker, amount, and past date
* Date must be in the past as it is used to determine how many shares would have been bought
* Click submit and enjoy (or cry) your missed opportunity!
* You never know! You may have made the right choice by not investing!!

## Technologies

* Front-End
  * React.js, HTML5, CSS3
* Back-End
  * Node.js, Express.js, PostgreSQL, Sequelize
* External API/Libraries
  * Tiingo: Providing 30+ years of historical stock price data
* Deployment
  * Heroku: Live website with public URL
  * Mocha/Chai: Unit testing of 90% of modules for faster developement
  * Travis: Continuous Integration and Continuous Deployment

## Future Roadmap

* Fun insult and nice message generator based on the result
* More responsive for mobile phones (possible PWA)
* Front End data validation for the three inputs:
  * Ticker: autofill or dropdown to select only valid options
  * Amount: Data formatting with commas
  * Date: Only allow weekday seelctions (no weekends since Tiingo has no data)
* Integrate bitcoin and other crytptocurrency prices 
* Data Visualization of stock price since the date entered
* Social Media integration to share results
* Greater Accessibility for visually impaired customers (A11Y)
* Ability to add SMS/Email reminders to invest (very low priority)
* Any ideas you may have! Please reach out!



## Developer

[Kush Patel](https://www.linkedin.com/in/kushpatel21/)

## Installation

* To install all dependencies: `npm run install`
* To create database and seed: `createdb past-stonks && createdb past-stonks-test`
* To Run App!: `npm run start-dev`

#### Store your Tiingo API key infromation in a new file secrets.js\* or global environmenal variables

