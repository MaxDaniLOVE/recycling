import React from 'react';

const NewsSliderItem = ({ activeSlide, sliderItem, index }) => {
    const isSelected = activeSlide === index;
    const diff = activeSlide - index;
    const translateX = isSelected ? 0 : diff * 150;
    const transform = `translate(-50%, -50%) translateX(${translateX}%)`;
    return (
        <li className="slider__item" style={{ transform }}>
            <div className="slider__item-image">
                <img src={sliderItem.images[0]} alt=""/>
            </div>
            <div className="slider__item-content">
                <p className="slider__item-date">{sliderItem.createdAt}</p>
                <h1 className="slider__item-title">{sliderItem.title}</h1>
                <p className="slider__item-text">{sliderItem.description}</p>
                <a href={`/news/${sliderItem.id}`} className="slider__item-button">Подробнее</a>
            </div>
        </li>
    );
};

export default NewsSliderItem;
