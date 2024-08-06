import React from "react";
import WorkExperience from "./WorkExperience";
import Skill from "./Skill";
import Header from "../header/Header";
import Introduction from "./Introduction";
import "../../scss/portfolio.scss";

const HariPortFolio = () => {

    return(
        <div className="hari-portfolio-root-element">
            <Header />
            <Introduction />
            <WorkExperience />
            <Skill />
        </div>
    );
}

export default HariPortFolio;