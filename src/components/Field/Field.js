import React, { useState} from 'react';
import './field.scss'
import Square from "../Square/Square";
import {logicWin} from './logicWin';
import {v4 as uuidv4} from 'uuid'
import {useScore} from "../../Context/Context";
import Modal from "../Modal/Modal";


const Field = () =>{
    const context = useScore();
    const [modal, setModal] = useState(false)
    const [state, setState] =useState({
        arrSquares: Array(9).fill({
            value: null,
            active: false
        }),
        count: 0,
        activeModal: false,
    });

    const winnerPlayer = (current) =>{
        const activeSymbol = state.count % 2 === 0 ? 'X' : 'O';
        const result = logicWin.forEach((item, index) =>{
            const line = logicWin[index];
            if(current[line[0]].value === activeSymbol && current[line[1]].value === activeSymbol && current[line[2]].value === activeSymbol){
                current[line[0]].active = true
                current[line[1]].active = true
                current[line[2]].active = true
                setState({
                    ...state,
                    arrSquares: current
                });

                context.increment(activeSymbol)

                setTimeout(()=>{
                    setState({...state, arrSquares: Array(9).fill({value: null, active: false}), count: 0})
                }, 500);
            }

            if(state.count === 7){
                setModal(true)
                setTimeout(()=>{
                    setState({...state, arrSquares: Array(9).fill({value: null, active: false}), count: 0})
                    setModal(false)
                }, 1000)
            }

        })

    };

    const handelClick = (event) =>{
        let data = event.target.getAttribute('data');
        let current = JSON.parse(JSON.stringify(state.arrSquares))
        if(current[data].value === null){
            current[data].value = state.count % 2 === 0 ? 'X' : 'O';
            winnerPlayer(current)
            setState({
                ...state,
                arrSquares: current,
                count: state.count + 1
            })

        }

    }


    const showSquare = state.arrSquares.map((item, index) =>
        <Square active={item.active} key={uuidv4()} content={item.value} onClick={handelClick} data={index} />)

    return(
        <div className='field-container'>
            {showSquare}
            {console.log(state)}
            {modal ? <Modal content={'Н И Ч Ь Я'} active={true} /> : null}
        </div>
    )

}

export default Field;