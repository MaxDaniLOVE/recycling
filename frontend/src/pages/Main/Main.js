import React, { useState } from 'react';

const sliderStyles = {
  1: [{ transform: 'translateX(0)' }, { transform: 'translateX(0)' }, { transform: 'translateX(0)' }],
  2: [{ transform: 'translateX(0)' }, { transform: 'translateX(-280px)' }, { transform: 'translateX(0)' }],
  3: [{ transform: 'translateX(0)' }, { transform: 'translateX(-280px)' }, { transform: 'translateX(-280px)' }],
}

const Main = () => {
  const [ activeAction, setActiveAction ] = useState(1);
  const [ activeImage, setActiveImage ] = useState('assets/action1.jpg');
  const onClick = ({ currentTarget: { dataset: { pos } } }) => {
    setActiveAction(+pos);
    setActiveImage(`/assets/action${+pos}.jpg`)
  };
  const [ activeSlider, setActiveSlider ] = useState(1);
  const onClickSlider = ({ currentTarget: { dataset: { pos } } }) => setActiveSlider(+pos);
  const activeSliderStyles = sliderStyles[activeSlider];
  return (
    <>
        <section className="intro">
    <div className="container">
      <div className="intro__inner_main">
        <div className="intro__dots">
          <ul className="intro__dots-list">
            <li className="intro__dots-item active"><a href="#"></a></li>
            <li className="intro__dots-item"><a href="#"></a></li>
            <li className="intro__dots-item"><a href="#"></a></li>
            <li className="intro__dots-item"><a href="#"></a></li>
          </ul>
        </div>
        <div className="intro__content_main">
          <div className="intro__logo_main">
            <img src="/assets/logo-large.svg" alt="" />
          </div>
          <h2 className="intro__title_main">Каждый вносит вклад в проблему мусора!</h2>
          <p className="intro__text_main">И размеры этого вклада достаточно большие,
            чтобы задуматься об изменениях.</p>
          <a href='/action' className="intro__button">Хочу действовать!</a>
          <div className="intro__slider">
            <div className="intro__slider-item" data-pos="1" onClick={onClickSlider} style={activeSliderStyles[0]}>
              <div className="intro__slider-item__logo">
                <img src="/assets/car.svg" alt="" />
              </div>
              <div
                  className={`intro__slider-item__content ${activeSlider !== 1 && 'hidden'}`}

              >
                <h3 className="intro__slider-item__number">90%</h3>
                <p className="intro__slider-item__text"><span>отходов</span> отправляются на свалки,
                  где они будут <span>разлагаться сотни лет,</span>
                  выделяя токсичные вещества.</p>
              </div>
            </div>
            <div className="intro__slider-item" data-pos="2" onClick={onClickSlider}  style={activeSliderStyles[1]}>
              <div className="intro__slider-item__logo">
                <img src="/assets/bull.svg" alt="" />
              </div>
              <div
                  className={`intro__slider-item__content ${activeSlider !== 2 && 'hidden'}`}

              >
                <h3 className="intro__slider-item__number">500 кг</h3>
                <p className="intro__slider-item__text">отходов производит
                  <span>1 человек за 1 год жизни.</span>
                  Это равно весу 1 коровы.
                </p>
              </div>
            </div>
            <div className="intro__slider-item " data-pos="3" onClick={onClickSlider} style={activeSliderStyles[2]}>
              <div className="intro__slider-item__logo">
                <img src="/assets/fish.svg" alt="" />
              </div>
              <div
                  className={`intro__slider-item__content ${activeSlider !== 3 && 'hidden'}`}

              >
                <h3 className="intro__slider-item__number">35 тонн</h3>
                <p className="intro__slider-item__text">отходов производит
                  <span>1 человек за 70 лет жизни.</span>
                  Это равно весу серого кита.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="about">
    <div className="about__image">
      <img src={activeImage} alt="" />
    </div>
    <div className="about__menu">
      <div className={`about__menu-item ${activeAction === 1 && 'active'}`} onClick={onClick} data-pos="1">
        <h3 className="about__menu-item__title">Мы используем огромные
          территории под свалки</h3>
        <p className="about__menu-item__text">2,12 миллиарда тонн – столько мусора
          ежегодно производит человечество.
          Эта гора весит намного больше общей
          массы всех жителей Земли — 287 млн тонн.</p>
      </div>
      <div className={`about__menu-item ${activeAction === 2 && 'active'}`} onClick={onClick}  data-pos="2">
        <h3 className="about__menu-item__title">Мусор отравляет природу и человека</h3>
        <p className="about__menu-item__text">Мусор долго разлагается, производит
          токсины, портит природу и ее ресурсы, которыми мы пользуемся: воздух, воду, еду.</p>
      </div>
      <div className={`about__menu-item ${activeAction === 3 && 'active'}`} onClick={onClick}  data-pos="3">
        <h3 className="about__menu-item__title">Мусор сжигают, а это опасно и неэкономично</h3>
        <p className="about__menu-item__text">При сжигании мусора образуются токсичные вещества – тяжелые металлы, диоксины,
          которые имеют свойство накапливаться
          в воде, почве, в телах животных и человека.
          Они вызывают серьёзные заболевания.</p>
      </div>
    </div>
  </section>
  <section className="recycling">
    <div className="container">
      <div className="recycling__inner">
        <h2 className="recycling__title">Самый безопасный способ обращения с отходами –
          раздельный сбор и переработка</h2>
        <p className="recycling__text">Повторной переработке поддаётся
          80–90% содержимого нашего мусорного ведра.</p>
        <a href='/action' className="recycling__button action-btn">Хочу действовать!</a>
        <h3 className="recycling__subtitle">Сколько полезных вещей
          можно изготовить из переработанных отходов?</h3>
        <div className="recycling__box">
          <div className="recycling__box-left">
            <div className="recycling__box-item">
              <div className="recycling__box-item__logo">
                <img src="/assets/bicycle.png" alt=""/>
              </div>
              <p className="recycling__box-item__text">
                <span>Из 700 алюминиевых
                  банок</span> можно
                изготовить
                <span>велосипед</span>
              </p>
            </div>
            <div className="recycling__box-item">
              <div className="recycling__box-item__logo">
                <img src="/assets/chair.png" alt="" />
              </div>
              <p className="recycling__box-item__text">
                <span>Из 110 пластиковых
                  бутылок</span> можно
                изготовить
                <span>пластиковый стул</span>
              </p>
            </div>
            <div className="recycling__box-item">
              <div className="recycling__box-item__logo">
                <img src="/assets/jacket.png" alt="" />
              </div>
              <p className="recycling__box-item__text">
                <span>Из 25 пластиковых
                  бутылок</span> можно
                изготовить
                <span>флисовую куртку</span>
              </p>
            </div>
          </div>
          <div className="recycling__box-right">
            <div className="recycling__box-item">
              <div className="recycling__box-item__logo">
                <img src="/assets/shirt.png" alt="" />
              </div>
              <p className="recycling__box-item__text">
                Из <span>7 литровых
                  пластиковых бутылок</span>
                можно изготовить
                <span>футболку</span>
              </p>
            </div>
            <div className="recycling__box-item">
              <div className="recycling__box-item__logo">
                <img src="/assets/paper.png" alt="" />
              </div>
              <p className="recycling__box-item__text">
                Из <span>1 кг газет</span>
                можно изготовить
                <span>10 рулонов
                  туалетной бумаги</span>
              </p>
            </div>
            <div className="recycling__box-item">
              <div className="recycling__box-item__logo">
                <img src="/assets/carpet.png" alt="" />
              </div>
              <p className="recycling__box-item__text">
                Из <span>1200 пластиковых
                  бутылок</span> можно сделать
                <span>ковровое покрытие</span>
                для комнаты среднего
                азмера
              </p>
            </div>
          </div>
        </div>
        <h3 className="recycling__subtitle lower">Кроме этого, переработка
          позволяет сэкономить ресурсы</h3>
        <p className="recycling__text lower">Ведь производство еще одной банки, которая улетит в мусор, тоже имеет затраты!
        </p>
        <div className="recycling__resources">
          <div className="recycling__resources-item">
            <div className="recycling__resources-item__logo">
              <img src="/assets/tree.png" alt="" />
            </div>
            <h4 className="recycling__resources-item__title">10 деревьев</h4>
            <p className="recycling__resources-item__text">Может спасти
              <span>1 тонна</span> собранной
              <span>макулатуры</span>.
            </p>
          </div>
          <div className="recycling__resources-item">
            <div className="recycling__resources-item__logo">
              <img src="/assets/bottles3.png" alt="" />
            </div>
            <h4 className="recycling__resources-item__title">20 литров воды</h4>
            <p className="recycling__resources-item__text">Будет сэкономлено
              благодаря переработке
              <span>1 кг макулатуры</span>.
            </p>
          </div>
          <div className="recycling__resources-item">
            <div className="recycling__resources-item__logo">
              <img src="/assets/tv.png" alt="" />
            </div>
            <h4 className="recycling__resources-item__title">3 часа работы
              телевизора</h4>
            <p className="recycling__resources-item__text">Может обеспечить энергия,
              сэкономленная благодаря
              переработке <span>1 алюминиевой
                банки</span>.
            </p>
          </div>
          <div className="recycling__resources-item">
            <div className="recycling__resources-item__logo">
              <img src="/assets/tea.png" alt="" />
            </div>
            <h4 className="recycling__resources-item__title">5 чашек чая</h4>
            <p className="recycling__resources-item__text">Можно вскипятить,
              сэкономив энергию
              на переработке
              <span>2 стеклянных
                бутылок</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="power">
    <div className="power__content">
      <div className="power__content-box">
        <p className="power__text">В наших силах сделать
          мир экологичнее и
          сохранить его красоту
          ля будущих поколений!</p>
        <a href='/action' className="power__button action-btn">Хочу действовать!</a>
      </div>
    </div>
    <div className="power__image">
      <img src="/assets/kids.jpg" alt="" />
    </div>
  </section>
  <section className="symbol" style={{ backgroundImage: `url('./assets/hands.jpg')` }} />
    </>
  );
}

export default Main;
