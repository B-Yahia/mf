import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import { db } from '../firebase';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = (props) => {
  
  const [modalLogin, setModalLogin] = useState(false);
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

  const pushUsersData = (email, password ,fname, lname) =>{
    const user ={
      firstname : fname,
      lastname : lname,
      useremail : email,
      userPass : password
    }
    let dbRef = '';
    try {
      dbRef = db.ref("Users")   
    } catch (error) {
      console.error(error)
    }
    dbRef.set(user)
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
    pushUsersData,
  };
  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  )
}
