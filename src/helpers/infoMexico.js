export const infoMexico = async() => {
    const url = 'https://covid-api.mmediagroup.fr/v1/cases?country=Mexico';
    const respuesta = await fetch(url)
    const datos = await respuesta.json()
    return datos.All
}

export const infoMexicoVacuna = async() => {
    const url = 'https://covid-api.mmediagroup.fr/v1/vaccines?country=Mexico';
    const respuesta = await fetch(url)
    const datos = await respuesta.json()
    return datos.All
}