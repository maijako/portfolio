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
          <h3 className="vertical-timeline-element-title">Front-end Web Development Certificate</h3>
          <p>EdX, Bootcamp | Online</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element--education"
        date="2019 - 2020"
        iconStyle={{background: "rgb(32, 32, 84)"}}
        >
          <h3 className="vertical-timeline-element-title">PgCert, Digital Education</h3>
          <p>The University of Edinburgh | UK</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element--education"
        date="2014 - 2016"
        iconStyle={{background: "rgb(32, 32, 84)"}}
        >
          <h3 className="vertical-timeline-element-title">MA, Applied Linguistics & English Language Teaching</h3>
          <p>King's College London | UK</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element--education"
        date="2011"
        iconStyle={{background: "rgb(32, 32, 84)"}}
        >
          <h3 className="vertical-timeline-element-title">CELTA Certificate in English Language Teaching to Adults</h3>
          <p>Cambridge ESOL | UK</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element--education"
        date="2002 - 2006"
        iconStyle={{background: "rgb(32, 32, 84)"}}
        >
          <h3 className="vertical-timeline-element-title">BA, Liberal Arts</h3>
          <p>LCC International University | Lithuania</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element--education"
        date="2022 - Present"
        iconStyle={{background: "rgb(234, 204, 114)"}}
        >
          <h3 className="vertical-timeline-element-title">Digital Product Manager </h3>
          <p>Pearson | UK </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element--education"
        date="2020"
        iconStyle={{background: "rgb(234, 204, 114)"}}
        >
          <h3 className="vertical-timeline-element-title">Senior Learning Designer</h3>
          <p>Aula Education | UK </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element--education"
        date="2015 - 2022"
        iconStyle={{background: "rgb(234, 204, 114)"}}
        >
          <h3 className="vertical-timeline-element-title">Senior Assessment Manager</h3>
          <p>Cambridge University Press & Assessment | UK </p>
        </VerticalTimelineElement>




      </VerticalTimeline>
    </div>
  )
}

export default Experience