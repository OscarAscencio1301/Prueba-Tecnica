import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { cerrarBotonFlotante } from '../../actions/menuHamburguesa'
import { infoMexico, infoMexicoVacuna } from '../../helpers/infoMexico'

export const BotonAbierto = () => {
    const dispatch = useDispatch()
    const cerrar = () => {
        dispatch(cerrarBotonFlotante())
    }
    const [info, setinfo] = useState(null)
    const [infoVacuna, setinfoVacuna] = useState(null)


    useEffect(() => {
        infoMexico()
            .then(datos => {
                setinfo(datos)
            })
    }, [])

    useEffect(() => {
        infoMexicoVacuna()
            .then(datos => {
                setinfoVacuna(datos)
            })
    }, [])
    
    const { confirmed: casos } = !!info && info
    const { people_vaccinated: vacunados } = !!infoVacuna && infoVacuna
    console.log(infoVacuna)

    return (
        <div className="flotante__relleno">
                <button className="cerrar__menu" onClick={cerrar}>X</button>
            <div className="boton__flotante-abierto animate__animated animate__fadeIn">
                <h2 className="boton__flotante-titulo">Cifras al Momento en México</h2>
                <div className="boton__flotante-container">
                    <div className="boton__flotante-item">
                        <h3 className="boton__flotante-cifra">{casos}</h3>
                        <h3 className="boton__flotante-texto">Contagiados</h3>
                    </div>
                    <div className="boton__flotante-item">
                    <h3 className="boton__flotante-cifra">{vacunados}</h3>
                        <h3 className="boton__flotante-texto">Vacunados</h3>
                    </div>
                </div>

                <Link to="/mexico" className="boton__flotante-boton" onClick={cerrar}>Conocer más</Link>
                
            </div>
        </div>
    )
}
