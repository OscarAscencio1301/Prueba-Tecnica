import { useEffect, useState } from "react"


export const useFetchPais = (url) => {
   const [datos, setdatos] = useState({paises: null, loading: true, error: null})
   useEffect(() => {
       fetch(url)
        .then(respuesta => respuesta.json())
        .then(pais => {
            setdatos({
                paises: Object.keys(pais),
                loading: false,
                error: null
            })
        })
   }, [url])

   return datos
}
