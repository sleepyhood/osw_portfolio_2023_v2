import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import react from "../imgs/icons/react.svg";
import youtube from "../imgs/icons/youtube.svg";
import campus from "../imgs/icons/campus.svg";
import student_reading from "../imgs/icons/student-reading.svg";
import lecture from "../imgs/icons/lecture.svg";

const Experiences = () => {
  return (
    <div className="experiences">
      <div
        className="container experiences"
        style={{ backgroundColor: "#171717" }}
      >
        <div className="form experiences">
          <div style={{ fontSize: "60px" }}>Experiences</div>
          <div className="introduce experiences">
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgba(0, 0, 0, 0.2)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid rgba(18, 18, 18, 1)",
                }}
                date="2023-현재"
                iconStyle={{
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  color: "#fff",
                  backgroundImage: `url(${student_reading})`,
                }}
              >
                <h3 className="vertical-timeline-element-title">졸업 예정</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  현재 4학년
                </h4>
                <p>캡스톤 디자인 및 졸업 요건 수행 중</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgba(0, 0, 0, 0.2)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid rgba(18, 18, 18, 1)",
                }}
                date="2021 - 2022"
                iconStyle={{
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  color: "#fff",
                  backgroundImage: `url(${lecture})`,
                }}
              >
                <h3 className="vertical-timeline-element-title">
                  씨큐브코딩화성동탄
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  프로그래밍 학원 강사
                </h4>
                <p>프로그래밍 강의 업무 및 교재 연구</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2019"
                contentStyle={{
                  background: "rgba(0, 0, 0, 0.2)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid rgba(18, 18, 18, 1)",
                }}
                iconStyle={{
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  color: "#fff",
                  backgroundImage: `url(${youtube})`,
                }}
              >
                <h3 className="vertical-timeline-element-title">
                  유튜브 콘텐츠 플랫폼
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  동아리 활동 (중단됨)
                </h4>
                <p>유튜버 양성과 커뮤니케이션의 활성화를 위한 SNS기반 플랫폼</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2017"
                contentStyle={{
                  background: "rgba(0, 0, 0, 0.2)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid rgba(18, 18, 18, 1)",
                }}
                iconStyle={{
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  color: "#fff",
                  backgroundImage: `url(${campus})`,
                }}
              >
                <h3 className="vertical-timeline-element-title">
                  고려대학교 입학
                </h3>
                {/* <h4 className="vertical-timeline-element-subtitle"></h4> */}
                <p></p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
