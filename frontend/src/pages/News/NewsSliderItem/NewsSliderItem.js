import React from 'react';

const NewsSliderItem = ({ sliderItem, index }) => {
    return (
        <li className="slider__item" data-pos={-index}>
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
