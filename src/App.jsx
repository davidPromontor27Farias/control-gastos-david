import { useState, useEffect } from 'react';
import Header from './components/Header';
import ListBudget from './components/ListBudget';
import Modal from './components/Modal';
import IconAdd from './img/mas.png';
import { CreateId } from './Helpers';
import Filtro from './components/Filtro';


function App() {
  
  const [presupuesto, setPresupuesto] = useState(Number(localStorage.getItem('presupuesto')) ?? 0);
  const [isValiedPresupuesto, setIsValiedPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animatedModal, setAnimatedModal] = useState(false);
  const [spents, setSpents] = useState(JSON.parse(localStorage.getItem('spents')) ?? []);
  const [editSpent, setEditSpent] = useState({});
  const [filtro, setFiltro] = useState('');
  const [actualizarFiltro, setActualizarFiltro] = useState([]);


  //Comprabmos que hay una edicion con un UseEffect
  useEffect(() =>{
    if(Object.keys(editSpent).length > 0){

      setModal(true);

      setTimeout(() => {
        setAnimatedModal(true);
      }, 300);
    }

  }, [editSpent]);


  //Enviamos nuestro presupuesto al local storage
  useEffect(()=>{

    localStorage.setItem('presupuesto', presupuesto ?? 0);

  }, [presupuesto])

  useEffect(()=>{
    const presupuestoLS = localStorage.getItem('presupuesto' ?? 0);
    if(presupuestoLS > 0){
      setIsValiedPresupuesto(true);
    }

  }, [])


  //Enviamos los gastos al local storage
  useEffect(()=>{
    localStorage.setItem('spents', JSON.stringify(spents) ?? []);
  }, [spents]);

  useEffect(()=>{
    if(filtro){

      const filtroActualizar = spents.filter(spent => spent.category === filtro );
      setActualizarFiltro(filtroActualizar);
    }

  }, [filtro]);





  const handleModal = ()=>{
    setModal(true);
    setEditSpent({});
    setTimeout(() => {
      setAnimatedModal(true);
    }, 300);
  }

  const saveSpent = (spent) => {


    //verificamos si el gasto tiene un id pra editarlo
    if(spent.id){

      //Si ya tiene un id asignado, entonces que nos traiga solo los datos para editarlos
      const gastosActualizados = spents.map( spentState => spentState.id === spent.id ? spent : spentState);

      setSpents(gastosActualizados);
    }
    else{
      //Le generamos una fecha in id
      spent.date = Date.now();
      spent.id = CreateId();

      setSpents([...spents, spent]);
    }

    setAnimatedModal(false);
    setAnimatedModal({});
    setTimeout(() => {
      setModal(false);
    }, 300);



  }
  
  const deleteSpent = (id)=>{
    //Filtramos para    que solo  nos traiga al que sea diferente de el id que queremos eliminar
    const refreshSpent = spents.filter(spent => spent.id !==  id);

    setSpents(refreshSpent);
  }


  return (
    <div className={modal ? 'fixed' : ''}>
      
      {isValiedPresupuesto && <Filtro
                              filtro={filtro}
                              setFiltro={setFiltro}
      />
      }
      
      <Header
        presupuesto={presupuesto}
        spents={spents}
        setSpents={setSpents}
        setPresupuesto={setPresupuesto}
        isValiedPresupuesto={isValiedPresupuesto}
        setIsValiedPresupuesto={setIsValiedPresupuesto}

      />
      {isValiedPresupuesto ? (

        <>
          <main className='contain-listado'>
            <ListBudget
              spents={spents}
              setSpents={setSpents}
              setEditSpent={setEditSpent}
              deleteSpent={deleteSpent}
              actualizarFiltro={actualizarFiltro}
              filtro={filtro}
            />
          </main>

          <div className="new-spent">
            <img src={IconAdd} alt="Icono nuevo gasto" onClick={handleModal} />
          </div>
        
        </>


      ): null}

      {modal && <Modal
        setModal={setModal}
        animatedModal={animatedModal}
        setAnimatedModal={setAnimatedModal}
        saveSpent={saveSpent}
        editSpent={editSpent}
        setEditSpent={setEditSpent}
      />}

    </div>
  )
}

export default App
