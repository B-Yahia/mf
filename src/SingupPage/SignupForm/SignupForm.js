import "./SignupForm.css"
import im from "../BarMenu/Images/img1.png"

function SignupForm(){
    return(


        <div className='sf-container'>
            <div className='img-part'>
                <img className='sf-img' src={im}/>
            </div>
            <div className='sf-empty'>

            </div>
            <div className='form-part'>
                    <h1 className="sf-title">Regiter your business</h1>
                    <div className='sf-name'>
                        <input className="sf-f-name" placeholder='First name'/>
                        <input className="sf-l-name" placeholder='Last name'/>
                    </div>
                    <input className='sf-m-name' placeholder='Middle name'/>
                    <div className='sf-pw'>
                        <input className="sf-pw-1" placeholder='Password'/>
                        <input className="sf-pw-1" placeholder='Password again'/>
                    </div>
                    <button className="sf-signup-btn">Sign up</button>
                    <div className="sf-line">
                        <div className='sf-line-1'></div>
                        <div className='sf-line-text'>Or</div>
                        <div className='sf-line-2'></div>
                    </div>
                    <button className="sf-signup-btn dp-btn">Sign up with Dagpay</button>
                    <div className='sf-l-text'>
                        <div className='sf-l-text-1'>Already have an account?</div>
                        <div className='sf-l-text-1'> Sign in <a href="#">here</a></div>
                    </div>
                </div>
        </div>
    )
}

export default SignupForm;