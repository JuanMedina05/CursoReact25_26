// tipos globales
export interface FamilyState{
    mensaje:string;
    counter:number;
}

// acciones a realizar
export interface FamilyActions{
    setMensaje:(mensaje:string)=>void;
    incrementarContador:()=>void;
    decrementarContador:()=>void;
}

// exportar los tipos
export type FamilyContextType=FamilyState&FamilyActions;