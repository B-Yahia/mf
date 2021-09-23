import "./SignupForm.css"
import im from "../BarMenu/Images/img1.png"
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from "../../Context/AuthContext";



function SignupForm(){
      const { signup } = useAuth();


  const [error, setError] = useState('');
  const history = useHistory();
  

  const [email, setEmail] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFname = e => setFname(e.target.value);
  const handleLname = e => setLname(e.target.value);
  const handleEmail = e => setEmail(e.target.value);
  const handlePassword = e => setPassword(e.target.value);
  const handleRePassword = e => setRePassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (password !== rePassword) {
      setError('Passwords do not match');
      setTimeout(() => setError(''), 3500);
    } else {
      try {
        await signup(email, password);
        history.push('/');
      } catch (error) {
        setError('Wrong Credentials');
        setTimeout(() => setError(''), 1500);
      }
    }
    setLoading(false);
  }

    return(
        <div className='sf-container'>
            <div className='img-part'>
                <img className='sf-img' src={im}/>
            </div>
            <div className='sf-empty'>
            </div>
            <form className='form-part' onSubmit={handleSubmit}>
                    <h1 className="sf-title">Regiter your business</h1>
                    {error && <p className='error' >{error}</p>}
                    {loading  && <p className='error' >Loading</p>}
                    <div className='sf-name'>
                        <input  type="text" className="sf-f-name" placeholder='First name'
                        onChange={handleFname}
                        />
                        <input  type="text" className="sf-l-name" placeholder='Last name'
                        onChange={handleLname}
                        />
                    </div>
                    <input  className='sf-m-name' placeholder='Email'
                    onChange={handleEmail}
                    />
                    <div className='sf-pw'>
                        <input  type="password" className="sf-pw-1" placeholder='Password'
                        onChange={handlePassword}
                        />
                        <input  type="password" className="sf-pw-1" placeholder='Password again'
                        onChange={handleRePassword}
                        />
                    </div>
                    <button className="sf-signup-btn" type='submit'>Sign up</button>
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
                </form>
        </div>
    )
}

export default SignupForm;