import React, { useState } from 'react'
import AlertaError from './AlertaError';


export default function NewBudget({setIsValiedPresupuesto, presupuesto, setPresupuesto}) {
  
  const [mesage, setMesage] = useState('');

  const handleValidation = (e)=>{
    e.preventDefault();

    if(!presupuesto || presupuesto <=0){
      setMesage('No es un presupuesto valido')

      setTimeout(() => {
        setMesage('');
      }, 2000);

      
      return;
    }

  
    setIsValiedPresupuesto(true);
  }

  return (
    <>
      <div className="containBudget contain sombra">
          <form onSubmit={handleValidation} className='formulario' action="">

              <div className='campo'>
                  <legend>Digite un presupuesto</legend>
                  <input type="number" value={presupuesto} onChange={(e) => setPresupuesto(Number(e.target.value))} />
              </div>
              <input type="submit"  value="Añadir"/>

              {mesage && <AlertaError type='error'>{mesage}</AlertaError>}

          </form>

      </div>

      
    </>
  )
}
