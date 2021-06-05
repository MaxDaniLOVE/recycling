import React from 'react';
import './newsInfo.css';

const NewsInfo = ({ news }) => {
    return (
        <div className="plog">
            <div className="plogimg">
                <img src="assets/about1.jpg" style={{ width:'100%', borderRadius: '10px' }} alt='test'/>
            </div>
            <div className="plogtext" style={{
                fontFamily: "'Roboto', light",
                backgroundColor: 'whitesmoke',
                borderRadius: '10px',
                fontSize: '1,5vw',
                lineHeight: 'normal',
                padding: '20px',
                margin: '10px',
                marginRight: '30px',
                width: '100%',
                textAlign: 'center',
                float: 'left',
            }}>
                Существует несколько правил Zero Waste и Zero Waste стиля жизни, первое заключается в «отказе», людям
                свойственно накапливать ненужные вещи, только потому, что их сложно или грустно выбрасывать, возможно
                потому что с этими вещами связаны воспоминания. Таким образом, можно выделить некоторые из них, которые
                есть практически в каждом доме, но которые очень трудно выбрасывать, а именно: пластиковые пакеты,
                каждый поход в магазин сопровождается покупкой пластикового пакета, который можно избежать, например,
                заменить на сумку-шоппер, одна такая сумка может позволить избегнуть вреда от 30 000 пластиковых
                пакетов. Далее идут пластиковые бутылки или контейнеры, их без труда можно заменить на стеклянные или
                металлические бутылки, одноразовая посуда также не нужна человеку. Это и есть осознанное потребление
                Zero Waste.
                <p>Второе правило: уменьшение, в данную категорию входят такие вещи, как одежда, которая одевается «на
                    пару выходов» или «на праздник». Таким образом можно легко уменьшить количество продовольственных
                    продуктов, не покупая не нужные, а составляя список только необходимых.</p>
                <p>Третий принцип: необходимость повторного использования, товаров, которые вы приобретаете. </p>
                <p>Четвертое правило: необходимость в переработке того, что невозможно использовать повторно.</p>
                И на конец пятое: отправлять на переработку, или в компост то, что осталось.
                Теперь поговорим об экологии.
                Ежедневно мы сталкиваемся с последствиями изменения климата: потоп в Венеции, ноябрьский снегопад в
                Испании и Австралии, быстрое таяние ледников и многое другое. Примером может служить в том числе и
                Республика Беларусь: за последние 30 лет потеплело более, чем на один градус, а изменение в привычной
                погоде ощущают все граждане. Казалось бы, изменение климата очевидно, борьбу с ним включили в цели в
                области устойчивого развития, а в 2015 году 170 государств подписали Парижское Соглашение, взяв на себя
                определенные обязательства в экологической сфере. Цель данного Соглашения – добиться того, чтобы рост
                глобальной температуры не превышал 2 °C, в идеале – сдерживать прирост температуры на уровне ниже 1,5
                °C. Цель масштабная, государств-участников достаточно, но, к сожалению, на деле все оказалось не столь
                светлым и положительным, как того хотелось. В скором времени после принятия Парижского Соглашения оно
                столкнулось с одной сложностью.
            </div>
        </div>
    );
};

export default NewsInfo;
