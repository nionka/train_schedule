import  React, { ReactElement } from 'react';
import './feedBack.scss';
import photo1 from '../../img/feedback-img-1.png';
import photo2 from '../../img/feedback-img-2.png';

function FeedBack (): ReactElement {
  return (
    <section className="feedback">
      <div className="container">
        <h2 className="feedback__title">Отзывы</h2>
        <ul className="feedback__list">
          <li className="feedback__item">
            <div className="feedback__item-img">
              <img src={photo1} alt="photo1" />
            </div>
            <div className="feedback__item-content">
              <div className="feedback__item-name">Екатерина Вальнова</div>
              <div className="feedback__item-text">
                <q> Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без 
                   затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.
                </q>
              </div>
            </div>
          </li>
          <li className="feedback__item">
            <div className="feedback__item-img">
              <img src={photo2} alt="photo2" />
            </div>
            <div className="feedback__item-content">
              <div className="feedback__item-name">Евгений Стрыкало</div>
              <div className="feedback__item-text">
                <q> СМС-сопровождение до посадки. Сразу после оплаты ж/д билетов и за 3 часа до отправления
                   мы пришлем вам СМС-напоминание о поездке.
                </q>
              </div>
            </div>
          </li>
        </ul>

        <div className="slider">
          <ul className="slider__list">
            <li className="slider__item slider__item-active"></li>
            <li className="slider__item"></li>
            <li className="slider__item"></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default FeedBack