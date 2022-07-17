import React, { useState, useEffect } from 'react';
import AlertaError from './AlertaError';
import IconoCerrar from '../img/cerrar.png';




export default function Modal({setModal, animatedModal, setAnimatedModal, saveSpent, editSpent, setEditSpent}) {
  
  //Creamos los states para cada campo
  const [nameSpent, setNameSpent] = useState('');
  const [amountSpent, setAmountSpent] = useState(0);
  const [category, setCategory] = useState('');
  
  const [alertWrong, setAlertWrong] = useState('');
  const [date, setDate] = useState('');
  const [id, setId] = useState('');


  useEffect(()=>{

    //if setSpent have something we need fill every space
    if(Object.keys(editSpent).length > 0){
      setNameSpent(editSpent.nameSpent);
      setAmountSpent(editSpent.amountSpent);
      setCategory(editSpent.category);
      setDate(editSpent.date);
      setId(editSpent.id);
    }

  }, [])




  
  
  const closeModal = () =>{
       
      setAnimatedModal(false);

      setTimeout(() => {
        setModal(false);
      }, 300);
    }

    const handleNuevoGasto = (e)=>{

        e.preventDefault();

        if([nameSpent, amountSpent, category].includes('')){

          setAlertWrong('Alguno de los campos esta vacio')
          setEditSpent({});
          setTimeout(() => {
            setAlertWrong('')
          }, 3000);

          return;
         
        }

        saveSpent({nameSpent, amountSpent, category, date, id})
        

        
        
    }


    return (
    <div className={`modal ${animatedModal ? 'animated' : 'close'}`}>
      
      <legend className="title-modal">{editSpent.nameSpent ? 'Editar Gasto': 'Agregar Nuevo Gasto'}</legend>

      <div className="close-modal">
        <img src={IconoCerrar} alt="icono cerrar" onClick={closeModal} />
      </div>

      <form action="" className="formulario contain sombra  form-modal" onSubmit={handleNuevoGasto}>
        <div className="campo">
            <legend htmlFor="nombre">Nombre Gasto:</legend>
            <input value={nameSpent} id="nombre" type="text" onChange={(e) => setNameSpent(e.target.value)} placeholder="Visita al medico" />
        </div>

        <div className="campo">
            <legend htmlFor="cantidad">Cantidad:</legend>
            <input id="cantidad" type="number" onChange={(e) => setAmountSpent(Number(e.target.value))} value={amountSpent}  />
        </div>

        <div className="campo">
            <legend htmlFor="categoria">Categoria:</legend>
            <select value={category} id="categoria"  onChange={(e) => setCategory(e.target.value)}>
                <option value="">-- Seleccione --</option>
                <option value="ahorro">Ahorro</option>
                <option value="comida">Comida</option>
                <option value="gastos">Gastos</option>
                <option value="ocio">Ocio</option>
                <option value="salud">Salud</option>
                <option value="suscripciones">Suscripciones</option>
            </select>
        </div>
        <input type="submit" value={editSpent.nameSpent ? 'Editar' : 'Agregar'} />
        { alertWrong && <AlertaError type='error'>{alertWrong}</AlertaError>}
      </form>


      
    </div>
  )
}
