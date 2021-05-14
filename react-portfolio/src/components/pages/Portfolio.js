import React, { Component } from "react";
import Project from "../Project";
import projects from "../../projects.json";

class Portfolio extends Component {
  state = {
    projects
  };

  render() {
    return (
      <div>
        <h1>Portfolio</h1>
        <hr />
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {this.state.projects.map(project => (
            <Project
              id={project.id}
              image={project.image}
              title={project.title}
              text={project.text}
              link={project.link}
              repo={project.repo}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Portfolio;
