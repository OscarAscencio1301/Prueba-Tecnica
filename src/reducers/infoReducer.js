import { types } from "../types/types"

export const infoReducer = (state = { pais: 'Afghanistan', paisVacuna: 'Afghanistan' }, action) => {
    switch (action.type) {
        case types.buscarPais:
            return {
                ...state,
                pais: action.payload
            }
        case types.buscarPaisVacuna:
            return {
                ...state,
                paisVacuna: action.payload
            }
        default:
            return state
    }
}