import { types } from "../types/types";

export const buscarPais = (pais) => ({
    type: types.buscarPais,
    payload: pais
})

export const buscarPaisVacuna = (pais) => ({
    type: types.buscarPaisVacuna,
    payload: pais
})