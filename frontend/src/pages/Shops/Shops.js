import React from 'react';
import './shop.css';

const Shops = () => {
  return (
    <>
      <section className="main">
        <div className="container">
          <div className="main__inner">
            <h1 className="main__title">Эко-магазины в Минске</h1>
            <p className="main__text">Мы посталарись собрать в одном месте все магазины, которые необходимы современному
              человеку, который следит за своим здоровьем. От бакалеи с европейскими крупами до тертого баобаба с бурбонской
              ванилью !</p>
          </div>
        </div>
      </section>
      <section className="map">
        <div className="map__inner" style={{position:'relative', overflow:'hidden'}}>
          <a
            href="https://yandex.by/maps/157/minsk/?utm_medium=mapframe&utm_source=maps"
            style={{color:'#eee', fontSize:'12px', position:'absolute', top:'0px'}}>
              Минск
          </a>
          <a
            href="https://yandex.by/maps/157/minsk/?ll=27.561481%2C53.902496&utm_medium=mapframe&utm_source=maps&z=12"
            style={{color:'#eee', fontSize:'12px', position:'absolute', top:'14px'}}>
              Яндекс.Карты — транспорт, навигация, поиск мест
          </a>
            <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab9784a7e416f0f4bd713e256589d96fe0ff16c9a10bfe106ee4599721dbcc0b2&amp;source=constructor"
                width="500"
                height="400"
                frameBorder="0"
            />
        </div>
      </section>
    </>
  );
}

export default Shops;
