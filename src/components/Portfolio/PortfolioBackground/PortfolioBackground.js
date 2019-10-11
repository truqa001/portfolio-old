import React from 'react'
import cloud1 from "../../../images/cloud1.svg"
import mars from "../../../images/mars.png"
import moon from "../../../images/moon.png"
import cloud2 from "../../../images/cloud2.svg"


const PortfolioBackground = () => {
    return (
        <React.Fragment>
            <div id="scene">
                <div id="cloud1" data-depth="0.2">
                    <img src={cloud1} alt="cloud" />
                </div>

                <div id="mars" data-depth="0.4">
                    <img src={mars} alt="mars" />
                </div>
                <div id="moon" data-depth="0.3">
                    <img src={moon} alt="moon" />
                </div>
            </div>

            <div id="scene2">
                <div id="cloud2" data-depth="0.1">
                    <img src={cloud2} alt="cloud" />
                </div>
            </div>
        </React.Fragment>
    )
}
export default PortfolioBackground;