
import i1 from "./Image/Vector.svg"
import "./Modal.css"
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from "../../Context/AuthContext";

export const Modal = (props) => {
    const { login,modalLogin,handleLoginModal  } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmail = e => setEmail(e.target.value);
    const handlePassword = e => setPassword(e.target.value);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        await login(email, password);
        setLoading(false);
        handleLoginModal();
      } catch (error) {
        setLoading(false);
        setError('Wrong Credentials');
        setTimeout(() => setError(''), 1500);
      }
    }
    return (
        <div className="Modal-container">
            <form className="modal-box" onSubmit={handleSubmit}>
                <div className="model-close"> 
                
                <img src={i1} className="model-close-image" onClick={handleLoginModal}/>
                
                </div>
                <div className="model-title"> Log in</div>
                <button className="sf-signup-btn dp-btn">Sign up with Dagpay</button>
                <div className="sf-line">
                    <div className='sf-line-1'></div>
                    <div className='sf-line-text'>Or</div>
                    <div className='sf-line-2'></div>
                </div>
                {error && <p className='error'>Wrong Credentials</p>}
                {loading && <p className='error'>Is loading</p>}
                <input className='sf-m-name' placeholder='Email' onChange={handleEmail} />
                <input className='sf-m-name' placeholder='Password' type='password' onChange={handlePassword}/>
                <div className="model-link"> <a href="#">Forgot your password ?</a> </div>
                <button className="sf-signup-btn" type='submit'>Log in</button>
                <div className="model-link"> Don't have an account ? <Link to='/signup'> Sign-up</Link> </div>

            </form>
        </div>
        
    )
}