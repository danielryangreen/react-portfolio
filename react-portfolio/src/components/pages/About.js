import React from "react";
import headshot from "../../images/5400r7x7.jpg";

const About = () => (
  <div>
    <h1>About</h1>
    <hr />
    <img src={headshot} className="img-fluid rounded-circle float-start w-25 mb-3 me-3" alt="Professional head shot" />
    <p>I am employed by HDR as a senior civil engineer with 25 years of experience. I specialize in planning and scheduling for major transportation projects using the Critical Path Method (CPM) and Oracle Primavera P6 software. I am certified as a Planning and Scheduling Professional (PSP) by AACE International.</p>
    <p>I help our clients by reviewing the project schedule submittals that they receive from their construction contractors. Sometimes I also develop engineering schedules to support our design work and construction schedules to support our cost estimating work.</p>
    <p>I was raised in a small town in central Illinois. I spent the first 16 years of my career working for major construction contractors, including Traylor Bros. and Kiewit, and moving from project to project every couple of years. I have lived and worked in Illinois, Missouri, South Carolina, Florida, Indiana, Kentucky, Arizona, and now Utah.</p>
    <p>I moved to Salt Lake City in 2008 to be the Schedule Manager for the Utah Transit Authority's West Valley and Airport TRAX projects. I met my wife and decided to stay here. After the UTA projects were finished, I worked in project controls for Williams Northwest Pipeline for about 5 years and then joined HDR in 2017.</p>
    <p>In March 2020, I started teaching myself Excel VBA and building an application to analyze data from Primavera P6. I discovered that I really enjoy coding and wanted to learn more. I am currently a part-time student at the University of Utah Professional Education Coding Boot Camp. I expect to graduate in May 2021 with a certificate in full stack web development.</p>
    <p>When I am not scheduling or coding, I enjoy rock climbing, skiing, and backpacking with my wife. Utah is a great place to live with a lifetime of outdoor adventures.</p>

  </div>
);

export default About;
