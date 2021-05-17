import React from "react";

function Project(props) {
  return (
    <div className="col">
      <article className="card h-100">
        <img src={require("../images/" + props.image).default} className="card-img-top" alt="screenshot" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
        </div>
        <div className="card-footer">
          <a target="_blank" href={props.link} className="btn btn-primary">Deployed App</a>
          <a target="_blank" href={props.repo} className="btn btn-primary">GitHub Repo</a>
        </div>
      </article>
    </div>
  );
}

export default Project;
