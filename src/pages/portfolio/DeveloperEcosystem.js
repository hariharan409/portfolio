import React from "react";
import { developerEcosystemList } from "../../static-files/portfolioList";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLink} from "@fortawesome/free-solid-svg-icons";

const DeveloperEcosystem = () => {

    return(
        <div className="ecosystem-element mt-3">
                {(developerEcosystemList instanceof Array && developerEcosystemList.length > 0) &&
                    developerEcosystemList.map((ecosystem) => {
                return  <div key={ecosystem.id} className="ecosystem-element-item" style={{paddingTop: "20px",paddingBottom: "70px"}}>
                            <h5 className="text-uppercase">{ecosystem.ecosystemName}</h5>
                            <img src={ecosystem.ecosystemImage} alt="ecosystem-pic" style={{width: "80px",borderRadius: "50%",marginBlock: "10px"}} />
                            <span style={{fontSize: "small",display: "block",minHeight: "80px"}}>{ecosystem.ecosystemDescription}</span>
                            <a href={ecosystem.link} target="_blank" rel="noreferrer">
                                <button type="button" className="btn btn-primary p-2 mt-3 text-uppercase" style={{width: "130px",fontSize: "12px"}}>
                                    view profile
                                    <FontAwesomeIcon icon={faLink} size="1x" style={{paddingLeft: "5px"}} />
                                </button>
                            </a>
                        </div>
                    })
                }
            </div>
    )
}

export default DeveloperEcosystem;