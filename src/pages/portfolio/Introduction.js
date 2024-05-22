import React, { useEffect, useState } from "react";
import HariImage from "../../assets/portfolio/hari-image.jpg";
import moment from "moment";

const Introduction = () => {
    const [careerStartDate,setCareerStartDate] = useState(null);

    useEffect(() => {
        setCareerStartDate(moment("2020-09-01"));
    },[]);

    return(
        <div className="portfolio-section-two">
            <img src={HariImage} style={{height: "300px",width: "200px",objectFit: "contain"}} className="portfolio-profile-picture" />
            <h5 className="portfolio-section-two-portfolio-name">harihara dhamodaran k</h5>
            <span style={{fontSize: "0.7rem",color: "#002C54",fontWeight: "600",textTransform: "uppercase",textDecorationLine: "underline"}}>"6 months of hardwork and focus can put you five years ahead in your life"</span>
            <span className="text-muted" style={{fontSize: "1.5rem",textAlign: "center"}}>
                An experienced software engineer with a {(moment.duration(moment().diff(careerStartDate)).asYears()).toFixed(1) } years of working experience as a full stack developer.
                Always focusing on new learnings and strict to code standards. Ability to handle multiple tasks and
                creative approach to problem solving.
            </span>
            <a className="align-self-start fs-6 text-uppercase mt-4" href="https://stackoverflow.com/users/16240306/harizh" target="_blank">
                https://stackoverflow.com/users/16240306/harizh
            </a>
            <a className="align-self-start fs-6 text-uppercase mt-4" href="https://www.linkedin.com/in/harihara-dhamodaran-335a4b1bb/" target="_blank">
                https://www.linkedin.com/in/harihara-dhamodaran-335a4b1bb/
            </a>
        </div>
    );
}

export default Introduction;