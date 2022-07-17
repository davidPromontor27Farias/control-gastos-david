import BudgetControl from "./BudgetControl"
import NewBudget from "./NewBudget"

export default function Header({setIsValiedPresupuesto, isValiedPresupuesto, presupuesto, setPresupuesto, spents, setSpents}) {
  return (

    
    <header className="header">
        <h1>Planeador de Gastos</h1>
        
        {isValiedPresupuesto ? (
          <BudgetControl
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            spents={spents}
            setSpents={setSpents}

          />

        ):
        (
          <NewBudget
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValiedPresupuesto={setIsValiedPresupuesto}
        />
        )}
        
    
    </header>
  )
}
