import React, { useState } from 'react'
import Boton from './Boton';

interface Credenciales {
    email: string;
    password: string;
}

const FormularioLogin = () => {
    // Hooks
    const [credenciales, setCredenciales] = useState<Credenciales>(
        {email:"",
        password:""}
    );
    const [errores, setErrores] = useState({email:"", password:""});
    const [showPswd,setShowPswd] = useState(false);

    // Efectos

    // Funciones
    const emailValido = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validarFormulario=():boolean=>{
        if(!credenciales.email.trim()){
            setErrores({...errores, email:"El email es obligatorio"});
            return false;
        }else if(!emailValido(credenciales.email)){
            setErrores({...errores, email:"El email no es válido"});
            return false;
        }if(credenciales.password.length < 6){
            setErrores({...errores, password:"La contraseña debe tener al menos 6 caracteres"});
            return false;
        }else if(!credenciales.password.trim()){
            setErrores({...errores, password:"La contraseña es obligatoria"});
            return false;
        }
        return true;
    }
    function handleSubmit(e:React.FormEvent){
        e.preventDefault();
        if(validarFormulario()){
            console.log("Formulario enviado", credenciales);
            alert(`Login exitoso con email: ${credenciales.email}`);
        }
    }
    
  return (
    <div className="max-w-md mx-auto p-6 bg-amber-100 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Email: </label>
                <input 
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    type="email"
                    placeholder="tu@email.com"
                    value={credenciales.email}
                    onChange={(e)=>setCredenciales({ ...credenciales, email:e.target.value })}
                />
            </div>
            <div>
                <label>Password: </label>
                <input 
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    type={showPswd ? "text" : "password"}
                    placeholder="Introduzca su contraseña"
                    value={credenciales.password}
                    onChange={(e)=>setCredenciales({ ...credenciales, password:e.target.value })}  
                />
            </div>
            <button 
                type="button"
                onClick={()=>setShowPswd(!showPswd)}
            >Mostrar contraseña</button>
            <Boton tipo="primary" onClick={()=>handleSubmit} texto="enviar" submit={true}/>
        </form>
    </div>
  )
}
// Función que valore que la longitud del pswd sea mayor a 6 caracteres
// y que el email tenga un formato válido

export default FormularioLogin
