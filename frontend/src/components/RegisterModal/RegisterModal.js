import React from 'react';
import './registerModal.css';

const RegisterModal = ({
    isOpenSignUpModal,
    isRegisterMode,
    onSubmit,
    onChangeEmail,
    onChangePassword,
    onChangeRegisterMode,
    email,
    password,
    closeModal,
}) => {
    return (
        <div
            id="modal-container"
            className={isOpenSignUpModal ? 'open' : 'out'}
            onClick={({ target: { id, className } }) => {
                if (id === 'modal-container' || className === 'modal-background')
                closeModal()
            }}
        >
            <div className="modal-background">
                <div className="modal">
                    <div className='content'>
                        <button onClick={closeModal} className='close__button'>
                            X
                        </button>
                        <form onSubmit={onSubmit}>
                            <label htmlFor='email'>
                                Email:
                                <input type='email' id='email' value={email} onChange={onChangeEmail}/>
                            </label>
                            <label htmlFor='password'>
                                Пароль:
                                <input type='password' id='password' value={password} onChange={onChangePassword}/>
                            </label>
                            <label htmlFor='isRegisterMode' className='register__mode'>
                                Режим регистрации:
                                <input type='checkbox' id='isRegisterMode' value={isRegisterMode} onChange={onChangeRegisterMode}/>
                            </label>
                            <button type='submit' className='login-button'>
                                {isRegisterMode ? 'Register' : 'Login'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterModal;
