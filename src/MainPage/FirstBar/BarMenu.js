import logo from "../../Images/Logo-MF.svg";
import lg from "../../Images/lg.svg"
import sign from "../../Images/sign.svg"
import "./BarMenu.css"
import SignIn from "./Sign-In"

function BarMenu (){
return(
    <div className="barmenu">
        <img src={logo} className="logo" />    
        <ul className='menu-options'>
            <li className='menu-item'>Discover places</li>
            <li className='menu-item'>Discover Online services</li>
            <li className='menu-item'>Browes all merchands</li>
            <li className='menu-item'>Become a member</li>
        </ul>
        <div className='icons'>
            <img src={lg} className="lg" />
            <img src={sign} className='sign' />
            <SignIn/>
            
        </div>
        
    </div>
)
}
export default BarMenu;