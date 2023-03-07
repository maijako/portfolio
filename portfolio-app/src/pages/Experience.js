import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../styles/Experience.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="rgb(32, 32, 84)">
        <VerticalTimelineElement className="vertical-timeline-element--education"
        date="2023"
        iconStyle={{background: "rgb(32, 32, 84)"}}
        >
          <h3 className="vertical-timeline-element-title">EdX, BootCamp</h3>
          <p>Front-end Web Development Certificate</p>

        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience