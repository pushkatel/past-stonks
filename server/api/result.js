const {Result} = require('../db/models/index')
const axios = require('axios')
const router = require('express').Router()

// matches GET requests to /api/route1/
router.post('/', async (req, res, next) => {
  let past = null
  let cur = null
  const {ticker, pastDate, pastAmount} = req.body
  const tiingoHeader = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${process.env.TIINGO}`,
    },
  }
  try {
    const url = `https://api.tiingo.com/tiingo/daily/${ticker}/prices?startDate=${pastDate}&endDate=${pastDate}`
    past = await axios.get(url, tiingoHeader)
  } catch (error) {
    console.log('Failed at past api call', error)
    res.send(error)
  }
  //pull current data
  try {
    const url = `https://api.tiingo.com/tiingo/daily/${ticker}/prices`
    cur = await axios.get(url, tiingoHeader)
  } catch (error) {
    console.log('Failed at current api call', error)
  }
  //Do math
  const pastPrice = past.data[0].adjClose //price at searched date
  const todayPrice = cur.data[0].adjClose //today price
  const pastSharesBought = Math.round((pastAmount / pastPrice) * 1000) / 1000 //shares bought past
  const todayValue = Math.round(pastSharesBought * todayPrice)
  //save to db
  try {
    const userReq = {
      ticker,
      pastAmount,
      pastDate,
      pastPrice,
      pastSharesBought,
      todayValue,
      todayPrice,
    }
    const newResult = await Result.create(userReq)
    console.log('Post Success')
    res.send(newResult)
  } catch (error) {
    next(error)
  }
})

// matches POST requests to /api/route1/
router.post('/', async (req, res, next) => {
  try {
    const newResult = await Result.create(req.body)
    console.log('Post Success')
    res.send(newResult)
  } catch (error) {
    next(error)
  }
})

module.exports = router
