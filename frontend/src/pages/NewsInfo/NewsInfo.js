import React from 'react';
import './newsInfo.css';
import { useParams } from 'react-router-dom';
import CommentsBlock from '../../components/CommentsBlock';

const NewsInfo = ({ news = [], isLoggedIn }) => {
    const { newsId } = useParams();
    const newsItem = news.find(({ id }) => id === newsId);
    if (!newsItem) return (
        <h3>Новость не найдена</h3>
    )
    return (
        <div className="container__actions plog">
            <div className="plogimg">
                <img src={newsItem.images[0]} style={{ width:'100%', borderRadius: '10px' }} alt='test'/>
            </div>
            <div className="plogtext" style={{
                fontFamily: "'Roboto', light",
                backgroundColor: 'whitesmoke',
                borderRadius: '10px',
                fontSize: '1,5vw',
                lineHeight: 'normal',
                padding: '20px',
                margin: '10px',
                marginRight: '30px',
                width: '100%',
                textAlign: 'center',
                float: 'left',
            }}>
                {newsItem.description}
            </div>
            <CommentsBlock {...newsItem} isLoggedIn={isLoggedIn}/>
        </div>
    );
};

export default NewsInfo;
