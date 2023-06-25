import React, { useRef } from "react";
import homeImg from "../imgs/home2.jpg";

const Home = () => {
  const section1Ref = useRef(null);
  const innerHeight = window.innerHeight;
  const scrollTo = (ref) => {
    window.scroll({
      top: innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${homeImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
        overflow: "hidden", // 화면 내용이 넘치는 것을 방지하기 위해 overflow 속성을 추가합니다.
      }}
    >
      {/* <img src={homeImg} className="homeImgClass" /> */}
      <div className="container homeTitle">
        <span>Hello</span>
        <br></br>
        <span>I'm BackEnd&Data Developer.</span>
      </div>

      <div className="scrolldown-wrapper" onClick={() => scrollTo(section1Ref)}>
        <div className="scrolldown">
          <svg height="30" width="10">
            <circle className="scrolldown-p1" cx="5" cy="15" r="2" />
            <circle className="scrolldown-p2" cx="5" cy="15" r="2" />
          </svg>
        </div>
      </div>
      <div className="otherLinks">
        <a
          href="https://github.com/sleepyhood"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github fa-3x"></i>
        </a>
      </div>

      {/* <div ref={section1Ref}>
        <Profile />
      </div> */}
    </div>
  );
};

export default Home;
