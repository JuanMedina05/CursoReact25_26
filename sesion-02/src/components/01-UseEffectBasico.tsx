import React, { useEffect, useState } from 'react'

const UseEffectBasico = () => {
    // Hooks
    const [isTabActive, setIsTabActive] = useState(true);
  
    // Efectos
    useEffect(() => {
        const active = document.visibilityState === 'visible';
        setIsTabActive(active)
        document.title=active?"React 19":"VUELVE"
    return () => {
        
    }
    }, [])
    return (
    <div>
      
    </div>
  )
}

export default UseEffectBasico
