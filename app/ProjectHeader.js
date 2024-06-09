import React from "react";
import "./Project.css";
import {Card} from "./Card.js";
function Hero() {
  return (
    <header className="card_header">
      <h1 className="card_header_title">My Skills</h1>
      <div className="card-container">
      <Card header={"React"} backgroundColor="#F8D7DA"/>
      <Card header={"NextJs"} backgroundColor="#D1E7DD"/>
      <Card header={"Javascript"} backgroundColor="#FFF3CD"/>
      <Card header={"Redux"} backgroundColor="#FFF3CD"/>
      <Card header={"Typescript"} backgroundColor="#CCE5FF"/>
      <Card header={"Mongo Database"} backgroundColor="#D1E7DD"/>
      <Card header={"SQL"}  backgroundColor="#F8D7D9"/>
      </div>
    </header>
  );
}

export default Hero;