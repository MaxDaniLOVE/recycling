import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { urlBase } from '../../constants';
import './recyclingActions.css';

const RecyclingActions = ({ isLoggedIn }) => {
    const [ recyclingTopics, setRecyclingTopics ] = useState([]);
    const [ selectedId, setSelectedId ] = useState('');
    const [ topicKeyword, setTopicKeyword ] = useState('');
    const [ topicText, setTopicText ] = useState('');
    const [ isDisplayMessage, setIsDisplayMessage ] = useState(false);
    useEffect(() => {
        (async () => {
           try {
               const { data: { topics = [] } } = await axios.get(`${urlBase}/topic`);
               setRecyclingTopics(topics);
           } catch (e) {
               setRecyclingTopics([]);
           }
        })()
    }, []);
    const selectedItem = recyclingTopics.find(({ id }) => id === selectedId)

    const submitTopic = async (e) => {
        e.preventDefault();
        if (!topicKeyword || !topicText) return;
        try {
            const { data: { topics = [] } } = await axios.post(`${urlBase}/topic/create`, {
                keyword: topicKeyword,
                text: topicText
            });
            setRecyclingTopics(topics);
            setIsDisplayMessage(true);
        } catch (e) {
            setRecyclingTopics([]);
        }
    }

    return (
        <div className='recycling__topics'>
            <div className='recycling__topics_available'>
                <h3 className='recycling__topic_title'>Доступные статьи</h3>
                <select id='keywords' value={selectedId} onChange={({target: { value }}) => setSelectedId(value)}>
                    <option value=''>Не выбрано</option>
                    {
                        recyclingTopics.map((({ id, keyword }) => (
                                <option key={id} value={id}>{keyword}</option>
                            )
                        ))
                    }
                </select>
                {
                    selectedItem && Object.keys(selectedItem).length && (
                        <div className='topic__wrapper'>
                            <div className='topic__keyword'>Статья: "{selectedItem.keyword}"</div>
                            <div className='topic__text'>{selectedItem.text}</div>
                        </div>
                    )
                }
            </div>
            <div className='recycling__form_wrapper'>
                {
                    isLoggedIn ? (
                        isDisplayMessage ? <h3 className='recycling__topic_title'>Ваша статья была отправлена на модерацию!</h3> : (
                            <div>
                                <h3 className='recycling__topic_title'>Добавить свою статью</h3>
                                <form className='recycling__form' id='sendTopic' onSubmit={submitTopic}>
                                    <label htmlFor='keyword'>
                                        Название:
                                        <input id='keyword' value={topicKeyword} onChange={({target: { value }}) => setTopicKeyword(value)}/>
                                    </label>
                                    <label htmlFor='text'>
                                        Статья:
                                        <textarea id='text' value={topicText} onChange={({target: { value }}) => setTopicText(value)} />
                                    </label>
                                    <button type='submit'>Отправить на модерацию</button>
                                </form>
                            </div>
                        )
                    ) : (
                        <div>
                            <h3 className='recycling__topic_title'>Войдите в учетную запись, чтобы отправить свою статью</h3>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default RecyclingActions;
