import './_product.scss'
import a from '../../../src/assets/images/a.png'
// import b from '../../../src/assets/images/b.png'
import c from '../../../src/assets/images/c.png'
import Modal from '../Modal/Modal2'
import {useState} from 'react'

function Product() {

    const [open, setOpen] = useState(false);
 
    const handleClose = () => {
        setOpen(false);
    };
 
    const handleOpen = () => {
        setOpen(true);
    };

  return (
    <section id="product" className="product">
        <div className="container">
            <div className="product-top">
                <h1 className="top-title">ПРОДУКЦИЯ НАШЕЙ КОМПАНИИ</h1>
                <div className="top-buttons">
                    <button className="btn-item" type="submit"><b>СЕМЕЙНОЕ</b></button>
                    <button className="btn-item" type="submit"><b>ДОНЧАНКА</b></button>
                    <button className="btn-item" type="submit"><b>ДОНОЛА</b></button>
                </div>
            </div>
            <div className="product-card">
                <ul className="card-list">
                    <li className="card-item">
                        <div className="item-img">
                            <img src={a} alt="image" />
                        </div>
                        <h1 className="item-title">«1 ЛИТР»</h1>
                        <button onClick={handleOpen} className="item-btn">ПОДРОБНЕЕ</button>
                    </li>
                    {/* <li className="card-item">
                        <div className="item-img">
                            <img src={b} alt="image" />
                        </div>
                        <h1 className="item-title">«3 ЛИТР»</h1>
                        <button className="item-btn">ПОДРОБНЕЕ</button>
                    </li> */}
                    <li className="card-item">
                        <div className="item-img">
                            <img src={c} alt="image" />
                        </div>
                        <h1 className="item-title">«5 ЛИТР»</h1>
                        <button onClick={handleOpen} className="item-btn">ПОДРОБНЕЕ</button>
                    </li>
                </ul>
                <button className="prev" type="submit"></button>
                <button className="next" type="submit"></button>
            </div>
        </div>
        <Modal isOpen={open} onClose={handleClose}>
                <>
                   
                </>
        </Modal>
    </section>
  )
}

export default Product