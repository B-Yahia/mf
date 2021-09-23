import React from 'react'
import i1 from "./Image/Vector.svg"
import { useAuth } from '../../Context/AuthContext'
import { useState } from "react"
import { Link, useHistory } from 'react-router-dom';

function ModalLogout() {
    const { logout, currentUser,handleLogoutModal,handleLoginModal } = useAuth();
  

    const [error, setError] = useState('');


    const handleLogout = async () => {
        try {
        await logout();
        handleLogoutModal();
        
        } catch (error) {
        setError('Server Error')
        }
    }
    return (
        <div className="Modal-container">
            <form className="modal-box" onSubmit={handleLogout}>
                <div className="model-close"> 
                <img src={i1} className="model-close-image" onClick={handleLogoutModal}/>
                </div>
                <div className="model-title" > Log out</div>
                
                <button className="sf-signup-btn" type='submit'>Log out</button>
                <div className="model-link"> Don't have an account ? <Link to='/signup'> Sign-up</Link> </div>

            </form>
        </div>
    )
}

export default ModalLogout
