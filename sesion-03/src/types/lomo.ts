export interface Plato{
    id: number;
    nombre: string;
    categoria: string;
    origen: string;
    calorias: number;
    ingredientes: string[];
    imagen: string;
}

export const API_CONFIG={
    BASE_URL: "http://192.168.50.120:1494",
    PLATOS_ENDPOINT: "/api/platos"
}