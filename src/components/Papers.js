import React from "react"
import img from "../images/Paper.png"
import listimg from "../images/pokeball (1) 1.png"
import { BrowserRouter , Link } from 'react-router-dom';
import inceptionmetiox from "../PracticePapers/9th 10th COMPLETE.pdf";
import inceptionappolox from "../PracticePapers/11TH COMPLETE.pdf";
import inceptionathenox from "../PracticePapers/12th COMPLETE.pdf";
import pinnaclemetiox from "../PracticePapers/Metiox Paper-1.pdf";
import pinnacleapollox from "../PracticePapers/Metiox Paper-1.pdf";
import pinnacleathenox from "../PracticePapers/Metiox Paper-1.pdf";
function Papers(){
    return(
        <BrowserRouter>
        <div className="container">
            <img src={img} className="paperimg" />
            <div className="papercontent">
                <div className="shiftbox"><div className="box"><h6>Inception Round</h6></div></div>
                <ul>
                    <li><Link to={inceptionmetiox} ><span><img src={listimg}  className="listimg" /></span>Metiox</Link></li>
                    <li><Link to={inceptionappolox} ><span><img src={listimg} className="listimg" /></span>Apollox</Link></li>
                    <li><Link to={inceptionathenox} ><span><img src={listimg} className="listimg" /></span>Athenox</Link></li>
                </ul>
            </div>
            <div className="papercontent">
            <div className="shiftbox"><div className="box"><h6>Pinnacle Round</h6></div></div>
                <ul>
                    <li><Link to={pinnaclemetiox} ><span><img src={listimg}  className="listimg" /></span>Metiox</Link></li>
                    <li><Link to={pinnacleapollox} ><span><img src={listimg} className="listimg" /></span>Apollox</Link></li>
                    <li><Link to={pinnacleathenox} ><span><img src={listimg} className="listimg" /></span>Athenox</Link></li>
                </ul>
            </div>

        </div>
        </BrowserRouter>
    );

}
export default Papers;