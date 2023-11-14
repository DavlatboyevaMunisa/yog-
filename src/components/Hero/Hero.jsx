import './_hero.scss'
import image1 from '../../../src/assets/images/heroIMG1.png';
import image2 from '../../../src/assets/images/heroIMG2.png';

function Hero() {
  return (
    <section id="hero" className="hero">
        <div className="container">
            <div className="hero-inner">
                <div className="hero-img">
                    <img className="image" src={image1} alt="image" />
                    <div className="image-card">
                        <img src={image2} alt="image" />
                        <img src={image2} alt="image" />
                    </div>
                </div>
                <div className="hero-text">
                    <p className="hero-text_text">О компании</p>
                    <h1 className="hero-text_title">натуральные подсолнечные масла высочайшего качества от производителя</h1>
                    <p className="hero-text_p">
                    Наша компания по производству подсолнечного масла занимается <span style={{color: "rgba(90, 146, 19, 1)"}}>производством </span> высококачественного продукта для здорового образа жизни<b> «Семейное», «Дончанка»,</b> <span style={{color: "rgba(90, 146, 19, 1)"}}> «Донола» - 100% </span>подсолнечное рафинированное дезодорированное масло, что подтверждено многочисленными испытаниями аккредитованных независимых организаций.
                    <br />
                    Мы нацелены дать нашим потребителям лучший качественный продукт, который по своему <span style={{color: "rgba(90, 146, 19, 1)"}}> жиро-кислотному </span> составу самым лучшим образом подходит для организма человека. Политика в области качества на предприятии предусматривает корпоративную ответственность всего персонала за конечный результат, а основной своей задачей коллектив считает удовлетворение потребностей каждой семьи, любого человека в высококачественных продуктах. Выпуск продукции производится согласно ТР ТС 024/2011 «Технический регламент на масложировую продукцию» и соответствует ГОСТ на подсолнечное масло (ГОСТ 1129-2013), 
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero