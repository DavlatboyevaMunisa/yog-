import './_etapi.scss'

function Etapi() {
  return (
    <section id="etapi" className="etapi">
        {/* <div className="container"> */}
            <p className="etapi-text">Преимущества</p>
            <h1 className="etapi-title">Причины почему наши клиенты доверяют нам</h1>
            <ul className="card-list">
                <li className="card-item">
                    <h1 className="item-title"><span style={{color: "rgba(249, 177, 1, 1)"}}>01 </span>Заключение договора</h1>
                    <p className="item-text">Первый этап сотрудничества начинается с заключения договора, в котором мы обсуждаем требования клиента к продукции и условия поставки.</p>
                </li>
                <li className="card-item">
                    <h1 className="item-title"><span style={{color: "rgba(249, 177, 1, 1)"}}>02 </span> Производство продукции</h1>
                    <p className="item-text">Мы используем только высококачественные семена подсолнечника и натуральные методы выращивания, чтобы обеспечить высокое качество нашей продукции.</p>
                </li>
                <li className="card-item">
                    <h1 className="item-title"><span style={{color: "rgba(249, 177, 1, 1)"}}>03 </span> Доставка продукции</h1>
                    <p className="item-text">Мы работаем с надежными логистическими компаниями, чтобы гарантировать своевременную и безопасную доставку продукции нашим клиентам.</p>
                </li>
            </ul>
        {/* </div> */}
    </section>
  )
}

export default Etapi