import React, {Component} from 'react'
import axios from 'axios'

class InputForm extends Component {
  constructor() {
    super()
    this.state = {
      ticker: '',
      pastAmount: '',
      pastDate: '',
      todayValue: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit(event) {
    event.preventDefault()
    try {
      const {data} = await axios.post('/api/result/', this.state)
      this.setState({...this.state, todayValue: data.todayValue})
    } catch (error) {
      alert('Enter Valid Ticker')
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const {ticker, pastDate, pastAmount} = this.state
    const {handleSubmit, handleChange} = this
    return (
      <form id="form">
        <div className="body">
          <div className="container">
            <label htmlFor="ticker" className="item">
              Stonk:
              <input
                name="ticker"
                onChange={handleChange}
                value={ticker}
                className="item"
              />
            </label>
            <label htmlFor="pastAmount" className="item">
              Amount:
              <input
                name="pastAmount"
                onChange={handleChange}
                value={pastAmount}
                className="item"
              />
            </label>
            <label htmlFor="pastDate" className="item">
              Date:
              <input
                name="pastDate"
                type="date"
                onChange={handleChange}
                value={pastDate}
                className="item"
              />
            </label>
          </div>
          <div className="submit">
            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
        <div className="result">
          {this.state.todayValue ? (
            <h2 className="response">
              If you had listened to your gut, you would now have{' '}
              <b>${this.state.todayValue}</b>
            </h2>
          ) : (
            <div>
              <h6>Remember... stonks can only go to the moon!</h6>
            </div>
          )}
        </div>
      </form>
    )
  }
}

export default InputForm
