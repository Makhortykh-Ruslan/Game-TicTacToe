import React, {useEffect} from 'react';
import './game.scss';
import Field from "../Field/Field";
import {useScore} from "../../Context/Context";
import Modal from "../Modal/Modal";
import Form from "../Form/From";

const Game = () =>{
    const context = useScore();

    useEffect(() =>{
        context.activeModal()
    }, [])

    return(
        <div className='wrapper'>
            <Modal content={<Form  />} active={context.visible.activeModal} setActive={context.activeModal}/>
            <Field  />
            <div className='score-container'>
                <h3 className='content'>Score</h3>
                <p className='content'>1 {context.visible.nameOne}: {context.visible.playerOne}</p>
                <p className='content'>2 {context.visible.nameTwo}: {context.visible.playerTwo} </p>
            </div>
        </div>
    )

}

export default Game;