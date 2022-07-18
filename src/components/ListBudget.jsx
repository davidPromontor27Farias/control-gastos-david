import Spent from './Spent';

export default function ListBudget({spents, setSpents, setEditSpent, deleteSpent, actualizarFiltro, filtro}) {

  return (
    <div className="contain">
      
      {filtro ? (
        <>
          <h2 className="title">{actualizarFiltro.length ? 'Gastos' : 'No hay un Gasto en esta seccion'}</h2>

          {  
            actualizarFiltro.map(spent => (
              <Spent
                spent={spent}
                key={spent.id}
                setEditSpent={setEditSpent}
                deleteSpent={deleteSpent}
              />
            ))
          } 
        </>
      ): (

        <>
          <h2 className="title">{spents.length ? 'Gastos' : 'Cree un gasto'}</h2>
          {
            spents.map(spent => (
              <Spent
                spent={spent}
                key={spent.id}
                setEditSpent={setEditSpent}
                deleteSpent={deleteSpent}
              />
            ))
          }
        </>
      )}
      

      
    </div>
  )
}
