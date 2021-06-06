import React, { useEffect, useState } from 'react';
import './news.css';
import { DateFilters } from './DateFilters/DateFilters';
import NewsSliderItem from './NewsSliderItem';

const News = ({ news }) => {
  const [ activeYear, setActiveYear ] = useState(2019);
  const [ activeMonth, setActiveMonth ] = useState(1);
  useEffect(() => {
  let activeSlide = 1;
  const sliderControlsLeft = document.querySelector('.slider__controls-left');
  const sliderControlsLeftImage = document.querySelector('.slider__controls-left img');
  const sliderControlsRight = document.querySelector('.slider__controls-right');
  const sliderControlsRightImage = document.querySelector('.slider__controls-right img');
  const sliderDots = document.querySelectorAll('.slider__dots-item');
  const sliderItems = document.querySelectorAll('.slider__item');

  sliderDots.forEach((item) => {
    item.addEventListener('click', () => {
      const position = [...sliderDots].indexOf(item) + 1;
      const step = position - activeSlide;
      if (position > activeSlide) {
        slideRight(step);
      } else if (position < activeSlide) {
        slideLeft(step);
      }
    });
  });

  sliderControlsLeft.addEventListener('click', () => {
    slideLeft(-1);
  });

  sliderControlsRight.addEventListener('click', () => {
    slideRight(1);
  });

  function slideLeft(step) {
    activeSlide += step;
    slideDots();
    if (activeSlide === 1) {
      toggleLeftDisabled(true);
      toggleRightDisabled(false);
    } else {
      toggleLeftDisabled(false);
      toggleRightDisabled(false);
    }
    moveSlide(step);
  };

  function slideRight(step) {
    activeSlide += step;
    slideDots();
    if (activeSlide === 4) {
      toggleLeftDisabled(false);
      toggleRightDisabled(true);
    } else {
      toggleRightDisabled(false);
      toggleLeftDisabled(false);
    }
    moveSlide(step);
  };

  function toggleRightDisabled(isDisabled) {
    sliderControlsRight.classList.toggle('disabled', isDisabled);
    sliderControlsRight.classList.contains('disabled')
      ? sliderControlsRightImage.src = '../../assets/arrow-right.svg'
      : sliderControlsRightImage.src = '../../assets/arrow-right-active.svg';
  };

  function toggleLeftDisabled(isDisabled) {
    sliderControlsLeft.classList.toggle('disabled', isDisabled);
    sliderControlsLeft.classList.contains('disabled')
      ? sliderControlsLeftImage.src = '../../assets/arrow-left.svg'
      : sliderControlsLeftImage.src = '../../assets/arrow-left-active.svg';
  };

  function slideDots() {
    sliderDots.forEach((item) => {
      item.classList.remove('active');
    });
    sliderDots[activeSlide - 1].classList.add('active');
  };

  function moveSlide(step) {
    sliderItems.forEach((item) => {
      const currentPos = +item.getAttribute('data-pos');
      const newPos = currentPos + step;
      item.setAttribute('data-pos', newPos)
    });
  };

  }, [ news ])
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
        <button className="slider__controls-left disabled">
          <img src="/assets/arrow-left.svg" alt=""/>
        </button>
        <button className="slider__controls-right">
          <img src="/assets/arrow-right-active.svg" alt=""/>
        </button>
      </div>
      <ul className="slider__list">
        {
          news.map((sliderItem, index) => (
              <NewsSliderItem sliderItem={sliderItem} index={index} key={sliderItem.id}/>
          ))
        }
        {
          news.length && <NewsSliderItem sliderItem={news[0]} index={3} />
        }
      </ul>
      <div className="slider__dots">
        <ul className="slider__dots-list">
          <li className="slider__dots-item active"><a href="#"></a></li>
          <li className="slider__dots-item"><a href="#"></a></li>
          <li className="slider__dots-item"><a href="#"></a></li>
          <li className="slider__dots-item"><a href="#"></a></li>
        </ul>
      </div>
    </div>
  </section>
    </>
  );
}

export default News;
