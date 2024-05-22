import React from "react";
import { platformList } from "./static-files/portfolioList";

const Platform = () => {

    return(
        <div className="portfolio-section-five" style={{marginTop: "40px"}}>
            <p className="portfolio-title-element">platforms</p>
            <div className="portfolio-platform-element">
                {
                    (platformList instanceof Array && platformList.length > 0) && 
                    platformList.map((platform) => {
                        return(
                            <div key={platform.id} className="portfolio-platform-element-item">
                                <span>{platform.platformName}</span>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Platform;