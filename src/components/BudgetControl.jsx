
import {useState, useEffect} from 'react';
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';




export default function BudgetControl({presupuesto, setPresupuesto, spents, setSpents, setIsValiedPresupuesto}) {
  
  const [available, setAvailable] = useState('');
  const [waste, setWaste] = useState('');
  const [porcent, setPorcent] = useState('');

  useEffect(()=>{

    //Calculamos el total gastado
    const amountSpents = spents.reduce((total, spent) => spent.amountSpent + total, 0);
    //calculamos el monto disponible
    const availableAmount = presupuesto - amountSpents;

    const porcentWaste = (((presupuesto - availableAmount)/ presupuesto) * 100).toFixed(2);
    

    setWaste(amountSpents);
    setAvailable(availableAmount)


    setTimeout(() => {
      setPorcent(porcentWaste)
    }, 1000);
   

  }, [spents])

  


  
  const formatQuantity = valor =>{

    return valor.toLocaleString('en-US',{
        style: 'currency',
        currency: 'USD'
    })
  }


  const resetApp = () =>{

    const answer  = confirm('¿Deseas Resetear la app?');

    if(answer){
      setPresupuesto(0);
      setSpents([]);
      setIsValiedPresupuesto(false);
    }
  }
  
  return (
    <div className="contain-budget sombra contain two-columns">

      <div className="graphics">
        <CircularProgressbar
          styles={buildStyles({
            pathColor: porcent > 100 ? '#C70039' : porcent >= 80 ? '#F1C40F' : '#1C2833',
            trailColor: '#F5F5F5',
            textColor: '#1a2b3b',
            textSize: '11px'
          })}
          value={porcent}
          text={`${porcent}% Gastado`}
        />;
      </div>

      <div className="contain-information">
        <button type="button" className="reset-app" onClick={resetApp}>
          Resetear App
        </button>

        <p> <span>Presupuesto: </span> {formatQuantity(presupuesto)} </p>
        <p> <span>Gastado: </span>{formatQuantity(waste)}</p>
        <p> <span>Dsiponible: </span>{formatQuantity(available)}</p>

      </div>
    </div>
  )
}
