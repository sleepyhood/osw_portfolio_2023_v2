import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import Home from "../routes/Home";
import Profile from "../routes/Profile";
import Portfolio from "../routes/Portfolio";
import Contact from "../routes/Contact";
import Experiences from "../routes/Experiences";
import Skills from "../routes/Skills";

const Navigation = () => {
  const [scrollDirection, setScrollDirection] = useState("");
  const [lastScrollTop, setLastScrollTop] = useState(0);
  // the offset of the document.body
  const [bodyOffset, setBodyOffset] = useState(
    document.body.getBoundingClientRect()
  );

  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isSmall, setIsSmall] = useState(false);

  const scrollListener = (e) => {
    setBodyOffset(document.body.getBoundingClientRect());

    setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
    setLastScrollTop(-bodyOffset.top);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  });
  useEffect(() => {
    // 모바일 화면 대응!
    let mediaQuery = window.matchMedia("(max-width: 830px)");
    mediaQuery.addListener(handleMedia);
    handleMedia(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMedia);
    };
  }, []);
  // []는 첫번쨰 렌더링만 호출
  const handleMedia = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmall(true);
    } else {
      setIsSmall(false);
    }
  };

  const onHandleTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  const onToggleNav = (event) => {
    event.stopPropagation();
    event.preventDefault();
    // 이걸 해줘야 토글 클릭시 창 초기화가 안됨. 삽질;;;;
    setIsNavVisible(!isNavVisible);
  };

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

  const scrollTo = (ref) => {
    window.scroll({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {scrollDirection === "down" || window.scrollY < 40 ? (
        <div>
          <nav className="navBar active">
            <div className="myLogo" onClick={onHandleTop}>
              <i class="fab fa-react fa-spin"></i>
              <span>OSW</span>
            </div>
            {(isNavVisible || !isSmall) && (
              <ul className="navMenu PC">
                {/* <li>
                  <Link to="/">
                    <div onClick={() => scrollTo(section1Ref)}>Home</div>
                  </Link>
                </li> */}
                <li>
                  <Link to="/about">
                    <div onClick={() => scrollTo(section1Ref)}>About</div>
                  </Link>
                </li>
                {/* exp, skills update */}
                <li>
                  <Link to="/skills">
                    <div onClick={() => scrollTo(section2Ref)}>Skills</div>
                  </Link>
                </li>
                <li>
                  <Link to="/experiences">
                    <div onClick={() => scrollTo(section3Ref)}>Experiences</div>
                  </Link>
                </li>

                <li>
                  <Link to="/portfolio">
                    <div onClick={() => scrollTo(section4Ref)}>Portfolio</div>
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <div onClick={() => scrollTo(section5Ref)}>Contact</div>
                  </Link>
                </li>
              </ul>
            )}
            <a href="/" className="toggleBtn" onClick={onToggleNav}>
              <i class="fas fa-bars"></i>
            </a>
          </nav>
        </div>
      ) : (
        <nav className="navBar hidden"></nav>
      )}
      <div style={{ height: "100vh", margin: 0 }}>
        <Home />
      </div>
      <div ref={section1Ref} style={{ height: "100vh", margin: 0 }}>
        <Profile />
      </div>

      <div ref={section2Ref} style={{ height: "100vh", margin: 0 }}>
        <Skills />
      </div>

      <div ref={section3Ref} style={{ height: "100vh", margin: 0 }}>
        <Experiences />
      </div>

      <div ref={section4Ref} style={{ height: "100vh", margin: 0 }}>
        <Portfolio />
      </div>
      <div ref={section5Ref} style={{ height: "100vh", margin: 0 }}>
        <Contact />
      </div>

      <footer style={{ height: "100px" }}>
        &copy; {new Date().getFullYear()} OSW <br /> This website is made
        react.js. ( * This site is optimized web.)
      </footer>
    </div>
  );
};

export default Navigation;
