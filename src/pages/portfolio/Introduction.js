import React, { useEffect, useState } from "react";
import HariImage from "../../assets/portfolio/introduction/hari-image.jpg";
import moment from "moment";

const Introduction = () => {
    const [careerStartDate,setCareerStartDate] = useState(null);

    useEffect(() => {
        setCareerStartDate(moment("2020-09-01"));
    },[]);

    return(
        <div className="portfolio-section-two">
            <img src={HariImage} alt="profile-pic" style={{height: "200px",width: "200px",objectFit: "cover"}} className="portfolio-profile-picture mt-4" />
            <h5 className="portfolio-section-two-portfolio-name mt-3">harihara dhamodaran k</h5>
            <span className="mt-3 text-primary portfolio-section-two-favourite-quote">"6 months of hardwork and focus can put you five years ahead in your life"</span>
            {/* <a className="text-primary mt-2" style={{fontSize: "0.55rem",textTransform: "uppercase",fontWeight: "bold",wordSpacing: "0.5px"}} href={`${process.env.PUBLIC_URL}/pdf/hari-updated-resume.pdf`} target="_blank">
                click to view resume
            </a> */}
            <span className="text-muted mt-3" style={{fontSize: "1.2rem",textAlign: "center"}}>
                Experienced Full Stack Developer with over {(moment.duration(moment().diff(careerStartDate)).asYears()).toFixed(1) } years of expertise in developing robust web and mobile applications using modern technologies. Proficient in React JS, React Native, Node.js, Java Spring MVC, Spring Boot, and Dart. Skilled in creating dynamic, responsive user interfaces with JavaScript, Bootstrap, and Tailwind CSS. Experienced in UI/UX design with Figma, and adept at integrating and managing serverless applications on AWS. Beginner in machine learning and blockchain technologies, with a keen interest in Ethereum and smart contracts.
            </span>
            <span className="text-muted mt-3" style={{fontSize: "1.1rem"}}>
                <ul style={{color:"#e400e5"}}>
                    <li>
                        I am currently working towards earning the <strong style={{color: "#000"}}>JavaScript Foundations Professional Certificate offered by Mozilla</strong>. This certification program provides a comprehensive understanding of core JavaScript concepts and best practices.
                    </li>
                    <li>
                        I am in the process of <strong style={{color: "#000"}}>developing an open-source npm package for a customizable React sidebar component</strong>. This package aims to provide an easy-to-integrate sidebar solution with a variety of features to enhance the user interface of React applications.
                    </li>
                </ul>
            </span>
        </div>
    );
}

export default Introduction;