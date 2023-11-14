import './_header.scss'
import {Link} from 'react-router-dom'
import logo from '../../../src/assets/images/logo.svg'
import {useState, useEffect, useRef} from 'react'
import Modal from '../Modal/Modal1'
import { FaBars, FaTimes} from 'react-icons/fa'

function Header() {

    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
 
    const handleClose = () => {
        setOpen(false);
    };
 
    const handleOpen = () => {
        setOpen(true);
    };

    
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }
    
      useEffect(() => {
        const handleScroll = () => {
          const isScrolled = window.scrollY > 0;
          setScrolled(isScrolled);
        };
    
        const handleResize = () => {
          const width = window.innerWidth;
          setIsMobile(width <= 1200);
        };
    
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
    
        // Unsubscribe
        return () => {
          window.removeEventListener('scroll', handleScroll);
          window.removeEventListener('resize', handleResize);
        };
      }, []);

  return (
    <header className="header">
            <div className="container">
                <div className={`header-top ${scrolled ? 'scrolled' : ''}`} ref={navRef}>
                    <Link to="/">
                        <img className="logo" src={logo} alt="logo" />
                    </Link>
                    <div className="nav">
                        <ul className="header-list">
                            <li className="header-item"><a href="#hero">О компании</a></li>
                            <li className="header-item"><a href="#product">Продукция</a></li>
                            <li className="header-item"><a href="#reasons">Преимущества</a></li>
                            <li className="header-item"><a href="#etapi">Сотрудничество</a></li>
                            <li className="header-item"><a href="#contact">Контакты</a></li>
                        </ul>
                        <a className="header-tell" href="tel: +998712004447">+998 (71) 200-44-77</a>
                        <div className="header-language">
                            <button className="header-ru" type="submit">RU</button>
                            <button className="header-uz" type="submit">UZ</button>
                        </div>
                    </div>
                </div>
                <button className="nav-btn nav-close-btn" onClick={showNavbar} type="submit">
                    <FaTimes />
                </button>
                <button className="nav-btn" onClick={showNavbar} type="submit">
                    <FaBars />
                </button>
            </div>
            <div className="container">
                <div className="header-bottom">
                    <p className="bottom-text">Натуральное</p>
                    <h1 className="bottom-title">подсолнечное масло от производителя «масло Волгодонска»</h1>
                    <button className="bottom-btn" onClick={handleOpen}>Консультация</button>
                </div>
                <Modal isOpen={open} onClose={handleClose}>
                        <>
                        </>
                </Modal>
            </div>
    </header>
  )
}

export default Header