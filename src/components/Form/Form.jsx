import './_form.scss'

function Form() {
  return (
    <section className="form">
        <div className="container">
            <p className="form-text">Преимущества</p>
            <h1 className="form-title">Причины почему наши клиенты доверяют нам</h1>
            <p className="text">Наш менеджер свяжется с вами для консультации и обсуждения дальнейших шагов</p>
            <form className="form-form">
                <label>
                    Ваше имя
                    <input type="text"  placeholder="Введите имя" />
                </label>
                <label>
                    Номер телефона
                    <select className="form-select">
                        <option value="uzb"></option>
                    </select>
                    <input type="text"  placeholder="+998" />
                </label>
            </form>
            <button className="form-btn" type="submit">отправить</button>
        </div>
    </section>
  )
}

export default Form