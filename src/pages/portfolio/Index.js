import React from "react";
import WorkExperience from "./WorkExperience";
import Skill from "./Skill";
import Platform from "./Platform";
import DevEnvironment from "./DevEnvironment";
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
            <Platform />
            <DevEnvironment />
        </div>
    );
}

export default HariPortFolio;