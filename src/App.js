import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {

  // Form states

  const [email, setEmail] = useState("")
  const [rememberDevice, setRememberDevice] = useState()

  // Form Submission

  const handleForm = e => {
    // e.preventDefault()
    console.log(email)
    console.log(rememberDevice)
  }

  return (
    <div className="App">

      <div className="App__loginBox">
        <div className="App__loginBox__logo">
          <img src={logo} alt="" />
        </div>

        <div className="App__loginBox__title">
          <h1>Example login screen</h1>
          <p>Getting started with Green.</p>
        </div>

        <form action="" className="App__loginBox__form" onSubmit={handleForm}>
          <label className="App__loginBox__form__lableEmail">Email Address</label>
          <input type="email" className="App__loginBox__form__inputEmail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <div className="App__loginBox__form__check">
            <input type="checkbox" id="check" className="App__loginBox__form__inputCheck"
              value={rememberDevice}
              onChange={e => setRememberDevice(e.target.checked)}
            />
            <label htmlFor="check" className="App__loginBox__form__labelCheck">Remember this device</label>
          </div>

          <button className="App__loginBox__form__btn">Sign In</button>
        </form>

      </div>

    </div>
  );
}

export default App;
