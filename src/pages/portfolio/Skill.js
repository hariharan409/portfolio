import React from "react";
import { skillList } from "./static-files/portfolioList";

const Skill = () => {

    return(
        <div className="portfolio-section-four" style={{marginTop: "20px"}}>
            <p className="portfolio-title-element">skills</p>
            <div className="portfolio-skills-element">
                {
                    (skillList instanceof Array && skillList.length > 0) && 
                    skillList.map((skill) => {
                        return(
                            <div key={skill.id} className="portfolio-skills-element-item">
                                <span>{skill.skillName}</span>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Skill;