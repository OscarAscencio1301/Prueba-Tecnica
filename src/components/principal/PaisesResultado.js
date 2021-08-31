import React from 'react'
import { useSelector } from 'react-redux'
import { useFetchResultado } from '../../hooks/useFetchResultado'
import { Carga } from '../ui/Carga'

export const PaisesResultado = () => {
    const {pais} = useSelector(state => state.info)
    const datos = useFetchResultado(`https://covid-api.mmediagroup.fr/v1/cases?country=${pais}`)
    if(datos?.data){
        const {continent: continente, country: pais, confirmed: confirmados, population: poblacion} = datos.data.All
        return (
            <div className="resultado">
                <h2 className="resultado__pais">{pais}</h2>
                <h4 className="resultado__poblacion">Población Total: <span className="poblacion">{poblacion}</span></h4>
                <h4 className="resultado__confirmados">Casos Confirmados: <span className="confirmados">{confirmados}</span></h4>
                <h5 className="resultado__continente">{continente}</h5>
            </div>
        )
    }else{
        return <Carga />
    }
   
}
