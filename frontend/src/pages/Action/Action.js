import React, { useState } from 'react';
import './action.css';

function Action(props) {
  const [ activeAction, setActiveAction ] = useState(1);
  const [ activeImage, setActiveImage ] = useState('assets/action1.jpg');
  const onClick = ({ currentTarget: { dataset: { pos } } }) => {
    setActiveAction(+pos);
    setActiveImage(`/assets/action${+pos}.jpg`)
  };
  return (
    <>
      <section className="intro__actions">
    <div className="container__actions">
      <div className="intro__inner">
        <h1 className="intro__title">Пора действовать!</h1>
        <p className="intro__subtitle">Мы собрали конкретные рекомендации и шаги,
          которые может делать каждый активный человек, чтобы
          уже сегодня внести вклад в решение мусорной проблемы.</p>
        <p className="intro__text">Вы можете начать собирать раздельно один или несколько видов отходов (фракций) у себя
          дома или в офисе и сдавать их во вторичную переработку. Многие начинают с бумаги и потом добавляют другие
          фракции: пластик, стекло и т.д.</p>
        <div className="intro__content">
          <div className="intro__content-item">
            <div className="intro__content-item__logo">
              <img src="assets/house.svg" alt="" />
            </div>
            <p className="intro__content-item__text">Найдите ближайший
              пункт приема вторсырья.</p>
          </div>
          <div className="intro__content-item">
            <div className="intro__content-item__logo">
              <img src="assets/plastic.svg" alt="" />
            </div>
            <p className="intro__content-item__text">Определите, какие виды
              сырья принимает этот пункт и изучите информацию о других пунктах — возможно, они принимают больший спектр
              отходов.</p>
          </div>
          <div className="intro__content-item">
            <div className="intro__content-item__logo">
              <img src="assets/urns2.svg" alt="" />
            </div>
            <p className="intro__content-item__text">Организуйте раздельный
              сбор отходов дома.</p>
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
      <div className={`about__menu-item ${activeAction === 1 && 'active'}`} data-pos="1" onClick={onClick}>
        <p className="about__menu-item__text">По возможности <span>максимально откажитесь от пластика и пластиковых
            пакетов.</span> Например, не покупайте маленькие бутылки воды — вместо этого обзаведитесь многоразовой
          бутылкой из металла, стекла или пластика с маркировкой 5 (PP), которую можно пополнять.
        </p>
      </div>
      <div className={`about__menu-item ${activeAction === 2 && 'active'}`} data-pos="2" onClick={onClick}>
        <p className="about__menu-item__text">Постарайтесь выбирать <span>стекло вместо пластика</span>, например, при
          покупке молочных товаров или для хранения продуктов дома и в офисе.</p>
      </div>
      <div className={`about__menu-item ${activeAction === 3 && 'active'}`} data-pos="3" onClick={onClick}>
        <p className="about__menu-item__text">Вместо больших пластиковых пакетов можно <span>завести долговечную тканевую
            сумку</span>, а вместо фасовочных пакетиков – сшить или купить прозрачные <span>тканевые мешочки</span> или
          найти другую оригинальную альтернативу.</p>
      </div>
    </div>
  </section>
  <section className="rules">
    <div className="container__actions">
      <div className="rules__inner">
        <h2 className="rules__title">НИ В КОЕМ СЛУЧАЕ нельзя выбарсывать в общий мусор:</h2>
        <div className="rules__content">
          <div className="rules__item">
            <p className="rules__item-text"><span>Батарейки, энергосберегающие лампы, градусники, картриджи, устаревшую или
                сломанную технику, автомобильные аккумуляторы, шины</span> — их нужно отвозить в специальные пункты
              приёма опасных отходов.</p>
          </div>
          <div className="rules__item">
            <p className="rules__item-text"><span>Краски,</span> которые Вы хотели бы утилизировать, делятся на:</p>
            <ul className="rules__item-list">
              <li>
                <p>Засохшие остатки материалов Их можно выбросить как обычный бытовой мусор или строительные отходы.</p>
              </li>
              <li>
                <p>Жидкие / незасохшие остатки материалов Их можно сдать в пункт сбора вторичного сырья или передвижной
                  пункт сбора вредных отходов.</p>
              </li>
              <li>
                <p>Если сдать краски во вторсырье невозможно, то откройте крышку емкости с краской и дайте ей высохнуть
                  вдали от маленьких детей. Добавив в материал небольшое количество гипса или цемента, Вы ускорите
                  засыхание.</p>
              </li>
            </ul>
          </div>
          <div className="rules__item">
            <p className="rules__item-text">Специальные контейнеры для сбора ненужных лекарств и просроченных лекарств от
              населения установлены в 16 минских медучреждениях:</p>
            <ul className="rules__item-list marked">
              <li>
                <p>1-я центральная районная клиническая поликлиника (Сухая, 6)</p>
              </li>
              <li>
                <p>3-я центральная районная клиническая поликлиника (Воронянского, 13/2)</p>
              </li>
              <li>
                <p>8-поликлиника (Никифорова, 3)</p>
              </li>
              <li>
                <p>9-я поликлиника (Щербакова, 1)</p>
              </li>
              <li>
                <p>
                  13-я поликлиника (Ломоносова, 3)
                </p>
              </li>
              <li>
                <p>
                  15-я поликлиника (Р. Люксембург, 112)
                </p>
              </li>
              <li>
                <p>
                  17-я городская клиническая поликлиника (Герасименко, 49)
                </p>
              </li>
              <li>
                <p>
                  19-я центральная районная поликлиника
                  Первомайского района (пр-т Независимости, 119)
                </p>
              </li>
              <li>
                <p>
                  22-я поликлиника (Ташкентская, 5)
                </p>
              </li>
              <li>
                <p>
                  23-я поликлиника (пр-т
                  Рокоссовского, 134)
                </p>
              </li>
              <li>
                <p>
                  30-я поликлиника (Кольцова, 53/2)
                </p>
              </li>
              <li>
                <p>
                  31-я поликлиника (Бурдейного, 4)
                </p>
              </li>
              <li>
                <p>
                  33-я студенческая
                  поликлиника (Сурганова, 45/4)
                </p>
              </li>
              <li>
                <p>
                  34-я поликлиника (Кульман, 22)
                </p>
              </li>
              <li>
                <p>
                  37-я поликлиника (Я. Лучины, 28)
                </p>
              </li>
              <li>
                <p>
                  40-я
                  поликлиника (Люцинская, 3)
                </p>
              </li>
            </ul>
          </div>
        </div>
        <h3 className="rules__subtitle">Если вы будете тщательно сортировать отходы, то поймёте, что в обычный мусорный
          контейнер попадают в основном пищевые отходы.</h3>
        <h3 className="rules__subtitle">Пищевые отходы, собранные раздельно, – ценный вторичный ресурс, который можно
          компостировать.</h3>
        <h2 className="rules__title">Как организовать раздельный сбор отходов дома</h2>
        <p className="rules__text">
          <span>Хорошая новость! Вам не нужны 10 ведер!
            Достаточно разделять отходы на 3 части – на какие именно, вы узнаете ниже.</span>
          <span>Самое важное в процессе раздельного сбора отходов – не допустить смешивания перерабатываемых и не
            перерабатываемых отходов.</span>
        </p>
        <div className="rules__content">
          <div className="rules__item">
            <p className="rules__item-text">Поставьте дома отдельную ёмкость
              (ведро, специальный ящик или пакет) для сбора
              перерабатываемых отходов.</p>
          </div>
          <div className="rules__item">
            <p className="rules__item-text">Ополосните изделия
              Перед тем, как сортировать отходы, их нужно сполоснуть под проточной водой, чтобы очистить от пищевых
              остатков – это позволит избежать неприятных запахов и повысит качество вторсырья.</p>
          </div>
          <div className="rules__item">
            <p className="rules__item-text">Спрессуйте
              Большую часть отходов при желании можно уменьшить в объеме.
              Такой простой принцип поможет вам реже ходить в пункт приёма вторсырья и каждый раз относить больше
              вторсырья и меньше воздуха.
              Кроме того, машина, приезжающая за вторсырьём, сможет вывозить бОльшее количество отходов по массе, а
              значит, приезжать реже и меньше загрязнять воздух выхлопными газами.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="rules__footer">
      <p className="rules__footer-text">Если рядом с вашим домом нет специальных контейнеров для вторсырья или в них
        принимают не все виды отходов, вы можете собирать их дома и вывозить раз в несколько месяцев в пункт приема
        вторсырья. Как правило, грамотно спрессованные отходы не занимают много места.
        Вам повезло, если у вас есть балкон или другое свободное пространство.</p>
    </div>
  </section>
  <section className="sort">
    <div className="container__actions">
      <div className="sort__inner">
        <h2 className="sort__title">Как сортировать отходы</h2>
        <p className="sort__text">Достаточно разделить все отходы на три части:</p>
        <h3 className="sort__subtitle">ВСЁ, ЧТО ПЕРЕРАБАТЫВАЕТСЯ</h3>
        <ul className="sort__list">
          <li className="sort__list-item">
            <p>Металл</p>
          </li>
          <li className="sort__list-item">
            <p>Алюминиевые и жестяные банки и пр.</p>
          </li>
          <li className="sort__list-item">
            <p>Стекло</p>
          </li>
          <li className="sort__list-item">
            <p>Банки, бутылки и пр.</p>
          </li>
          <li className="sort__list-item">
            <p>Бумаги и картон</p>
          </li>
          <li className="sort__list-item">
            <p>Лучше хранить в отдельной коробке, чтобы они не намокали, если вы сдаете их в контейнеры для вторсырья во
              дворе.</p>
          </li>
          <li className="sort__list-item">
            <p>Упаковка Tetra Pak</p>
          </li>
          <li className="sort__list-item">
            <p>Коробка из-под соков и молочных продуктов</p>
          </li>
          <li className="sort__list-item">
            <a href="#">Подробнее</a>
          </li>
          <li className="sort__list-item">
            <p>Пластик</p>
          </li>
          <li className="sort__list-item">
            <p>пластик с маркировкой 1 и 2 принимают практически везде;</p>
          </li>
          <li className="sort__list-item">
            <p>пластик с маркировкой 4, 5 и 6 принимают только в некоторых местах, поэтому прежде чем нести/вести его в
              пункт приема, надо выяснить, принимается ли такой тип пластика (мы рекомендуем собирать изделия с такой
              маркировкой и вывозить в соответствующие пункты приёма раз в несколько месяцев);
              пластиковые пакеты и упаковки.</p>
          </li>
          <li className="sort__list-item">
            <a href="#">Разобраться, к каким видам пластика относятся разные упаковки, можно здесь.</a>
          </li>
        </ul>
        <h3 className="sort__subtitle">ОПАСНЫЕ ОТХОДЫ</h3>
        <ul className="sort__list">
          <li className="sort__list-item">
            <p>НИ В КОЕМ СЛУЧАЕ нельзя выбарсывать в общий мусор:</p>
            <p>батарейки, энергосберегающие лампы, градусники, картриджи, устаревшую или сломанную технику,
              автомобильные аккумуляторы, шины — их нужно отвозить в специальные пункты приёма опасных отходов,
              указанные на карте Recyclemap.ru</p>
          </li>
          <li className="sort__list-item">
            <p>Лекарственные средства и краску в Москве не принимают! О
              сновные рекомендации: не допускать скопления просроченных лекарств и рассчитывать необходимые объемы
              краски
              перед покупкой.</p>
          </li>
          <li className="sort__list-item">
            <p>Если лекарства и краска всё-таки остались:</p>
            <p>- вытащите таблетки и пилюли из упаковок и блистеров, измельчите до порошкового состояния и смешайте с
              непищевыми отходами;</p>
            <p>- банку с краской оставьте открытой до полного высыхания.</p>
          </li>
          <li className="sort__list-item">
            <a href="#">Более детально узнать о том, куда сдать опасные отходы в Москве, можно на сайте движения
              «РазДельный Сбор».</a>
          </li>
        </ul>
        <h3 className="sort__subtitle">ТО, ЧТО ПОКА НЕЛЬЗЯ СДАТЬ В ПЕРЕРАБОТКУ</h3>
        <ul className="sort__list">
          <li className="sort__list-item">
            <p>Если вы будете тщательно сортировать отходы, то поймёте, что в обычный мусорный контейнер попадают в
              основном пищевые отходы.
            </p>
            <p>Кстати, пищевые отходы, собранные раздельно, – ценный вторичный ресурс, который можно компостировать.</p>
          </li>
        </ul>
        <h2 className="sort__title">
          <p>Что-то осталось?
          </p>
          <p>Помоги ненужным вещам обрести новых хозяев и найди что-то полезное для себя!</p>
        </h2>
        <ul className="sort__list">
          <li className="sort__list-item">
            <p>Сдайте одежду</p>
            <p>Куда можно сдать ненужную одежду и обувь, узнайте здесь.</p>
          </li>
          <li className="sort__list-item">
            <p>Меняйтесь вещами</p>
            <p>Куда можно сдать пригодные для использования вещи (коляски, технику, мебель, книги и прочее), узнайте
              здесь.</p>
          </li>
          <li className="sort__list-item">
            <p>Обменивайтесь едой</p>
            <p>О том, как и с кем можно обменяться продуктами, узнайте на страницах движения «Спасателей еды» ВКонтакте,
              в Фейсбуке.</p>
          </li>
          <li className="sort__list-item">
            <p>Если вы работаете в супермаркете или заведении общественного питания, где в конце для приходится
              выбрасывать хорошую еду, свяжитесь с движением «Фудшеринг», волонтёры которого распределят её среди
              нуждающихся.</p>
          </li>
          <li className="sort__list-item">
            <a href="#">&gt;&gt; Узнайте больше про движение «Фудшеринг», посмотрев видео.</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
    </>
  );
}

export default Action;