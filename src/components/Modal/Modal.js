import React from 'react';
import style from './Modal.module.css'
import classNames from "classnames";

const Modal = ({active, setActive, children}) => {
  return (
	<div className={active ? classNames(style.modal, style.active) : classNames(style.modal)} onClick={()=>setActive(false)}>
	  	<div className={style.modalContent} onClick={e=>e.stopPropagation()}>
		  {children}
		</div>
	</div>
  );
};

export default Modal;