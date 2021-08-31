import { useState } from "react"


export const useForm = (valoresIniciales = {}) => {
    const [valores, setvalores] = useState(valoresIniciales)

    const cambioValor = ({target}) => {
        setvalores({
            ...valores,
            [target.name]: target.value
        })
    }

    const resetFormulario = () => {
        setvalores(valoresIniciales)
    }
    return [valores, cambioValor, resetFormulario]
}
