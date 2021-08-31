import { types } from "../types/types"

export const menuReducer = (state = { abierto: false, botonFlotante: false }, action) => {
    switch (action.type) {
        case types.abrirMenu:
            return {
                ...state,
                abierto: true
            }
        case types.cerrarMenu:
            return {
                ...state,
                abierto: false
            }

        case types.abrirBoton:
            return {
                ...state,
                botonFlotante: true
            }

        case types.cerrarBoton:
            return {
                ...state,
                botonFlotante: false
            }
        default:
            return state
    }
}