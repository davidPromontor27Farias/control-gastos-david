import React from 'react'

export default function Filtro({filtro, setFiltro}) {
  return (
    <div className="contain-filter">
        <div className="campo contain searching">
            <legend htmlFor="categoria">Filtrar Gastos:</legend>
            <select value={filtro} id="categoria"  onChange={e => setFiltro(e.target.value)}>
                <option value="">-- Todas las categorias --</option>
                <option value="ahorro">Ahorro</option>
                <option value="comida">Comida</option>
                <option value="gastos">Gastos</option>
                <option value="ocio">Ocio</option>
                <option value="salud">Salud</option>
                <option value="suscripciones">Suscripciones</option>
            </select>
        </div>
    </div>
    
  )
}
