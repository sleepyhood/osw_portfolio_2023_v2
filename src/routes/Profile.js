import React, { useEffect } from "react";
import programmers from "../imgs/programmers.png";
import osw from "../imgs/osw.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
// about 페이지
const Profile = () => {
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
    <div className="profile">
      <div className="container profile" style={{ backgroundColor: "#171717" }}>
        <div className="form profile">
          <div className="inForm">
            <div style={{ fontSize: "60px" }}>About</div>
            <div className="introduce">
              <img src={osw} data-aos="fade-right" alt="myProfile" />

              <div className="aboutMe" data-aos="fade-left">
                <div
                  style={{
                    fontWeight: 800,
                    paddingBottom: "40px",
                  }}

                  // data-aos-delay="100"
                  // data-aos-anchor=".example-selector"
                >
                  안녕하세요.
                  <br />
                  『신입 개발자』 오승원입니다.
                </div>
                현재 고려대학교 (세종캠퍼스) 재학 중이며, 데이터 분석 및 백엔드
                분야에 주력하고 있습니다. <br />
                {/* 주로 <span style={{ fontWeight: 900 }}>JS, C++, Python, R</span>
                을 활용하고 있습니다. */}
              </div>
            </div>
            <div className="introduce other" data-aos="fade-up">
              <div style={{ margin: "10px 20px" }}>
                <i className="fas fa-phone-alt"></i>
                <span style={{ margin: "20px 20px" }}>010-****-****</span>
              </div>
              <div style={{ margin: "10px 20px" }}>
                <i className="fas fa-envelope"></i>
                <span style={{ margin: "20px 20px" }}>****@korea.ac.kr</span>
              </div>
              <div
                style={{
                  display: "flex",
                  margin: "10px 10px",
                  alignItems: "center",
                }}
              >
                <a
                  href="https://github.com/sleepyhood"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github fa-2x"></i>
                  <span style={{ margin: "10px 10px" }}>GitHub </span>
                </a>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <a
                  href="https://programmers.co.kr/job_profiles/53112"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img src={programmers} alt="programmers" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
