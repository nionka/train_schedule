import React from 'react';
import { ReactElement } from 'react';
import './aboutWorks.scss';
import aboutWorks1 from '../../img/aboutWorks-1.png';
import aboutWorks2 from '../../img/aboutWorks-2.png';
import aboutWorks3 from '../../img/aboutWorks-3.png';

function AboutWorks(): ReactElement {
  return (
    <section className="aboutWorks" id="aboutWorks">
      <div className="container">
        <div className="aboutWorks__header">
          <h2 className="aboutWorks__title">Как это работает</h2>
          <button className="aboutWorks__button">Узнать больше</button>
        </div>
        <ul className="aboutWorks__list">
          <li className="aboutWorks__item">
            <img className="item__img" src={aboutWorks1} alt="1" />
            <div className="item__text">Удобный заказ на сайте</div>
          </li>
          <li className="aboutWorks__item">
            <img className="item__img" src={aboutWorks2} alt="2" />
            <div className="item__text">Нет необходимости ехать в офис</div>
          </li>
          <li className="aboutWorks__item">
            <img className="item__img" src={aboutWorks3} alt="3" />
            <div className="item__text">Огромный выбор направлений</div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default AboutWorks