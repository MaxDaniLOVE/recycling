import React, { useEffect } from 'react';
import './news.css';

const News = () => {
  useEffect(() => {
    const yearsList = document.querySelectorAll('.calendar__years-item');
  yearsList.forEach((item) => {
    item.addEventListener('click', () => {
      yearsList.forEach((item) => {
        item.classList.remove('selected');
      });
      item.classList.add('selected');
    });
  });

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

  let currentPage = 1;
  const newsSliderList = document.querySelectorAll('.news__slider-item');
  const newsSliderPages = document.querySelectorAll('.news__slider-controls__item');
  const newsSliderControlsLeft = document.querySelector('.news__slider-controls-left');
  const newsSliderControlsLeftImage = document.querySelector('.news__slider-controls-left img');
  const newsSliderControlsRight = document.querySelector('.news__slider-controls-right');
  const newsSliderControlsRightImage = document.querySelector('.news__slider-controls-right img');

  newsSliderPages.forEach((item) => {
    item.addEventListener('click', () => {
      const position = [...newsSliderPages].indexOf(item) + 1;
      const step = position - currentPage;
      if (position > currentPage) {
        newsSlideRight(step);
      } else if (position < currentPage) {
        newsSlideLeft(step);
      }
    });
  });

  newsSliderControlsLeft.addEventListener('click', () => {
    newsSlideLeft(-1);
  });

  newsSliderControlsRight.addEventListener('click', () => {
    newsSlideRight(1);
  });

  function toggleNewsControlsLeftDisabled(isDisabled) {
    newsSliderControlsLeft.classList.toggle('disabled', isDisabled);
    newsSliderControlsLeft.classList.contains('disabled')
      ? newsSliderControlsLeftImage.src = '../../assets/arrow-left.svg'
      : newsSliderControlsLeftImage.src = '../../assets/arrow-left-active.svg';
  };

  function toggleNewsControlsRightDisabled(isDisabled) {
    
    newsSliderControlsRight.classList.toggle('disabled', isDisabled);
    newsSliderControlsRight.classList.contains('disabled')
      ? newsSliderControlsRightImage.src = '../../assets/arrow-right.svg'
      : newsSliderControlsRightImage.src = '../../assets/arrow-right-active.svg';
  };

  function newsSlideLeft(step) {
    currentPage += step;
    changeCurrentPage();
    if (currentPage === 1) {
      toggleNewsControlsLeftDisabled(true);
      toggleNewsControlsRightDisabled(false);
    } else {
      toggleNewsControlsLeftDisabled(false);
      toggleNewsControlsRightDisabled(false);
    }
    moveNews(step * 2);
  };

  function newsSlideRight(step) {
    currentPage += step;
    changeCurrentPage();
    if (currentPage === 4) {
      toggleNewsControlsLeftDisabled(false);
      toggleNewsControlsRightDisabled(true);
    } else {
      toggleNewsControlsRightDisabled(false);
      toggleNewsControlsLeftDisabled(false);
    }
    moveNews(step * 2);
  };

  function changeCurrentPage() {
    newsSliderPages.forEach((item) => {
      item.classList.remove('active');
    });
    newsSliderPages[currentPage - 1].classList.add('active');
  };

  function moveNews(step) {
    newsSliderList.forEach((item) => {
      const currentPos = +item.getAttribute('data-pos');
      const newPos = currentPos + step;
      item.setAttribute('data-pos', newPos)
    });
};
  }, [])
  return (
    <>
      <section className="calendar">
    <div className="container">
      <div className="calendar__inner">
        <ul className="calendar__years-list">
          <li className="calendar__years-item"><a href="#">2019</a></li>
          <li className="calendar__years-item"><a href="#">2020</a></li>
          <li className="calendar__years-item selected"><a href="#">2021</a></li>
        </ul>
        <ul className="calendar__monthes-list">
          <li className="calendar__monthes-item"><a href="#">Январь</a></li>
          <li className="calendar__monthes-item"><a href="#">Февраль</a></li>
          <li className="calendar__monthes-item"><a href="#">Март</a></li>
          <li className="calendar__monthes-item"><a href="#">Апрель</a></li>
          <li className="calendar__monthes-item"><a href="#">Май</a></li>
          <li className="calendar__monthes-item"><a href="#">Июнь</a></li>
          <li className="calendar__monthes-item"><a href="#">Июль</a></li>
          <li className="calendar__monthes-item"><a href="#">Август</a></li>
          <li className="calendar__monthes-item"><a href="#">Сентябрь</a></li>
          <li className="calendar__monthes-item"><a href="#">Октябрь</a></li>
          <li className="calendar__monthes-item"><a href="#">Ноябрь</a></li>
          <li className="calendar__monthes-item"><a href="#">Декабрь</a></li>
        </ul>
      </div>
    </div>
  </section>
  <section className="slider">
    <div className="slider__inner">
      <div className="slider__controls">
        <button className="slider__controls-left disabled">
          <img src="assets/arrow-left.svg" alt=""/>
        </button>
        <button className="slider__controls-right">
          <img src="assets/arrow-right-active.svg" alt=""/>
        </button>
      </div>
      <ul className="slider__list">
        <li className="slider__item" data-pos="0">
          <div className="slider__item-image">
            <img src="assets/news1.jpg" alt=""/>
          </div>
          <div className="slider__item-content">
            <p className="slider__item-date">14:01 19.04.2021</p>
            <h1 className="slider__item-title">Кейптаун в огне: лесной пожар охватил одно из семи чудес природы</h1>
            <p className="slider__item-text">Пожар быстро распространился по лесным склонам знаменитой Столовой горы,
              перекинулся на городские здания и уже подступил к центру.</p>
            <button className="slider__item-button">Подробнее</button>
          </div>
        </li>
        <li className="slider__item" data-pos="-1">
          <div className="slider__item-image">
            <img src="assets/news1.jpg" alt=""/>
          </div>
          <div className="slider__item-content">
            <p className="slider__item-date">14:01 19.04.2021</p>
            <h1 className="slider__item-title">Кейптаун в огне: лесной пожар охватил одно из семи чудес природы</h1>
            <p className="slider__item-text">Пожар быстро распространился по лесным склонам знаменитой Столовой горы,
              перекинулся на городские здания и уже подступил к центру.</p>
            <button className="slider__item-button">Подробнее</button>
          </div>
        </li>
        <li className="slider__item" data-pos="-2">
          <div className="slider__item-image">
            <img src="assets/news1.jpg" alt=""/>
          </div>
          <div className="slider__item-content">
            <p className="slider__item-date">14:01 19.04.2021</p>
            <h1 className="slider__item-title">Кейптаун в огне: лесной пожар охватил одно из семи чудес природы</h1>
            <p className="slider__item-text">Пожар быстро распространился по лесным склонам знаменитой Столовой горы,
              перекинулся на городские здания и уже подступил к центру.</p>
            <button className="slider__item-button">Подробнее</button>
          </div>
        </li>
        <li className="slider__item" data-pos="-3">
          <div className="slider__item-image">
            <img src="assets/news1.jpg" alt=""/>
          </div>
          <div className="slider__item-content">
            <p className="slider__item-date">14:01 19.04.2021</p>
            <h1 className="slider__item-title">Кейптаун в огне: лесной пожар охватил одно из семи чудес природы</h1>
            <p className="slider__item-text">Пожар быстро распространился по лесным склонам знаменитой Столовой горы,
              перекинулся на городские здания и уже подступил к центру.</p>
            <button className="slider__item-button">Подробнее</button>
          </div>
        </li>
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
  <section className="news">
    <div className="container">
      <div className="news__inner">
        <div className="news__slider">
          <ul className="news__slider-list">
            <li className="news__slider-item" data-pos="0">
              <div className="news__slider-item__date">
                <p className="news__slider-item__date-day">4</p>
                <p className="news__slider-item__date-month">Мая</p>
              </div>
              <div className="news__slider-item__container">
                <div className="news__slider-item__box">
                  <p className="news__slider-item__time">17:34</p>
                  <h2 className="news__slider-item__title">МАРТ предлагает исключить несколько видов пластиковой посуды из
                    перечня запрещенных в общепите</h2>
                  <div className="news__slider-item__content">
                    <div className="news__slider-item__image">
                      <img src="assets/vegetables.jpg" alt=""/>
                    </div>
                    <p className="news__slider-item__text">МАРТ предлагает исключить из перечня стаканы объемом 300 мл
                      и более, трубочки (соломинки)
                      для напитков, а также контейнеры, лотки, ланч-боксы, коррексы,
                      банки и бутылки.</p>
                  </div>
                </div>
                <div className="news__slider-item__box">
                  <p className="news__slider-item__time">17:34</p>
                  <h2 className="news__slider-item__title">МАРТ предлагает исключить несколько видов пластиковой посуды из
                    перечня запрещенных в общепите</h2>
                  <div className="news__slider-item__content">
                    <div className="news__slider-item__image">
                      <img src="assets/vegetables.jpg" alt=""/>
                    </div>
                    <p className="news__slider-item__text">МАРТ предлагает исключить из перечня стаканы объемом 300 мл
                      и более, трубочки (соломинки)
                      для напитков, а также контейнеры, лотки, ланч-боксы, коррексы,
                      банки и бутылки.</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="news__slider-item" data-pos="-1">
              <div className="news__slider-item__date">
                <p className="news__slider-item__date-day">4</p>
                <p className="news__slider-item__date-month">Мая</p>
              </div>
              <div className="news__slider-item__container">
                <div className="news__slider-item__box">
                  <p className="news__slider-item__time">17:34</p>
                  <h2 className="news__slider-item__title">МАРТ предлагает исключить несколько видов пластиковой посуды из
                    перечня запрещенных в общепите</h2>
                  <div className="news__slider-item__content">
                    <div className="news__slider-item__image">
                      <img src="assets/vegetables.jpg" alt=""/>
                    </div>
                    <p className="news__slider-item__text">МАРТ предлагает исключить из перечня стаканы объемом 300 мл
                      и более, трубочки (соломинки)
                      для напитков, а также контейнеры, лотки, ланч-боксы, коррексы,
                      банки и бутылки.</p>
                  </div>
                </div>
                <div className="news__slider-item__box">
                  <p className="news__slider-item__time">17:34</p>
                  <h2 className="news__slider-item__title">МАРТ предлагает исключить несколько видов пластиковой посуды из
                    перечня запрещенных в общепите</h2>
                  <div className="news__slider-item__content">
                    <div className="news__slider-item__image">
                      <img src="assets/vegetables.jpg" alt=""/>
                    </div>
                    <p className="news__slider-item__text">МАРТ предлагает исключить из перечня стаканы объемом 300 мл
                      и более, трубочки (соломинки)
                      для напитков, а также контейнеры, лотки, ланч-боксы, коррексы,
                      банки и бутылки.</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="news__slider-item" data-pos="-2">
              <div className="news__slider-item__date">
                <p className="news__slider-item__date-day">4</p>
                <p className="news__slider-item__date-month">Мая</p>
              </div>
              <div className="news__slider-item__container">
                <div className="news__slider-item__box">
                  <p className="news__slider-item__time">17:34</p>
                  <h2 className="news__slider-item__title">МАРТ предлагает исключить несколько видов пластиковой посуды из
                    перечня запрещенных в общепите</h2>
                  <div className="news__slider-item__content">
                    <div className="news__slider-item__image">
                      <img src="assets/vegetables.jpg" alt=""/>
                    </div>
                    <p className="news__slider-item__text">МАРТ предлагает исключить из перечня стаканы объемом 300 мл
                      и более, трубочки (соломинки)
                      для напитков, а также контейнеры, лотки, ланч-боксы, коррексы,
                      банки и бутылки.</p>
                  </div>
                </div>
                <div className="news__slider-item__box">
                  <p className="news__slider-item__time">17:34</p>
                  <h2 className="news__slider-item__title">МАРТ предлагает исключить несколько видов пластиковой посуды из
                    перечня запрещенных в общепите</h2>
                  <div className="news__slider-item__content">
                    <div className="news__slider-item__image">
                      <img src="assets/vegetables.jpg" alt=""/>
                    </div>
                    <p className="news__slider-item__text">МАРТ предлагает исключить из перечня стаканы объемом 300 мл
                      и более, трубочки (соломинки)
                      для напитков, а также контейнеры, лотки, ланч-боксы, коррексы,
                      банки и бутылки.</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="news__slider-item" data-pos="-3">
              <div className="news__slider-item__date">
                <p className="news__slider-item__date-day">4</p>
                <p className="news__slider-item__date-month">Мая</p>
              </div>
              <div className="news__slider-item__container">
                <div className="news__slider-item__box">
                  <p className="news__slider-item__time">17:34</p>
                  <h2 className="news__slider-item__title">МАРТ предлагает исключить несколько видов пластиковой посуды из
                    перечня запрещенных в общепите</h2>
                  <div className="news__slider-item__content">
                    <div className="news__slider-item__image">
                      <img src="assets/vegetables.jpg" alt=""/>
                    </div>
                    <p className="news__slider-item__text">МАРТ предлагает исключить из перечня стаканы объемом 300 мл
                      и более, трубочки (соломинки)
                      для напитков, а также контейнеры, лотки, ланч-боксы, коррексы,
                      банки и бутылки.</p>
                  </div>
                </div>
                <div className="news__slider-item__box">
                  <p className="news__slider-item__time">17:34</p>
                  <h2 className="news__slider-item__title">МАРТ предлагает исключить несколько видов пластиковой посуды из
                    перечня запрещенных в общепите</h2>
                  <div className="news__slider-item__content">
                    <div className="news__slider-item__image">
                      <img src="assets/vegetables.jpg" alt=""/>
                    </div>
                    <p className="news__slider-item__text">МАРТ предлагает исключить из перечня стаканы объемом 300 мл
                      и более, трубочки (соломинки)
                      для напитков, а также контейнеры, лотки, ланч-боксы, коррексы,
                      банки и бутылки.</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="news__slider-item" data-pos="-4">
              <div className="news__slider-item__date">
                <p className="news__slider-item__date-day">4</p>
                <p className="news__slider-item__date-month">Мая</p>
              </div>
              <div className="news__slider-item__container">
                <div className="news__slider-item__box">
                  <p className="news__slider-item__time">17:34</p>
                  <h2 className="news__slider-item__title">МАРТ предлагает исключить несколько видов пластиковой посуды из
                    перечня запрещенных в общепите</h2>
                  <div className="news__slider-item__content">
                    <div className="news__slider-item__image">
                      <img src="assets/vegetables.jpg" alt=""/>
                    </div>
                    <p className="news__slider-item__text">МАРТ предлагает исключить из перечня стаканы объемом 300 мл
                      и более, трубочки (соломинки)
                      для напитков, а также контейнеры, лотки, ланч-боксы, коррексы,
                      банки и бутылки.</p>
                  </div>
                </div>
                <div className="news__slider-item__box">
                  <p className="news__slider-item__time">17:34</p>
                  <h2 className="news__slider-item__title">МАРТ предлагает исключить несколько видов пластиковой посуды из
                    перечня запрещенных в общепите</h2>
                  <div className="news__slider-item__content">
                    <div className="news__slider-item__image">
                      <img src="assets/vegetables.jpg" alt=""/>
                    </div>
                    <p className="news__slider-item__text">МАРТ предлагает исключить из перечня стаканы объемом 300 мл
                      и более, трубочки (соломинки)
                      для напитков, а также контейнеры, лотки, ланч-боксы, коррексы,
                      банки и бутылки.</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="news__slider-item" data-pos="-5">
              <div className="news__slider-item__date">
                <p className="news__slider-item__date-day">4</p>
                <p className="news__slider-item__date-month">Мая</p>
              </div>
              <div className="news__slider-item__container">
                <div className="news__slider-item__box">
                  <p className="news__slider-item__time">17:34</p>
                  <h2 className="news__slider-item__title">МАРТ предлагает исключить несколько видов пластиковой посуды из
                    перечня запрещенных в общепите</h2>
                  <div className="news__slider-item__content">
                    <div className="news__slider-item__image">
                      <img src="assets/vegetables.jpg" alt=""/>
                    </div>
                    <p className="news__slider-item__text">МАРТ предлагает исключить из перечня стаканы объемом 300 мл
                      и более, трубочки (соломинки)
                      для напитков, а также контейнеры, лотки, ланч-боксы, коррексы,
                      банки и бутылки.</p>
                  </div>
                </div>
                <div className="news__slider-item__box">
                  <p className="news__slider-item__time">17:34</p>
                  <h2 className="news__slider-item__title">МАРТ предлагает исключить несколько видов пластиковой посуды из
                    перечня запрещенных в общепите</h2>
                  <div className="news__slider-item__content">
                    <div className="news__slider-item__image">
                      <img src="assets/vegetables.jpg" alt=""/>
                    </div>
                    <p className="news__slider-item__text">МАРТ предлагает исключить из перечня стаканы объемом 300 мл
                      и более, трубочки (соломинки)
                      для напитков, а также контейнеры, лотки, ланч-боксы, коррексы,
                      банки и бутылки.</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="news__slider-item" data-pos="-6">
              <div className="news__slider-item__date">
                <p className="news__slider-item__date-day">4</p>
                <p className="news__slider-item__date-month">Мая</p>
              </div>
              <div className="news__slider-item__container">
                <div className="news__slider-item__box">
                  <p className="news__slider-item__time">17:34</p>
                  <h2 className="news__slider-item__title">МАРТ предлагает исключить несколько видов пластиковой посуды из
                    перечня запрещенных в общепите</h2>
                  <div className="news__slider-item__content">
                    <div className="news__slider-item__image">
                      <img src="assets/vegetables.jpg" alt=""/>
                    </div>
                    <p className="news__slider-item__text">МАРТ предлагает исключить из перечня стаканы объемом 300 мл
                      и более, трубочки (соломинки)
                      для напитков, а также контейнеры, лотки, ланч-боксы, коррексы,
                      банки и бутылки.</p>
                  </div>
                </div>
                <div className="news__slider-item__box">
                  <p className="news__slider-item__time">17:34</p>
                  <h2 className="news__slider-item__title">МАРТ предлагает исключить несколько видов пластиковой посуды из
                    перечня запрещенных в общепите</h2>
                  <div className="news__slider-item__content">
                    <div className="news__slider-item__image">
                      <img src="assets/vegetables.jpg" alt=""/>
                    </div>
                    <p className="news__slider-item__text">МАРТ предлагает исключить из перечня стаканы объемом 300 мл
                      и более, трубочки (соломинки)
                      для напитков, а также контейнеры, лотки, ланч-боксы, коррексы,
                      банки и бутылки.</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="news__slider-item" data-pos="-7">
              <div className="news__slider-item__date">
                <p className="news__slider-item__date-day">4</p>
                <p className="news__slider-item__date-month">Мая</p>
              </div>
              <div className="news__slider-item__container">
                <div className="news__slider-item__box">
                  <p className="news__slider-item__time">17:34</p>
                  <h2 className="news__slider-item__title">МАРТ предлагает исключить несколько видов пластиковой посуды из
                    перечня запрещенных в общепите</h2>
                  <div className="news__slider-item__content">
                    <div className="news__slider-item__image">
                      <img src="assets/vegetables.jpg" alt=""/>
                    </div>
                    <p className="news__slider-item__text">МАРТ предлагает исключить из перечня стаканы объемом 300 мл
                      и более, трубочки (соломинки)
                      для напитков, а также контейнеры, лотки, ланч-боксы, коррексы,
                      банки и бутылки.</p>
                  </div>
                </div>
                <div className="news__slider-item__box">
                  <p className="news__slider-item__time">17:34</p>
                  <h2 className="news__slider-item__title">МАРТ предлагает исключить несколько видов пластиковой посуды из
                    перечня запрещенных в общепите</h2>
                  <div className="news__slider-item__content">
                    <div className="news__slider-item__image">
                      <img src="assets/vegetables.jpg" alt=""/>
                    </div>
                    <p className="news__slider-item__text">МАРТ предлагает исключить из перечня стаканы объемом 300 мл
                      и более, трубочки (соломинки)
                      для напитков, а также контейнеры, лотки, ланч-боксы, коррексы,
                      банки и бутылки.</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className="news__slider-controls">
            <ul className="news__slider-controls__list">
              <button className="news__slider-controls-left disabled">
                <img src="assets/arrow-left.svg" alt=""/>
              </button>
              <li className="news__slider-controls__item active"><a href="#">1</a></li>
              <li className="news__slider-controls__item"><a href="#">2</a></li>
              <li className="news__slider-controls__item"><a href="#">3</a></li>
              <li className="news__slider-controls__item"><a href="#">4</a></li>
              <button className="news__slider-controls-right">
                <img src="assets/arrow-right-active.svg" alt=""/>
              </button>
            </ul>
          </div>
        </div>
        <div className="news__top">
          <h2 className="news__top-title">Топ-новости</h2>
          <ul className="news__top-list">
            <li className="news__top-item"><a href="#">МАРТ предлагает исключить несколько видов пластиковой посуды из
                перечня запрещенных в общепите</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
    </>
  );
}

export default News;
