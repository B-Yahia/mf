import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = (props) => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [modalLogin, setModalLogin] = useState(true);
  const [modalLogout, setModalLogout] = useState(false);

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    })
  }, [])

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  }

  const handleLogoutModal = () => {
      return setModalLogout(!modalLogout)
  }
  const handleLoginModal = () => {
    return setModalLogin(!modalLogin)
}
  

  const logout = () => auth.signOut();

  const value = {
    currentUser,
    login,
    logout,
    signup,
    handleLoginModal,
    handleLogoutModal,
    modalLogin,
    modalLogout,
  };
  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  )
}
