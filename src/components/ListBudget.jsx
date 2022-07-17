import Spent from './Spent';

export default function ListBudget({spents, setSpents, setEditSpent, deleteSpent}) {

  return (
    <div className="contain">
      <h2 className="title">{spents.length ? 'Administre sus gastos': 'Cree un Nuevo Gasto'}</h2>
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


      
    </div>
  )
}
