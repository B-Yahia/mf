import "./MainPageFooter.css"
import logo from "../../Images/logo1.svg";

function MainPageFooter(){
    return(
        <div className="footer-container">
            <img src={logo} className="footer-logo"/>
            <div className="footer-info" >
                <div className="footer-info-p1">
                    <div className="footer-t1">Merchant finder Statement</div>
                    <div className="footer-t2">Contact us</div>
                </div>
                <div className="footer-info-p2">
                    © 2020 Dagcoin Beta
                </div>
            </div>
        </div>
    )
}

export default MainPageFooter;