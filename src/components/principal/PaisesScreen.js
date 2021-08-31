import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buscarPais } from '../../actions/paises'
import { useFetchPais } from '../../hooks/useFetchPais'
import { useForm } from '../../hooks/useForm'
import { CargaCompleta } from '../ui/CargaCompleta'
import { PaisesResultado } from './PaisesResultado'

export const PaisesScreen = () => {
    const datos = useFetchPais('https://covid-api.mmediagroup.fr/v1/cases')
    const {pais: paisState} = useSelector(state => state.info)

    const dispatch = useDispatch()
    const [valores, cambioValor] = useForm({
        pais: paisState
    })

    const enviarPais = (e) => {
        e.preventDefault();
        dispatch(buscarPais(pais))
    }

    const { pais } = valores

    if (datos?.paises) {
        return (
            <div className="paises">
                <div className="paises__consulta">
                    <form className="paises__form" onSubmit={enviarPais}>
                        <h1 className="paises__titulo">Selecciona un País:</h1>
                        <select
                            name="pais"
                            value={pais}
                            onChange={cambioValor}
                            className="paises__select">
                            {
                                datos.paises.map(pais => <option key={pais}>{pais}</option>)
                            }
                        </select>

                        <button
                            type="submit"
                            className="paises__btn"
                        >Buscar</button>
                    </form>
                </div>
                <div className="paises__resultado">
                    <PaisesResultado />
                </div>
            </div>
        )
    } else {
        return <CargaCompleta />
    }
}
