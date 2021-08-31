import React from 'react'
import { useSelector } from 'react-redux'
import { useFetchResultado } from '../../hooks/useFetchResultado'
import { Carga } from '../ui/Carga'

export const Vacunasresultado = () => {
    const {paisVacuna} = useSelector(state => state.info)
    const datos = useFetchResultado(`https://covid-api.mmediagroup.fr/v1/vaccines?country=${paisVacuna}`)
    if(datos?.data){
        const {country: pais, administered: vacunas, population: poblacion, people_vaccinated: vacunados, people_partially_vaccinated: vacunado_parcial} = datos.data.All
        return (
            <div className="resultadovac">
                <h2 className="resultadovac__pais">{pais}</h2>
                <h4 className="resultadovac__poblacion">Población Total: <span className="poblacion">{poblacion}</span></h4>
                <h4 className="resultadovac__confirmados">Total de Vacunas: <span className="confirmados">{vacunas}</span></h4>
                <h4 className="resultadovac__confirmados">Personas Vacunadas (1° Dosis): <span className="vac">{vacunado_parcial}</span></h4>
                <h4 className="resultadovac__confirmados">Personas Vacunadas (2° Dosis): <span className="vac">{vacunados}</span></h4>
            </div>
        )
    }else{
        return <Carga />
    }
   
}
