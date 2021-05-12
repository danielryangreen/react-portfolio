import React from "react";

const Contact = () => (
  <div>
    <h1>Contact</h1>
    <hr />
    <div className="row mb-3">
      <h3>Dan Green</h3>
    </div>
    <div className="row mb-3">
      <h5><a target="_blank" href="mailto:dan.ryan.green@gmail.com" className="link-primary">dan.ryan.green@gmail.com</a></h5>
    </div>
    <div className="row mb-3">
      <h5><a href="tel:+18015546334" className="link-primary">(801) 554-6334</a></h5>
    </div>
    <div className="row mb-3">
      <h5><a target="_blank" href="https://github.com/danielryangreen" className="link-primary">GitHub</a></h5>
    </div>
    <div className="row mb-3">
      <h5><a target="_blank" href="https://www.linkedin.com/in/dan-green-psp/" className="link-primary">LinkedIn</a></h5>
    </div>
    <div className="row mb-3">
      <h5><a target="_blank" href="https://drive.google.com/file/d/1nNcKxxKvKDUIk0fWWhy7KfNgImBj4n4h/view?usp=sharing" className="link-primary">Resume</a></h5>
    </div>
  </div>
);

export default Contact;
