const express = require('express');
const firebase = require('../firebase')
const router = express.Router();
const authMiddleware = require('../middlewares/auth-middleware');

const db = firebase.firestore();

const convertDate = (date) => (`${
    date.getHours().toString().padStart(2, '0')}:${
    date.getMinutes().toString().padStart(2, '0')} ${
    (date.getMonth()+1).toString().padStart(2, '0')}.${
    date.getDate().toString().padStart(2, '0')}.${
    date.getFullYear().toString().padStart(4, '0')}`);

router.get('/', async (req, res) => {
    const snapshot = await db.collection('news').get();
    const news = snapshot.docs.map((doc) => {
        const { createdAt: timestamp, ...data } = doc.data() || {};
        const { id } = doc;
        const createdAt = convertDate(new Date(timestamp.toDate()));
        return { id, createdAt, ...data }
    });
    return res.send({ news });
})

router.use('/', authMiddleware);

router.put('/:newsId/comment', async (req, res) => {
    const { newsId } = req.params;
    const { userId, email } = req.loggedUserData;
    const { comment } = req.body;
    const snapshot = await db.collection('news').doc(newsId).get();
    const { comments } = snapshot.data();
    const updatedComments = [ ...comments, { comment, userId, email } ]
    await db.collection('news')
        .doc(newsId)
        .set({ comments: updatedComments }, { merge: true });
    return res.send({ comments: updatedComments });
})

router.put('/:newsId/like', async (req, res) => {
    const { newsId } = req.params;
    const { userId } = req.loggedUserData;
    const snapshot = await db.collection('news').doc(newsId).get();
    const { liked } = snapshot.data();
    const updatedLikes = new Set([ ...liked, userId ]);
    await db.collection('news')
        .doc(newsId)
        .set({ liked: [...updatedLikes] }, { merge: true });
    return res.send({ liked: [...updatedLikes] });
})

router.delete('/:newsId/like', async (req, res) => {
    const { newsId } = req.params;
    const { userId } = req.loggedUserData;
    const snapshot = await db.collection('news').doc(newsId).get();
    const { liked } = snapshot.data();
    const likedSet = new Set(liked);
    likedSet.delete(userId);
    await db.collection('news')
        .doc(newsId)
        .set({ liked: [...likedSet] }, { merge: true });
    return res.send({ liked: [...likedSet] });
})

module.exports = router;