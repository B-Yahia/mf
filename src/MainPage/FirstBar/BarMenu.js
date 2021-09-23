import logo from "../../Images/Logo-MF.svg";
import lg from "../../Images/lg.svg"
import sign1 from "../../Images/sign1.svg"
import sign2 from "../../Images/sign2.svg"
import "./BarMenu.css"
import SignIn from "./Sign-In"
import { useAuth } from "../../Context/AuthContext";

function BarMenu (props){
    const {modalLogin,handleLoginModal,currentUser,handleLogoutModal} = useAuth()
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
            <div className='sign'>
                
                <img src={sign1} className='sign-1' />
                {currentUser?  
                <p className="sign-1" onClick={handleLogoutModal}>Conected</p>:
                <img src={sign2} className='sign-1' onClick={handleLoginModal} />}
                
            </div>
            
            <SignIn/>
            
        </div>
        
    </div>
)
}
export default BarMenu;