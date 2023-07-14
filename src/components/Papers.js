import React from "react"
import img from "../images/Paper.png"
import listimg from "../images/pokeball (1) 1.png"
function Papers(){
    return(
        <div className="container">
            <img src={img} className="paperimg" />
            <div className="papercontent">
                <div className="shiftbox"><div className="box"><h6>Inception Round</h6></div></div>
                <ul>
                    <li><span><img src={listimg}  className="listimg" /></span>Metiox</li>
                    <li><span><img src={listimg} className="listimg" /></span>Apollox</li>
                    <li><span><img src={listimg} className="listimg" /></span>Athenox</li>
                </ul>
            </div>
            <div className="papercontent">
            <div className="shiftbox"><div className="box"><h6>Pinnacle Round</h6></div></div>
                <ul>
                    <li><span><img src={listimg}  className="listimg" /></span>Metiox</li>
                    <li><span><img src={listimg}  className="listimg" /></span>Apollox</li>
                    <li><span><img src={listimg}  className="listimg" /></span>Athenox</li>
                </ul>
            </div>

        </div>
    );
}
export default Papers;