import React, {useState} from 'react';
import {useScore} from "../../Context/Context";
import './form.scss'

const Form = () =>{
    const data = useScore();
    const [state, setState] = useState({
        nameOnePlayer: '',
        nameTwoPlayer: ''
    });

    const changeOnePlayer = (event) =>{
        setState({
            ...state, nameOnePlayer: event.target.value
        })
    }
    const changeTwoPlayer = (event) =>{
        setState({
            ...state, nameTwoPlayer: event.target.value
        })
    }
    const handelChange = (event) =>{
        event.preventDefault();
        data.players(state);
        setState({nameOnePlayer: '', nameTwoPlayer: ''});
        data.activeModal();
    }

    return(
        <form className='form_container' onSubmit={handelChange} >
            <input className='form_input' value={state.nameOnePlayer} onChange={changeOnePlayer} placeholder='Name player one ...' type="text"/>
            <input className='form_input' value={state.nameTwoPlayer} onChange={changeTwoPlayer} placeholder='Name player two ...' type="text"/>
            <input className='form_button' type="submit" value='Start Game'/>
        </form>
    )

}

export default Form;