import React from 'react';
import { ReactElement } from 'react';
import './aboutUs.scss';

function AboutUs(): ReactElement {
  return (
    <section className="aboutUs" id="aboutUs">
      <div className="container">
        <h2 className="aboutUs__title">
          О нас
        </h2>
        <div className="aboutUs__content">
          <div className="aboutUs__line">
          </div>
          <div className="aboutUs__text">
            <p>
              Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем 
              все больше людей заказывают жд билеты через интернет.
            </p>
            <p>
              Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать? 
              Мы расскажем о преимуществах заказа через интернет.
            </p>
            <p>
              Покупать жд билеты дешево можно за 90 суток до отправления поезда. 
              Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.
            </p>
          </div>
        </div>  
      </div>
    </section>
  )
}

export default AboutUs