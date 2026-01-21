import { API_CONFIG, type Plato } from "../types/lomo";

// api hace fetchin a mi api para traer todos los platos

export const fetchPlatos = async ():Promise<Plato[]> => {
    const url=`${API_CONFIG.BASE_URL}${API_CONFIG.PLATOS_ENDPOINT}`;
    try{
        const res = await fetch(url);
        if(!res.ok){
            throw new Error("Error en la respuesta de la API");
        }
        return await res.json();
    }catch(error){
        throw new Error("Error al traer los platos");
    }
    
}