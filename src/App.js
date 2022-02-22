import React, { useEffect, useState } from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Routes, Route, useParams, useNavigate, Link, Navigate } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    fetchUser()
    if(currentUser === null){
      return <Navigate to='/signin' />
    }

    // unsubsribe from google auth when component unmounted
    return(() => unsubscribeFromAuth())
  }, [])

  let unsubscribeFromAuth = null

  const fetchUser = async () => {
    // subscribe to google auth when component didmount
    unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })
  }

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="signin" element={<SignInAndSignUp />} />
      </Routes>
    </div>
  );
}

export default App;
