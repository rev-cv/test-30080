import { useEffect, useRef } from "react"
import './style.css'


function PopUp(props) {

    const user = props.user;

    const curtainNode = useRef();
    const modalNode = useRef();

    useEffect( _ => {
        const cwa = document.body.clientWidth;
        document.body.style.overflow = "hidden";
        const cwl = document.body.clientWidth;

        if ( cwa < cwl ) {
            document.body.style.paddingRight = cwl - cwa + "px";
        }

        curtainNode.current.classList.add("open");
        modalNode.current.classList.add("open");

        return () => {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        }
    })

    function destruction () {
        curtainNode.current.classList.remove("open");
        modalNode.current.classList.remove("open");
        setTimeout(() => {
            props.closePopUp()
        }, 200);
    }

	return (

<div className='curtain' ref={curtainNode}>
   <div className="modal" ref={modalNode}>
        <div className="title">{user.name}</div>

        <button className='close' onClick={destruction}>
            <svg className='icon'><use xlinkHref='#ico-close' /></svg>
        </button>

        <div className="mark">Телефон:</div>
        <div className="mark">Почта:</div>
        <div className="mark">Дата приема:</div>
        <div className="mark">Должность:</div>
        <div className="mark">Подразделение:</div>

        <div className="value phone">{user.phone}</div>
        <div className="value email">{user.email}</div>
        <div className="value date">{user.hire_date}</div>
        <div className="value job">{user.position_name}</div>
        <div className="value subdivision">{user.department}</div>

        <div className="mark-descr">Дополнительная информация:</div>
        <div className="description">Разработчики используют текст в качестве заполнителя макта страницы. Разработчики используют текст в качестве заполнителя макта страницы.</div>
   </div>
</div>

    )
}

export default PopUp