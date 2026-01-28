import { createContext, useState } from "react"
import type { ReactNode } from "react"
import type { FamilyContextType, FamilyState } from "../types/types";

// 1: crear el contexto
const FamilyContext = createContext<FamilyContextType | null>(null)

// 2: estado inicial del contexto
const estadoInicial: FamilyState = {
    mensaje: "Hola desde el contexto de la familia",
    counter: 0
}

// 3: Crear el Provider
export function FamilyProvider({ children }: { children: ReactNode }) {
    // Hooks
    const [estado, setEstado] = useState<FamilyState>(estadoInicial)

    // Funciones para cambiar elementos del contexto
    const setMensaje = (newMensaje: string) => {
        setEstado((prev) => ({ ...prev, mensaje: newMensaje }))
    }
    const incrementarContador = () => {
        setEstado((prev) => ({ ...prev, counter: prev.counter + 1 }))
    }
    const decrementarContador = () => {
        setEstado((prev) => ({ ...prev, counter: prev.counter - 1 }))
    }
    const value: FamilyContextType = {
        ...estado,
        setMensaje,
        incrementarContador,
        decrementarContador
    }

    return (
        <FamilyContext.Provider value={value}>
            {children}
        </FamilyContext.Provider>
    )
}

export default FamilyContext