import React, { useState } from 'react';
import './news.css';
import DateFilters from '../../components/DateFilters/DateFilters';
import NewsSliderItem from '../../components/NewsSliderItem';

const News = ({ news }) => {
  const [ activeYear, setActiveYear ] = useState(2019);
  const [ activeMonth, setActiveMonth ] = useState(1);
  const [ activeSlideR, setActiveSlideR ] = useState(0);
  const slideLeftR = () => setActiveSlideR(activeSlideR - 1);
  const slideRightR = () => setActiveSlideR(activeSlideR + 1);
  return (
    <>
      <section className="calendar">
    <div className="container">
      <DateFilters
          activeYear={activeYear}
          setActiveYear={setActiveYear}
          activeMonth={activeMonth}
          setActiveMonth={setActiveMonth}
      />
    </div>
  </section>
  <section className="slider">
    <div className="slider__inner">
      <div className="slider__controls">
        <button onClick={slideLeftR} className={`slider__controls-left ${activeSlideR === 0 && 'disabled'}`}>
          <img src={`/assets/arrow-left${activeSlideR !== 0 ? '-active' : ''}.svg`} alt=""/>
        </button>
        <button onClick={slideRightR} className={`slider__controls-right ${activeSlideR === news.length - 1 && 'disabled'}`}>
          <img src={`/assets/arrow-right${activeSlideR !== news.length - 1 ? '-active' : ''}.svg`} alt=""/>
        </button>
      </div>
      <ul className="slider__list">
        {
          news.map((sliderItem, index) => (
              <NewsSliderItem activeSlide={activeSlideR} sliderItem={sliderItem} index={index} key={sliderItem.id}/>
          ))
        }
      </ul>
      <div className="slider__dots">
        <ul className="slider__dots-list">
          {
            news.map((item, idx) => (
                <li
                    onClick={() => setActiveSlideR(idx)}
                    key={idx}
                    className={`slider__dots-item ${activeSlideR === idx && 'active'}`}
                >
                  <a href="#" />
                </li>
            ))
          }
        </ul>
      </div>
    </div>
  </section>
    </>
  );
}

export default News;
