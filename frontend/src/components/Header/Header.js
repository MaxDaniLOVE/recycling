import React from 'react';

const urls = [
  { url: '/', label: 'Мотивация' },
  { url: '/action', label: 'Начать действовать' },
  { url: '/news', label: 'Новости' },
  { url: '/shops', label: 'Магазины' },
]

const Header = () => {
  const { pathname } = window.location;
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">
            <img src="assets/logo.svg" alt="" />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {
                urls.map(({ url, label }) => (
                  <li key={url} className={`header__nav-item ${pathname === url ? 'active' : ''} `}>
                    <a href={url}>{label}</a>
                  </li>
                ))
              }
            </ul>
          </nav>
          <button className="header__button">Вход</button>
      </div>
    </div>
  </header>
  );
}

export default Header;
