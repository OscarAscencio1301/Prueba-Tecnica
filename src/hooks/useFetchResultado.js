import { useEffect, useState } from "react"


export const useFetchResultado = (url) => {
   const [datos, setdatos] = useState({data: null, loading: true, error: null})

   useEffect(() => {
       setdatos({data: null, loading: true, error: null})
       
       fetch(url)
        .then(respuesta => respuesta.json())
        .then(data => {
            setdatos({
                data: data,
                loading: false,
                error: null
            })
        })
      
   }, [url])

   return datos;
}
