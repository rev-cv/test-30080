import { useState } from 'react'
import PopUp from '../popup/PopUp'
import './style.css'

const test = {
    "name": "Addison Hines",
    "phone": "1-987-406-2087",
    "email": "egestas@outlook.ca",
    "address": "Ap #109-4418 Facilisis Rd.",
    "position_name": "a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc",
    "department": "vitae aliquam eros turpis non enim. Mauris quis turpis vitae",
    "hire_date": "Jan 14, 2021"
  }

function Card(props) {
    let [isOpenPopUp, setStatusPopUp] = useState(false)
    const user = props.user != undefined ? props.user : test

    return (
<>

<button className='card' onClick={e => setStatusPopUp(!isOpenPopUp)}>
    <div className="title">{user.name}</div>
    <svg className='icon'><use xlinkHref='#ico-phone' /></svg>
    <div className="data">{user.phone}</div>
    <svg className='icon'><use xlinkHref='#ico-email' /></svg>
    <div className="data">{user.email}</div>
</button>

{ isOpenPopUp && <PopUp closePopUp={ _ => setStatusPopUp(false) } user={user} /> }

</>
    )
}

export default Card