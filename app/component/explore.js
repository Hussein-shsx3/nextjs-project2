"use client";
import React from "react";
import Slide from "react-reveal/Slide";

const Explore = () => {
  return (
    <div id="Explore">
      <div id="Explore__img">
        <Slide bottom>
          <div id="Explore__1">
            <h1>Explore The</h1>
            <h1>Best Paradises</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
              nisi facere placeat alias rem? Enim, itaque aperiam. Labore, quos
              accusantium. Delectus enim animi, nobis deleniti deserunt vel
              quoaccusantium. Delectus enim animi, odit itaque!
            </p>
          </div>
          <div id="user">
            <img src="./img/explore-perfil.png" alt="" />
            <h5>Paul Jeams</h5>
          </div>
        </Slide>
      </div>
      <div id="Email">
        <Slide left>
          <div id="Email__img">
            <img src="./img/join-island.jpg" alt="" />
          </div>
        </Slide>
        <Slide right>
          <div id="Email__1">
            <h1>Your Journey</h1>
            <h1>Starts Here</h1>
            <p>Get up to data with laster travel and information from us.</p>
            <input type="email" placeholder="Enter your Email" />
            <button className="cssbuttons-io-button">
              Subscribe Our Newsletter
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Explore;
