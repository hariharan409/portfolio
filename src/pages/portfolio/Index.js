import React from "react";
import WorkExperience from "./WorkExperience";
import Skill from "./Skill";
import Header from "../header/Header";
import Introduction from "./Introduction";
import "../../scss/portfolio.scss";
import DeveloperEcosystem from "./DeveloperEcosystem";
import Academy from "./Academy";
import Certification from "./Certification";
import PersonalProjects from "./PersonalProject";

const HariPortFolio = () => {
    const currentYear = new Date().getFullYear();

    return(
        <div className="hari-portfolio-root-element">
            <Header />
            <Introduction />
            <DeveloperEcosystem />
            <Certification />
            <PersonalProjects />
            <Academy />
            <WorkExperience />
            <Skill />
            <div style={{marginTop: "40px",textAlign: "center"}}>
                <span style={{textTransform: "uppercase",color: "blueviolet",fontSize: "12px",fontWeight: "bolder"}}>app version {process.env.REACT_APP_VERSION} @{currentYear} owned by harish</span>
            </div>
        </div>
    );
}

export default HariPortFolio;