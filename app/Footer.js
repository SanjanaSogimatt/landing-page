import React from "react";
import "./Project.css";

function Footer() {
  return (
    <div className="footer">
    <div className="container">
      <h1 className="title">Info</h1>
      <div className="section">
        <div className="leftColumn">
          <p className="sectionTitle">↳ Overview</p>
        </div>
        <div className="rightColumn">
          <p>Hi I’m Sanjana, an experienced Digital Designer crafting beautiful interactive experiences. I have worked for a variety of London-based agencies who specialise in digital marketing, advertising and ecommerce, which has given me a holistic knowledge of what brands need to succeed in the digital world.</p>
        </div>
      </div>
      <div className="section">
        <div className="leftColumn">
          <p className="sectionTitle">↳ Services</p>
        </div>
        <div className="rightColumn">
          <p>UX/UI Design</p>
          <p>Product Design</p>
          <p>Graphic Design</p>
          <p>E-Commerce Web Design</p>
          <p>Art Direction</p>
          <p>Brand Identity</p>
        </div>
      </div>
      <div className="section">
        <div className="leftColumn">
          <p className="sectionTitle">↳ Recognition</p>
        </div>
        <div className="rightColumn">
          <p>CSSDA</p>
          <p>Best UX, Best UI, Best Innovation</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;