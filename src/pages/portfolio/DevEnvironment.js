import React from "react";
import { devEnvironmentList } from "./static-files/portfolioList";

const DevEnvironment = () => {

    return(
        <div className="portfolio-section-six" style={{marginTop: "40px"}}>
            <p className="portfolio-title-element">development enivronment</p>
            <div className="portfolio-dev-environment-element">
                {
                    (devEnvironmentList instanceof Array && devEnvironmentList.length > 0) && 
                    devEnvironmentList.map((dev) => {
                        return(
                            <div key={dev.id} className="portfolio-dev-environment-element-item">
                                <span>{dev.devEnvironment}</span>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default DevEnvironment;