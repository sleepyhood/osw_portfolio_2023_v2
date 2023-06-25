import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  const [isHover1, setIsHover1] = useState(false);
  const [isHover2, setIsHover2] = useState(false);
  const [isHover3, setIsHover3] = useState(false);
  const [isHover4, setIsHover4] = useState(false);
  const [isHover5, setIsHover5] = useState(false);
  const [isHover6, setIsHover6] = useState(false);

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
      placement: "top-center",
    });
  });

  return (
    <div className="portfolio">
      <div
        className="container portfolio"
        style={{ backgroundColor: "#f8f8f8" }}
      >
        <div className="form portfolio">
          <div style={{ fontSize: "60px", color: "#171717" }}>
            Portfolio (currently updating)
          </div>
          <div className="introduce portfolio">
            <ul style={{ color: "#171717" }}>
              <li
                id="first"
                onMouseEnter={() => setIsHover1(true)}
                onMouseLeave={() => setIsHover1(false)}
                data-aos="fade-down-right"
              >
                {isHover1 && (
                  <div className="bg first">
                    <a href="/">
                      <i
                        className="fab fa-github fa-3x"
                        style={{ opacity: "0.2" }}
                      ></i>
                    </a>
                    <a href="/">
                      <i
                        className="fas fa-play-circle fa-3x"
                        style={{ opacity: "0.2" }}
                      ></i>
                    </a>
                  </div>
                )}
                <span>피파 랭킹 애니메이션</span>
              </li>
              <li
                id="second"
                onMouseEnter={() => setIsHover2(true)}
                onMouseLeave={() => setIsHover2(false)}
                data-aos="fade-down"
              >
                {isHover2 && (
                  <div className="bg second">
                    <a
                      href="https://github.com/sleepyhood/VaniliaJS2021_Momentum"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github fa-3x"></i>
                    </a>
                    <a
                      href="https://sleepyhood.github.io/VaniliaJS2021_Momentum/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-play-circle fa-3x"></i>
                    </a>
                  </div>
                )}
                <span>모멘텀</span>
              </li>
              <li
                id="third"
                onMouseEnter={() => setIsHover3(true)}
                onMouseLeave={() => setIsHover3(false)}
                data-aos="fade-down-left"
              >
                {isHover3 && (
                  <div className="bg third">
                    <a
                      href="https://github.com/sleepyhood/nwitter"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github fa-3x"></i>
                    </a>
                    <a
                      href="https://sleepyhood.github.io/nwitter/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-play-circle fa-3x"></i>
                    </a>
                  </div>
                )}
                <span>Squid Game</span>
              </li>
              <li
                id="forth"
                onMouseEnter={() => setIsHover4(true)}
                onMouseLeave={() => setIsHover4(false)}
                data-aos="fade-up-right"
              >
                {isHover4 && (
                  <div className="bg forth">
                    <a
                      href="https://github.com/sleepyhood/movie_app_2021"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github fa-3x"></i>
                    </a>
                    <a
                      href="https://sleepyhood.github.io/movie_app_2021/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-play-circle fa-3x"></i>
                    </a>
                  </div>
                )}
                <span>Movie App</span>
              </li>
              <li
                id="fifth"
                onMouseEnter={() => setIsHover5(true)}
                onMouseLeave={() => setIsHover5(false)}
                data-aos="fade-up"
              >
                {isHover5 && (
                  <div className="bg fifth">
                    <a
                      // href="https://github.com/sleepyhood/movie_app_2021"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ opacity: "0.2" }}
                    >
                      <i className="fab fa-github fa-3x"></i>
                    </a>
                    <a href="/">
                      <i
                        className="fas fa-play-circle fa-3x"
                        style={{ opacity: "0.2" }}
                      ></i>
                    </a>
                  </div>
                )}
                <span>질병 예측 모델</span>
              </li>
              <li
                id="sixth"
                onMouseEnter={() => setIsHover6(true)}
                onMouseLeave={() => setIsHover6(false)}
                data-aos="fade-up-left"
              >
                {isHover6 && (
                  <div className="bg sizth">
                    <a
                      href="https://github.com/sleepyhood/fokin-weather"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github fa-3x"></i>
                    </a>
                    <a style={{ opacity: "0.2" }} href="/">
                      <i className="fas fa-play-circle fa-3x"></i>
                    </a>
                  </div>
                )}
                <span>날씨API 앱</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
