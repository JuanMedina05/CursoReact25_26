import { useActionState } from "react";
import type { FormState, ToDoData } from "../types"

// simular bd
const guardarEnBD = async(todo:ToDoData)=>{
    await new Promise((res)=>setTimeout(res,1000));
    console.log("Guardar en localStorage");
    localStorage.setItem("todo",JSON.stringify(todo));
}

// Función que ejecuta react al enviar el formulario
const guardarAction = async(
    prevState:FormState,
    formData:FormData,
):Promise<FormState>=>{
    const nombreToDo = formData.get("nombre") as string;
    const fechaToDo = formData.get("fecha") as string;
    if(!nombreToDo||!fechaToDo){
        return{
            error:"Todos los campos son obligatorios",
            succes:null,
        };
    };
    try{
        await guardarEnBD({
            nombre:nombreToDo,
            fecha:fechaToDo,
        })
        return{
            error:null,
            succes:"Todo guardado correctamente",
        }
    }catch(error){
        return{
            error:"Error al guardar los datos",
            succes:null,
        }
    }
}

const FormToDoList = () => {
    const [state,formAction,isPending]=useActionState(guardarAction,{
        error:null,
        succes:null,
    })
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Crear To-Do 📝
        </h1>

        <form action={formAction} className="space-y-4">
          {/* Nombre */}
          <div>
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Ej: Comprar pan"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Fecha */}
          <div>
            <label
              htmlFor="fecha"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Fecha
            </label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isPending}
            />
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors"
            disabled={isPending}
          >
            Guardar To-Do
          </button>

          {/* Mensajes */}
          {state.error && (
            <p className="text-sm text-red-600 text-center">
              {state.error}
            </p>
          )}

          {state.succes && (
            <p className="text-sm text-green-600 text-center">
              {state.succes}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}

export default FormToDoList
