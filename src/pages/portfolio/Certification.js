import React from "react";
import { certificationList } from "./static-files/portfolioList";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLink} from "@fortawesome/free-solid-svg-icons";

const Certification = () => {

    return(
        <div style={{marginTop: "20px"}}>
            <p className="portfolio-title-element">certification</p>
            <div className="certification-element">
                {(certificationList instanceof Array && certificationList.length > 0) &&
                    certificationList.map((certification) => {
                return  <div key={certification.id} className="certification-element-item" style={{paddingTop: "20px",paddingBottom: "70px"}}>
                            <h5 className="text-uppercase">{certification.learningPlatformName}</h5>
                            <img src={certification.learningPlatformImage} style={{width: "80px",borderRadius: "50%",marginBlock: "10px"}} />
                            <span style={{fontSize: "small",display: "block",textTransform: "capitalize"}}>{certification.issuedDate}</span>
                            <span className="text-uppercase" style={{display: "block",minHeight: "50px",marginTop: "20px"}}>{certification.certificationName}</span>
                            <a href={certification.certificationLink} target="_blank">
                                <button type="button" className="btn btn-primary p-2 mt-3 text-uppercase" style={{width: "170px",fontSize: "12px"}}>
                                    show credential 
                                    <FontAwesomeIcon icon={faLink} size="1x" style={{paddingLeft: "5px"}} />
                                </button>
                            </a>
                        </div>
                    })

                }
            </div>
        </div>
    )
}

export default Certification;