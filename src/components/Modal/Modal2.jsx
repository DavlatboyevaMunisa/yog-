import React from "react";
import './_modal.scss'


const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
		<div
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				background: "rgba(0, 0, 0, 0.5)",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<div
				style={{
					background: "white",
					margin: "auto",
					padding: "2%",
					border: "2px solid #000",
					borderRadius: "10px",
					boxShadow: "2px solid black",
				}}
			>
				{children}
				<section className="form">
                    <div className="container">
                    <button className="close" onClick={onClose} >x</button>
                        <p className="form-text">Подсолнечное масло</p>
                        <h1 className="form-title">«семейное»</h1>
                        <p className="text">«Семейное», «Дончанка», «Донола» - 100% подсолнечное рафинированное дезодорированное масло, что подтверждено многочисленными испытаниями аккредитованных независимых организаций. Мы нацелены дать нашим потребителям лучший качественный продукт, который по своему жиро-кислотному составу самым лучшим образом подходит для организма человека.<br/><br />Для подробной информацией отставьте заявку и наши специалисты свяжутся с вами</p>
                        <form className="form-form">
                            <label>
                                Ваше имя
                                <input type="text"  placeholder="Введите имя" />
                            </label>
                            <label>
                                Номер телефона
                                <select className="form-select">
                                    <option value="uzb">uzb</option>
                                </select>
                                <input type="text"  placeholder="+998" />
                            </label>
                        </form>
                        <button className="form-btn" type="submit">отправить</button>
                    </div>
                </section>
			</div>
		</div>
	);
};

export default Modal;
