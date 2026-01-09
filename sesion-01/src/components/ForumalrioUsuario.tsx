import React, { useState } from 'react'
import type { ReactFormState } from 'react-dom/client';
interface Usuario {
 nombre: string;
 email: string; 
 edad: number;
}

const ForumalrioUsuario = () => {
    const[usuario,setUsuario]=useState<Usuario>({
        nombre:"",
        email:"",
        edad:0
    });
    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault();
    }
    const actualizarCampo=(campo:keyof Usuario,valor:string|number)=>{
        const nuevoUsuario = {
            ...usuario,
            [campo]: valor
        };

        setUsuario(nuevoUsuario);
        localStorage.setItem("usuario", JSON.stringify(nuevoUsuario));

    }
  return (
    // Formulara de datos
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">Registro de Usuarios</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <div>
                <label className="block text-sm font-medium mb-2">Nombre:</label>
                <input 
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded"
                    value={usuario.nombre}
                    onChange={(e)=>{
                        actualizarCampo("nombre",e.target.value)
                    }}
                    required
                    />
                </div>
                <div>
                <label className="block text-sm font-medium mb-2">email:</label>
                <input 
                    type="email"
                    className="w-full border border-gray-300 p-2 rounded"
                    value={usuario.email}
                    onChange={(e)=>{
                        actualizarCampo("email",e.target.value)
                    }}
                    required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">edad:</label>
                    <input 
                        type="number"
                        className="w-full border border-gray-300 p-2 rounded"
                        value={usuario.edad}
                        onChange={(e)=>{
                            actualizarCampo("edad",parseInt(e.target.value))
                        }}
                        required
                        />
                </div>
                <button type="submit" className="mt-4 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Registrar</button>
                <div>
                    <h4>Datos actuales: </h4>
                    <pre>
                        {JSON.stringify(usuario,null,2)}
                    </pre>
                </div>
            </div>
        </form>
    </div>
  )
}

export default ForumalrioUsuario
