import React from "react";
import WorkExperience from "./WorkExperience";
import Skill from "./Skill";
import Header from "../header/Header";
import Introduction from "./Introduction";
import "../../scss/portfolio.scss";

const HariPortFolio = () => {
    const currentYear = new Date().getFullYear();

    return(
        <div className="hari-portfolio-root-element">
            <Header />
            <Introduction />
            <WorkExperience />
            <Skill />
            <div style={{marginTop: "40px",textAlign: "center"}}>
                <span style={{textTransform: "uppercase",color: "blueviolet",fontSize: "12px",fontWeight: "bolder"}}>app version b-0.1.0 @{currentYear} owned by harish</span>
            </div>
        </div>
    );
}

export default HariPortFolio;