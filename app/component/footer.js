"use client";
import React from "react";
import Slide from "react-reveal/Slide";
const Footer = () => {
  return (
    <div id="Footer">
      <Slide bottom>
        <div id="Footer__1">
          <h2>Traver</h2>
          <p>Travel with us and explore the world without limits.</p>
        </div>
      </Slide>
      <Slide bottom>
        <div id="Footer__2">
          <h2>About</h2>
          <a href="">About Us</a>
          <a href="">Features</a>
          <a href="">Nows & Blog</a>
        </div>
      </Slide>
      <Slide bottom>
        <div id="Footer__3">
          <h2>Company</h2>
          <a href="">FAQs</a>
          <a href="">History</a>
          <a href="">Testmonials</a>
        </div>
      </Slide>
      <Slide bottom>
        <div id="Footer__4">
          <h2>Contact</h2>
          <a href="">Cali Center</a>
          <a href="">Support Center</a>
          <a href="">Conact Us</a>
        </div>
      </Slide>
      <Slide bottom>
        <div id="Footer__5">
          <h2>Support</h2>
          <a href="">Privacy Policy</a>
          <a href="">Terms & Services</a>
          <a href="">Payment</a>
        </div>
      </Slide>
    </div>
  );
};

export default Footer;
