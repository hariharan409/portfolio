import React from "react";
import { academyList } from "../../static-files/portfolioList";

const Academy = () => {

    return(
        <div style={{marginTop: "20px"}}>
            <p className="portfolio-title-element">academy</p>
            <div className="academy-element">
                {(academyList instanceof Array && academyList.length > 0) &&
                    academyList.map((academy) => {
                return <div key={academy.id} className="academy-element-item" style={{paddingTop: "20px",paddingBottom: "30px"}}>
                            <h5 className="text-uppercase">{academy.collegeName}</h5>
                            <img src={academy.collegeImage} alt="acedemy-pic" style={{width: "80px",borderRadius: "50%",marginBlock: "10px"}} />
                            <span className="text-uppercase" style={{display: "block"}}>{academy.degree}</span>
                            <span style={{fontSize: "small",display: "block"}}>{academy.timePeriod}</span>
                            <span style={{fontSize: "small",display: "block",minHeight: "50px",marginTop: "20px"}}>{academy.collegeDescription}</span>
                            <a href={academy.link} target="_blank" rel="noreferrer">
                                <button type="button" className="btn btn-primary p-2 mt-3 text-uppercase" style={{width: "130px",fontSize: "12px"}}>{academy.collegeName}</button>
                            </a>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Academy;