import React from 'react'
import { FormatDate } from '../Helpers';
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
  } from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import IconFoot from '../img/comida.png';
import IconSpent from '../img/gasto.png';
import IconOcio from '../img/ocio.png';
import IconHealth from '../img/salud.png';
import IconSuscription from '../img/suscripciones.png';
import IconSaving from '../img/ahorro.png';

const imageDictionary = {

    ahorro: IconSaving,
    comida: IconFoot,
    gastos: IconSpent,
    ocio: IconOcio,
    salud: IconHealth,
    suscripciones: IconSuscription
}


export default function Spent({spent, setEditSpent, deleteSpent}) {

    const {nameSpent, amountSpent, category, id, date} = spent;


    const leadingActions = ()=>(
        <LeadingActions>
            <SwipeAction onClick={()=> setEditSpent(spent)}>
                Editar
            </SwipeAction>
        </LeadingActions>
    );

    const trailingActions = ()=>(
        <TrailingActions>
            <SwipeAction
                onClick={()=> deleteSpent(id)}
                destructive={true}
              
            >
                Eliminar
            </SwipeAction>
        </TrailingActions>
    );



    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className="sombra spent">
                    <div className="contain-spent">

                        <img src={imageDictionary[category]} className="icons-spent" alt="icono gasto" />


                        <div className="description-spent">
                            <p className="category">
                                {category}
                            </p>

                            <p className="name-spent">
                                {nameSpent}
                            </p>

                            <p className="date-spent">
                                Agregado el {' '} <span>{FormatDate(date)}</span>
                            </p>
                        </div>
                    </div>
                    <p className="amount-spent">${amountSpent}</p>
                    
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}
