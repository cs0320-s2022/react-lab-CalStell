import React from 'react';
import logo from './logo.svg';
import './App.css';

function TextBox(props: any) {
  return (
  <div className="Horoscope">

    <h1>Enter {props.name} sign</h1>
    <input type="text"/>
 </div>
 );
}

export default TextBox;

