import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextBox from './TextBox';
import {useState} from 'react';
// @ts-ignore
import { AwesomeButton } from "react-awesome-button"
import "react-awesome-button/dist/styles.css";
import axios from 'axios';

//TODO: Fill in the ? with appropriate names/values for a horoscope.
//HINT: Look at the HoroscopeHandler's response in Main.java to choose a default useState value.


function Horoscope() {
  let map = new Map()

  const [sun, setSun] = useState("");
  const [moon, setMoon] = useState("");
  const [rising, setRisingSun] = useState("");

  const [horoscope, setHoroscope] = useState(map);

  const requestHoroscope = () => {
     const toSend = {
         //TODO: Pass in the values for the data. Follow the format the route expects!
         "sun" : sun,
         "moon" : moon,
         "rising" : rising
     };

     let config = {
         headers: {
             "Content-Type": "application/json",
             'Access-Control-Allow-Origin': '*',
         }
     }

     //Install and import axios!
     //TODO: Fill in 1) location for request 2) your data 3) configuration
     axios.post("http://localhost:4567/horoscope", horoscope, config)
     .then(response => {
         console.log(response.data);
         //TODO: Go to the Main.java in the server from the stencil, and find what field name you should put here.
         //Note: It is very important that you understand how this is set up and why it works!
         setHoroscope(response.data[1]);
     })
     .catch(error => {
         console.log(error);
     });
  }



  return (
    <div className="Horoscope">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TextBox label={"sun"} change={setSun}/>
        <TextBox label={"moon"} change={setMoon}/>
        <TextBox label={"rising"} change={setRisingSun}/>
        <AwesomeButton
              type="primary"
              ripple
              onPress={() => {
                requestHoroscope()
              }}
            >
              Submit
        </AwesomeButton>
    </div>
  );
}

export default Horoscope;