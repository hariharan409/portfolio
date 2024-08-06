import React, { useEffect, useState } from "react";
import HariImage from "../../assets/portfolio/introduction/hari-image.jpg";
import moment from "moment";
import { developerEcosystemList } from "./static-files/portfolioList";

const Introduction = () => {
    const [careerStartDate,setCareerStartDate] = useState(null);

    useEffect(() => {
        setCareerStartDate(moment("2020-09-01"));
    },[]);

    return(
        <div className="portfolio-section-two">
            <img src={HariImage} style={{height: "200px",width: "200px",objectFit: "cover"}} className="portfolio-profile-picture mt-4" />
            <h5 className="portfolio-section-two-portfolio-name mt-3">harihara dhamodaran k</h5>
            <span className="mt-3" style={{fontSize: "0.7rem",color: "#002C54",fontWeight: "600",textTransform: "uppercase",textDecorationLine: "underline",textAlign: "center"}}>"6 months of hardwork and focus can put you five years ahead in your life"</span>
            <span className="text-muted mt-3" style={{fontSize: "1.2rem",textAlign: "center"}}>
                Experienced Full Stack Developer with over {(moment.duration(moment().diff(careerStartDate)).asYears()).toFixed(1) } years of expertise in developing robust web and mobile applications using modern technologies. Proficient in React JS, React Native, Node.js, Java Spring MVC, Spring Boot, and Dart. Skilled in creating dynamic, responsive user interfaces with JavaScript, Bootstrap, and Tailwind CSS. Experienced in UI/UX design with Figma, and adept at integrating and managing serverless applications on AWS. Beginner in machine learning and blockchain technologies, with a keen interest in Ethereum and smart contracts.
            </span>
            <div className="portfolio-section-two-ecosystem-element mt-3">
                {(developerEcosystemList instanceof Array && developerEcosystemList.length > 0) &&
                    developerEcosystemList.map((ecosystem) => {
                return  <div key={ecosystem.id} className="portfolio-section-two-ecosystem-element-item" style={{paddingTop: "20px",paddingBottom: "70px",position: "relative"}}>
                            <h5 className="text-uppercase">{ecosystem.ecosystemName}</h5>
                            <img src={ecosystem.ecosystemImage} style={{width: "80px",borderRadius: "50%",marginBlock: "10px"}} />
                            <span style={{fontSize: "small",display: "block"}}>{ecosystem.ecosystemDescription}</span>
                            <a href={ecosystem.link} target="_blank" style={{position: "absolute",bottom: 10}}>
                                <button type="button" className="btn btn-primary p-2 mt-3 text-uppercase" style={{width: "130px",fontSize: "12px"}}>{ecosystem.ecosystemName}</button>
                            </a>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default Introduction;