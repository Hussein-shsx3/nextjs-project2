"use client";
import React, { useEffect, useState } from "react";
const Header = () => {
  function m() {
    const nav = document.getElementById("res");
    nav.classList.add("act");
    document.getElementById("bar").style.display = "none";
  }
  function c() {
    const nav = document.getElementById("res");
    nav.classList.remove("act");
    document.getElementById("bar").style.display = "flex";
  }
  const [displayM, setDisplayM] = useState("none");
  useEffect(() => {
    function S() {
      if (window.scrollY > 1) {
        setDisplayM("rgba(0, 0, 0, 0.562)");
      } else {
        setDisplayM("transparent");
      }
    }
    window.addEventListener("scroll", S);
  }, [1]);
  return (
    <header style={{backgroundColor:`${displayM}`}}>
      <h1>Travel</h1>
      <div id="res">
        <ul>
          <li>
            <a href="#Home" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Popular">Popular</a>
          </li>
          <li>
            <a href="#Explore">Explore</a>
          </li>
        </ul>
        <i className="fa-solid fa-xmark" onClick={c}></i>
      </div>
      <i id="bar" className="fas fa-outdent" onClick={m}></i>
    </header>
  );
};

export default Header;
