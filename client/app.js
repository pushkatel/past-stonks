import React from 'react'
//import logo from './icon.png'
import InputForm from './components/InputForm'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://styles.redditmedia.com/t5_2th52/styles/communityIcon_b37n2zfs8k861.png?width=256&s=a9cb63319055ded916e5b12ff03f1e8c63ae6911"
          className="App-logo"
          alt="logo"
        />
        <h3>So you wish you had bought some STONKS?</h3>
        <div className="form">
          <InputForm />
        </div>
      </header>
    </div>
  )
}

export default App
