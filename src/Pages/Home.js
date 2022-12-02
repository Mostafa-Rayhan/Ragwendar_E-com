import React from 'react'

import { Outlet } from 'react-router-dom';

import Header from '../components/indexPage/header';
import LoginModal from '../components/indexPage/loginModal';
import SignupModal from '../components/indexPage/signupModal';
import Footer from '../components/indexPage/footer';



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