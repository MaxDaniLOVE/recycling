import React from 'react';

const Footer = ({
  openSignupModal,
  isLoggedIn,
  onLogout,
}) => (
    <footer className="footer">
    <div className="footer__inner">
      <div className="footer__logo">
        <img src="assets/footer-logo.svg" alt="" />
        <p className="footer__logo-text">По любым вопросам вы можете
          связаться с нами по почте:</p>
        <a href="Zerowasteminsk@gmail.com" className="footer__logo-link">Zerowasteminsk@gmail.com</a>
      </div>
      <nav className="footer__nav">
        <ul className="footer__nav-list">
          <li className="footer__nav-item">
            <a href="/" className="footer__nav-item__main">Мотивация</a>
            <a href="/news" className="footer__nav-item__link">О проблеме</a>
            <a href="/action" className="footer__nav-item__link">Польза переработки</a>
          </li>
          <li className="footer__nav-item">
            <a href="/action" className="footer__nav-item__main">Начать действовать</a>
            <a href="/action" className="footer__nav-item__link">Как сортировать отходы</a>
            <a href="/news" className="footer__nav-item__link">Как производить меньше отходов</a>
          </li>
          <li className="footer__nav-item">
            <a href="/news" className="footer__nav-item__main">Новости</a>
          </li>
          <li className="footer__nav-item">
            <a href="/shops" className="footer__nav-item__main">Магазины</a>
          </li>
        </ul>
      </nav>
      {
        isLoggedIn ? (
            <div className="footer__buttons">
              <p onClick={onLogout} className="footer__buttons-item">Выйти</p>
            </div>
        ) : (
            <div className="footer__buttons">
              <p onClick={openSignupModal} className="footer__buttons-item">Войти</p>
              <p onClick={openSignupModal} className="footer__buttons-item">Зарегистрироваться</p>
            </div>
        )
      }
    </div>
  </footer>
  );

export default Footer;
