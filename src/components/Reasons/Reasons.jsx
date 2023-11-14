import './_reasons.scss'
import reasonsIMG from '../../../src/assets/images/reasonsIMG.png'

function Reasons() {
  return (
    <section id="reasons" className="reasons">
        <div className="container">
            <p className="reasons-text">Преимущества</p>
            <h1 className="reasons-title">Причины почему наши клиенты доверяют нам</h1>
            <div className="reasons-inner">
                <ul className="inner-text">
                    <li className="inner-item">
                        <h1 className="item-title"><span style={{color: "rgba(249, 177, 1, 1)"}}>01 </span> Естественность продукта</h1>
                        <p className="item-text">Мы производим только натуральные подсолнечные масла без использования химических добавок или консервантов</p>
                    </li>
                    <li className="inner-item">
                        <h1 className="item-title"><span style={{color: "rgba(249, 177, 1, 1)"}}>02 </span> ассортимент продуктов</h1>
                        <p className="item-text"><span style={{color: "rgba(90, 146, 19, 1)"}}>Подсолнечная компания может предложить различные продукты, такие как масло, семечки, жмых</span></p>
                    </li>
                    <li className="inner-item">
                        <h1 className="item-title"><span style={{color: "rgba(249, 177, 1, 1)"}}>03 </span> Экологичность</h1>
                        <p className="item-text"><span style={{color: "rgba(90, 146, 19, 1)"}}>Наша компания заботится о окружающей среде и использует только натуральные методы выращивания подсолнечника, которые не наносят вреда окружающей среде.</span></p>
                    </li>
                </ul>
                <div className="inner-img">
                    <img src={reasonsIMG} alt="image" />
                </div>
                <ul className="inner-text2">
                    <li className="inner-item">
                        {/* <h1 className="item-title"></h1>
                        <p className="item-text"></p> */}
                    </li>
                    <li className="inner-item">
                        <h1 className="item-title"><span style={{color: "rgba(249, 177, 1, 1)"}}>04 </span> Прозрачность производства</h1>
                        <p className="item-text">Мы предоставляем нашим клиентам информацию о происхождении наших продуктов и процессе производства, что помогает установить доверительные отношения с нашими клиентами.</p>
                    </li>
                    <li className="inner-item">
                        <h1 className="item-title"><span style={{color: "rgba(249, 177, 1, 1)"}}>05 </span> Конкурентоспособная цена</h1>
                        <p className="item-text">Мы предлагаем высококачественные продукты по конкурентоспособной цене, что делает нашу продукцию доступной широкой аудитории.</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Reasons