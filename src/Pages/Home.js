import React from 'react'

import { Outlet } from 'react-router-dom';

import Header from '../components/header';
import LoginModal from '../components/loginModal';
import SignupModal from '../components/signupModal';
import Footer from '../components/footer';



const Home = () => {
  return (
    <div>
      <Header />
      <LoginModal />
      <SignupModal />
      <Outlet></Outlet>
      <Footer />
    </div>
  )
}

export default Home;