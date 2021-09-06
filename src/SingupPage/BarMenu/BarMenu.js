import logo from "./Images/Logo.svg";
import lg from "./Images/lg.svg"
import sign from "../../Images/sign.svg"
import "./BarMenu.css"

function BarMenu(){
    return(
        <div className="sp-barmenu">
        <img src={logo} className="sp-logo" />    
        <div className='sp-menu-options'>
            <div className='sp-menu-item'>Discover places</div>
            <div className='sp-menu-item'>Discover Online services</div>
            <div className='sp-menu-item'>Browes all merchands</div>
            <div className='sp-menu-item'>Become a member</div>
        </div>
        <div className='sp-icons'>
            <img src={lg} className="sp-lg" />
            <img src={sign} className='sp-sign' />
            
        </div>
        
    </div>
    )
}

export default BarMenu;