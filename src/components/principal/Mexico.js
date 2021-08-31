import React, { useEffect, useState } from 'react'
import { infoMexico, infoMexicoVacuna } from '../../helpers/infoMexico'

export const Mexico = () => {
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

    const { population: poblacion, confirmed: casos } = !!info && info
    const { life_expectancy: vida, people_partially_vaccinated: parcial, people_vaccinated: vacunados, administered: vacunas } = !!infoVacuna && infoVacuna
    console.log(infoVacuna)
    return (
        <div className="mexico">
            <div className="mexico__container">
                <img src='https://res.cloudinary.com/defok5em4/image/upload/v1630437365/Prueba%20T%C3%A9cnica/pexels-tim-mossholder-1618423_zmdrp8.jpg' alt='MX' className="mexico__img" />
                <div className="mexico__informacion">
                    <h3 className="mexico__info">Población Actual: <span className="mexico__dato">{poblacion}</span></h3>
                    <h3  className="mexico__info">Casos Confirmados: <span className="mexico__dato">{casos}</span></h3>
                    <h3 className="mexico__info">Expectativa de Vida: <span className="mexico__dato">{vida}</span></h3>
                    <h3 className="mexico__info">Vacunas Administradas: <span className="mexico__dato">{vacunas}</span></h3>
                    <h3 className="mexico__info">Personas con 1° Dosis: <span className="mexico__dato">{parcial}</span></h3>
                    <h3 className="mexico__info">Personas con 2° Dosis: <span className="mexico__dato">{vacunados}</span></h3>
                </div>
            </div>
        </div>
    )
}
