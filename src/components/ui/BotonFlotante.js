import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { abrirBotonFlotante } from '../../actions/menuHamburguesa'
import { BotonAbierto } from './BotonAbierto'

export const BotonFlotante = () => {
    const { abierto, botonFlotante } = useSelector(state => state.menu)
    console.log(botonFlotante)

    const dispatch = useDispatch()
    const abrirBTN = () => {
        dispatch(abrirBotonFlotante())

    }
    return (
        <>
            {
                !abierto &&
                <>
                    <button className="boton__flotante" onClick={abrirBTN}>
                        <img src={'https://res.cloudinary.com/defok5em4/image/upload/v1630388037/Prueba%20T%C3%A9cnica/wearing_hygienic_mask_protect_coronavirus_covid_allergy_icon_141604_lse0ng.png'} alt="Covid-19" className="boton__folotante-imagen" />
                    </button>
                    {
                        botonFlotante && <BotonAbierto />
                    }
                </>
            }

        </>
    )
}
