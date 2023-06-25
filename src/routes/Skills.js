import React, { useEffect } from "react";
import c from "../imgs/icons/c.svg";
import cplusplus from "../imgs/icons/cplusplus.svg";
import css from "../imgs/icons/css3.svg";
import html from "../imgs/icons/html-5.svg";
import js from "../imgs/icons/javascript.svg";
import nodeJs from "../imgs/icons/node-js.svg";
import php from "../imgs/icons/php.svg";
import python from "../imgs/icons/python.svg";
import react from "../imgs/icons/react.svg";
import mysql from "../imgs/icons/mysql.svg";
import firebase from "../imgs/icons/firebase.svg";
import r from "../imgs/icons/r.svg";
import mongodb from "../imgs/icons/mongodb.svg";
import spring from "../imgs/icons/spring.svg";
import java from "../imgs/icons/java.svg";

import AOS from "aos";
import "aos/dist/aos.css";
import { useMediaQuery } from "react-responsive";

const Skills = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:830px)",
  });

  const iconWH = isMobile ? "50px" : "70px";
  const iconStyle = {
    borderRadius: "0",
    width: iconWH,
    height: iconWH,
    backgroundColor: "transparent",
    boxShadow: "none",
    padding: "5px 5px",
  };

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
      // mirror: "true",
      placement: "top-center",
    });
  });

  return (
    <div className="skills">
      <div className="container skills" style={{ backgroundColor: "#f8f8f8" }}>
        <div
          className="form skills"
          style={{
            color: "#171717",
            fontSize: "60px",
            height: "100vh",
          }}
        >
          <div className="inForm">
            <div style={{ fontSize: "60px" }}>Skills</div>
            <div className="introduce skills">
              <ul className="skillSection">
                <li data-aos="fade-left">
                  <span>Data Analysis</span>
                  <div className="icons">
                    <img src={python} style={iconStyle} alt="python" />
                    <img src={r} style={iconStyle} alt="r" />
                  </div>
                </li>
                <li data-aos="fade-right">
                  <span>Back End</span>
                  <div className="icons">
                    <img src={nodeJs} style={iconStyle} alt="nodeJs" />
                    <img src={spring} style={iconStyle} alt="spring" />
                  </div>
                </li>
                <li data-aos="fade-left">
                  <span>Computer Language</span>
                  <div className="icons">
                    <img src={c} style={iconStyle} alt="c" />
                    <img src={cplusplus} style={iconStyle} alt="c++" />
                    <img src={python} style={iconStyle} alt="python" />
                    <img src={java} style={iconStyle} alt="java" />
                  </div>
                </li>
                <li data-aos="fade-right">
                  <span>Web&DB</span>
                  <div className="icons">
                    <img src={mysql} style={iconStyle} alt="mysql" />
                    <img src={react} style={iconStyle} alt="react" />
                    <img src={firebase} style={iconStyle} alt="firebase" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
