import React from "react";
import { workExperienceList } from "./static-files/portfolioList";

const WorkExperience = () => {

    return(
        <div className="portfolio-section-three" style={{marginTop: "20px"}}>
            <p className="portfolio-title-element">work experience</p>
            <div className="portfolio-work-experience-element">
                {
                    (workExperienceList instanceof Array && workExperienceList.length > 0) &&
                    workExperienceList.map((work) => {
                        return(
                            <div key={work.id} className="portfolio-work-experience-element-item">
                                <h2 className="text-uppercase p-0 m-0">{work.companyName}</h2>
                                <span className="text-capitalize">{work.location}</span>
                                <h3 className="text-capitalize m-0 mt-2">{work.position}</h3>
                                <span className="text-capitalize">{work.workDuration}</span>
                                <ul className="mt-3">
                                {
                                    work.descriptionList.map((desc,index) => {
                                        return(
                                            <li key={index}>{desc}</li>
                                        );
                                    })
                                }
                                </ul>
                                <span style={{fontSize: "small"}}>Contact: {work.contact}</span>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default WorkExperience;