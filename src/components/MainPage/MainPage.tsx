import React from 'react';
import { ReactElement } from 'react';
import AboutUs from '../AboutUs/AboutUs';
import AboutWorks from '../AboutWorks/AboutWorks';
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
    </>
  )
}

export default MainPage