import React, { ReactElement } from 'react';
import AboutUs from '../AboutUs/AboutUs';
import AboutWorks from '../AboutWorks/AboutWorks';
import FeedBack from '../FeedBack/FeedBack';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './mainPage.scss';

function MainPage(): ReactElement {
  return (
    <>
      <div className="wrapper">
        <Header/>
      </div>
      <AboutUs />
      <AboutWorks />
      <FeedBack />
      <Footer />
    </>
  )
}

export default MainPage