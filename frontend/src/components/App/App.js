import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Main from '../../pages/Main';
import Shops from '../../pages/Shops';
import News from '../../pages/News';
import Action from '../../pages/Action';
import { auth } from '../../firebase';
import axios from 'axios'
import { urlBase } from '../../constants'
import Header from '../Header';
import Footer from '../Footer';
import NewsInfo from '../../pages/NewsInfo';
import RegisterModal from '../RegisterModal';

export default function App() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ isRegisterMode, setIsRegisterMode ] = useState(false);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const [ isOpenSignUpModal, setIsOpenSignUpModal ] = useState(false)
    async function onSubmit(e) {
        e.preventDefault();
        try {
            if (isRegisterMode) {
                await auth.createUserWithEmailAndPassword(email, password);
            } else {
                await auth.signInWithEmailAndPassword(email, password);
            }
            const token = await auth.currentUser.getIdToken();
            const { uid: userId, email: userEmail } = auth.currentUser;
            if (token && userId && userEmail) {
                localStorage.setItem('authToken', token);
                localStorage.setItem('userId', userId);
                localStorage.setItem('userEmail', userEmail);
                setIsLoggedIn(true)
            }
            setIsOpenSignUpModal(false);
        } catch (e) {
            console.log(e)
        }
    }
    const onChangeEmail = ({ target: { value } }) => setEmail(value);
    const onChangePassword = ({ target: { value } }) => setPassword(value);
    const onChangeRegisterMode = ({ target: { checked } }) => setIsRegisterMode(checked);
    const [ news, setNews ] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        (async () => {
            const { data: { news = [] } } = await axios.get(`${urlBase}/news`)
            setNews(news)
        })()
        if (!token) return;
        setIsLoggedIn(true)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }, [ isLoggedIn ])
    const onLogout = async () => {
        await auth.signOut();
        axios.defaults.headers.common['Authorization'] = null;
        localStorage.removeItem('authToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('userEmail');
        setIsLoggedIn(false)
    }
    return (
        <div>
            <Header
                openSignupModal={() => setIsOpenSignUpModal(true)}
                onLogout={onLogout}
                isLoggedIn={isLoggedIn}
            />
            <RegisterModal
                isOpenSignUpModal={isOpenSignUpModal}
                isRegisterMode={isRegisterMode}
                onSubmit={onSubmit}
                onChangeEmail={onChangeEmail}
                onChangePassword={onChangePassword}
                onChangeRegisterMode={onChangeRegisterMode}
                email={email}
                password={password}
                closeModal={() => setIsOpenSignUpModal(false)}
            />
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'}>
                        <Main />
                    </Route>
                    <Route path={'/shops'}>
                        <Shops />
                    </Route>
                    <Route exact path={'/news'}>
                        <News />
                    </Route>
                    <Route path={'/action'}>
                        <Action isLoggedIn={isLoggedIn}/>
                    </Route>
                    <Route path={'/news/:newsId'}>
                        <NewsInfo news={news} />
                    </Route>
                    <Redirect to={'/'}/>
                </Switch>
            </BrowserRouter>
            <Footer
                openSignupModal={() => setIsOpenSignUpModal(true)}
                isLoggedIn={isLoggedIn}
                onLogout={onLogout}
            />
        </div>
    );
}
