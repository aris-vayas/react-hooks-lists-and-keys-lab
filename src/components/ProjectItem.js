import React from "react";

function ProjectItem({ name, about, technologies}) {
  const techList = technologies.map(tech=>{
    
    return <span key= {tech}>{tech}</span>
  })
  return (
    <div className="project-item">
      <h3 key ={name}>{name}</h3>
      <p key = {about}>{about}</p>
      <div className="technologies">
        {techList}
      </div>
    </div>
  );
}

export default ProjectItem;
