import React from "react";
import { personalProjectList } from "./static-files/portfolioList";

const PersonalProjects = () => {

    return(
        <div style={{marginTop: "20px"}}>
            <p className="portfolio-title-element">personal project</p>
            <div className="personal-project-element">
                {(personalProjectList instanceof Array && personalProjectList.length > 0) &&
                    personalProjectList.map((project) => {
                return  <div key={project.id} className="personal-project-element-item" style={{paddingTop: "20px",paddingBottom: "70px"}}>
                            <h5 className="text-uppercase">{project.applicationType}</h5>
                            <h6 className="text-lowercase" style={{color: "greenyellow"}}>{project.projectName}</h6>
                            <span style={{fontSize: "small",display: "block"}}>{project.projectDescription}</span>
                            <ul className="mt-3" style={{textAlign: "start",color: "#e400e5"}}>
                                {
                                    project.keyFeatureslist?.map((feature,index) => {
                                        return(
                                            <li className="mt-2" key={index}>{feature}</li>
                                        );
                                    })
                                }
                            </ul>
                            <a href={project.githubRepoLink} target="_blank">{project.githubRepoLink}</a>
                            <span className="mt-2" style={{fontSize: "small",display: "block",textTransform: "capitalize"}}>{project.technologyUsed}</span>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default PersonalProjects;