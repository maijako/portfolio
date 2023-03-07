import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";



function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="rgb(32, 32, 84)">
        <VerticalTimelineElement className="vertical-timeline-element--education"
        date="2023"
        iconStyle={{ background: "rgb(32, 32, 84)", colo: "#fff"}}
        
        
        >

        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience