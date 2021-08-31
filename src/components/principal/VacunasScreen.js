import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buscarPaisVacuna } from '../../actions/paises'
import { useFetchPais } from '../../hooks/useFetchPais'
import { useForm } from '../../hooks/useForm'
import { CargaCompleta } from '../ui/CargaCompleta'
import { Vacunasresultado } from './VacunasResultado'

export const VacunasScreen = () => {
    const datos = useFetchPais('https://covid-api.mmediagroup.fr/v1/cases')
    const {paisVacuna: paisState} = useSelector(state => state.info)

    const dispatch = useDispatch()
    const [valores, cambioValor] = useForm({
        pais: paisState
    })

    const enviarPais = (e) => {
        e.preventDefault();
        dispatch(buscarPaisVacuna(pais))
    }

    const { pais } = valores

    if (datos?.paises) {
        return (
            <div className="vacunas">
                <div className="vacunas__consulta">
                    <form className="vacunas__form" onSubmit={enviarPais}>
                        <h1 className="vacunas__titulo">Selecciona un País:</h1>
                        <select
                            name="pais"
                            value={pais}
                            onChange={cambioValor}
                            className="vacunas__select">
                            {
                                datos.paises.map(pais => <option key={pais}>{pais}</option>)
                            }
                        </select>

                        <button
                            type="submit"
                            className="vacunas__btn"
                        >Buscar</button>
                    </form>
                </div>
                <div className="vacunas__resultado">
                    <Vacunasresultado />
                </div>
            </div>
        )
    } else {
        return <CargaCompleta />
    }
}
