import "./Sign-In.css"

function SignIn(){
    return(
        <div className="si-container">
            <div className="login" >Log-in</div>
            <input placeholder="Regitser your business" className="rb-si" />
            <div className="line"></div>
            <input placeholder="Support" className="support"/>
        </div>
    )
}
export default SignIn;