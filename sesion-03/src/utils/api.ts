// api hace fetchin a mi api para traer todos los platos
export interface Plato{
    id: number;
    nombre: string;
    categoria: string;
    origen: string;
    calorias: number;
    ingredientes: string[];
    imagen: string;
}
export const fetchPlatos = async ():Promise<Plato[]> => {
    try{
        const res = await fetch("http://localhost:1494/api/platos");
        if(!res.ok){
            throw new Error("Error en la respuesta de la API");
        }
        return await res.json();
    }catch(error){
        throw new Error("Error al traer los platos");
    }
}