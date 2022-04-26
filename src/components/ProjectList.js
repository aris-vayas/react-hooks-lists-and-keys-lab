import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  let newProj= projects.map((item)=>{
    return <span key ={item.id} >{ProjectItem(item)}</span>
      
  });
  return (
    <div  id="projects">
      <h2>My Projects</h2>
      <div  id="project-list">
          {newProj}
      </div>
    </div>
  );
}

export default ProjectList;
