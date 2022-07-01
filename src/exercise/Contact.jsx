import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { ContactClass } from './classes/Contact.class'

function ContactComponent({Contact}) {
  
    const [Conected, ChangeConection] = useState(Contact.Conectado)

    const changeState = () => {
        ChangeConection(!Conected)
    }
  
    return ( 
    <div>
        <h1>Informacion del contacto:</h1>
        <p>Nombre: { Contact.Nombre }</p>
        <p>Apellidos: { Contact.Apellidos }</p>
        <p>Email: { Contact.Email }</p>
        <p>Conectado: {Conected ? "Contacto En Línea":" Contacto No Disponible"} </p>
        <button onClick={changeState}></button>
    </div>
  )
}

ContactComponent.propTypes = {
    Contact:PropTypes.instanceOf(ContactClass)
}

export default ContactComponent
