import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { cerrarBotonFlotante } from '../../actions/menuHamburguesa'

export const BotonAbierto = () => {
    const dispatch = useDispatch()
    const cerrar = () => {
        dispatch(cerrarBotonFlotante())

    }
    return (
        <div className="flotante__relleno">
            <div className="boton__flotante-abierto animate__animated animate__fadeIn">
                <button className="cerrar__menu" onClick={cerrar}>X</button>
                <h2 className="boton__flotante-titulo">Cifras al Momento</h2>
                <div className="boton__flotante-container">
                    <div className="boton__flotante-item">
                        <h3 className="boton__flotante-cifra">426,282</h3>
                        <h3 className="boton__flotante-texto">Contagiados</h3>
                    </div>
                    <div className="boton__flotante-item">
                    <h3 className="boton__flotante-cifra">4282</h3>
                        <h3 className="boton__flotante-texto">Vacunados</h3>
                    </div>
                </div>

                <Link to="/mundial" className="boton__flotante-boton" onClick={cerrar}>Conocer más</Link>
                
            </div>
        </div>
    )
}
