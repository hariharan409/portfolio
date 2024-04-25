import React, { useEffect, useState } from "react";
import moment from "moment";
import HariImage from "../../assets/portfolio/hari-image.jpg";
import "../../scss/portfolio.scss";
import { devEnvironmentList, platformList, skillList } from "./static-files/portfolioList";

const HariPortFolio = () => {
    const [careerStartDate,setCareerStartDate] = useState(null);

    useEffect(() => {
        setCareerStartDate(moment("2020-09-01"));
    },[]);

    return(
        <div className="hari-portfolio-root-element">

            <div className="portfolio-section-one">
                <span>portfolio</span>
                <div className="portfolio-section-one-column-two">
                    <span>about me</span>
                    <span>news</span>
                    <span>help</span>
                </div>
            </div>

            <div className="portfolio-section-two">
                <img src={HariImage} style={{height: "300px",width: "200px",objectFit: "contain"}} />
                <p className="portfolio-section-two-portfolio-name">harihara dhamodaran k</p>
                <span className="text-muted" style={{fontSize: "1.5rem",textAlign: "center"}}>
                    An experienced software engineer with a {(moment.duration(moment().diff(careerStartDate)).asYears()).toFixed(1) } years of working experience as a full stack developer.
                    Always focusing on new learnings and strict to code standards. Ability to handle multiple tasks and
                    creative approach to problem solving.
                </span>
            </div>

            <div className="portfolio-section-three" style={{marginTop: "40px"}}>
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

            <div className="portfolio-section-four" style={{marginTop: "40px"}}>
                <p className="portfolio-title-element">platforms</p>
                <div className="portfolio-platform-element">
                    {
                        (platformList instanceof Array && platformList.length > 0) && 
                        platformList.map((platform) => {
                            return(
                                <div key={platform.id} className="portfolio-platform-element-item">
                                    <span>{platform.platformName}</span>
                                </div>
                            );
                        })
                    }
                </div>
            </div>

            <div className="portfolio-section-five" style={{marginTop: "40px"}}>
                <p className="portfolio-title-element">development enivronment</p>
                <div className="portfolio-dev-environment-element">
                    {
                        (devEnvironmentList instanceof Array && devEnvironmentList.length > 0) && 
                        devEnvironmentList.map((dev) => {
                            return(
                                <div key={dev.id} className="portfolio-dev-environment-element-item">
                                    <span>{dev.devEnvironment}</span>
                                </div>
                            );
                        })
                    }
                </div>
            </div>

        </div>
    );
}

export default HariPortFolio;