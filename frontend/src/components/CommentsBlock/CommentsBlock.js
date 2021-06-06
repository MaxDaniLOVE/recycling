import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { urlBase } from '../../constants';
import './commentsBlock.css';

const CommentsBlock = ({ comments, liked, id, isLoggedIn }) => {
    const [ comment, setComment ] = useState('');
    const [ availableComments, setAvailableComments ] = useState([]);
    const [ likedBy, setLikedBy ] = useState([]);
    const userId = localStorage.getItem('userId');
    const isLikedByUser = likedBy.includes(userId);
    useEffect(() => {
        setAvailableComments(comments);
        setLikedBy(liked)
    }, [ comments, liked ]);
    const onPostComment = async () => {
        const token = localStorage.getItem('authToken');
        if (!token) return;
        try {
            const { data: { comments = [] } } = await axios.put(`${urlBase}/news/${id}/comment`, { comment });
            setAvailableComments(comments);
            setComment('')
        } catch (e) {
            console.log(e)
        }
    }
    const onLike = async () => {
        const token = localStorage.getItem('authToken');
        if (!token) return;
        try {
            const { data: { liked = [] } } = await axios.put(`${urlBase}/news/${id}/like`)
            setLikedBy(liked)
        } catch (e) {
            console.log(e)
        }
    }
    const onDislike= async () => {
        const token = localStorage.getItem('authToken');
        if (!token) return;
        try {
            const { data: { liked = [] } } = await axios.delete(`${urlBase}/news/${id}/like`)
            setLikedBy(liked)
        } catch (e) {
            console.log(e)
        }
    }
    const onChangeComment = ({ target: { value } }) => setComment(value);
    return (
        <div className='comments__container'>
            <div className='comments__container_list'>
                <h3 className='comments__container_title'>Комментарии:</h3>
                <div className='comments__list'>
                    {
                        availableComments.length ? availableComments.map(({ comment, email }, idx) => (
                            <p key={idx}>{comment}; Отправил: {email}</p>
                        )) : (
                            <p>Будьте первым кто оставит комментарий!</p>
                        )
                    }
                </div>

                <span>{likedBy.length ? `Уже лайкнуло: ${likedBy.length} человек` : 'Пока никто не лайкнул эту запись'}</span>
                {
                    isLoggedIn && (
                        <button onClick={isLikedByUser ? onDislike : onLike}>{isLikedByUser ? 'Убрать мой лайк' : 'Мне нравится!'}</button>
                    )
                }
            </div>
            {
                isLoggedIn ? (
                    <div className='comments__container_form'>
                        <label htmlFor='comment'>
                            <h3 className='comments__container_title'>Ваш комментарий:</h3>
                            <textarea id='comment' onChange={onChangeComment} value={comment} />
                        </label>
                        <button onClick={onPostComment}>Добавить комментарий</button>
                    </div>
                ) : (
                    <div className='comments__container_form'>
                        <h3 className='comments__container_title'>Войдите в свою учетную запись, чтобы оставлять комментарии</h3>
                    </div>
                )
            }
        </div>
    )
}

export default CommentsBlock;