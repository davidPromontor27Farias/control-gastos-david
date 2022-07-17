import React from 'react'

export default function AlertaError({children, type}) {
  return (
    <div className={`alerta ${type}`}>
        {children}
    </div>
  )
}
