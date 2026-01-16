import { useEffect, useState } from "react";

// T -> Generics
export function useFetch<T>(url:string){
    // Data final:
    const [data, setData] = useState<T|null>(null);

    // Mostrar un loop que diga cargando...
    const [loading, setLoading] = useState<boolean>(true);

    // Posible error
    const [error, setError] = useState<Error|null>(null);

    // Efecto: cuando cargue el componente haremos useEffect
    useEffect(()=>{
        setLoading (true);
        setError (null);
        // Controlador para abortar el fetch
        const controller= new AbortController();
        const {signal}=controller; // señal que va por el cable del fetch
        const fetchData = async()=>{
            try{
                // Hacemos llamada y pasamos señal de cancelación
                const res = await fetch(url,{signal})
                if(!res.ok){
                    throw new Error("Error en la respuesta de la API");
                }
                const result = await res.json();
                setData(result);
            } catch(error){
                throw new Error("Error al traer los datos");
            } finally{
                setLoading(false);
            }
        };
        fetchData();
        return()=>{
            // Cuando se va a desmontar el componente
            controller.abort(); // abortamos el fetch
        }
    },[url])
    
    return {data, loading, error};
}