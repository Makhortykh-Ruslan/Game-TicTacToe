import React, {useState, useContext} from 'react';

const ScoreContext = React.createContext();
export const useScore = () =>{
    return useContext(ScoreContext)
}

const GameContext = ({children}) =>{
    const [state, setState] = useState({
        playerOne: 0,
        playerTwo: 0,
        nameOne: '',
        nameTwo: '',
        activeModal: false

    });

    const increment = (activeWord) =>{
        if(activeWord === 'X'){
            setState({...state, playerOne: state.playerOne + 1})
        }
        if(activeWord === 'O'){
            setState({...state, playerTwo: state.playerTwo + 1})
        }
    };
    const activeModal = () =>{
        setState({...state, activeModal: !state.activeModal});
    }
    const players = (data) =>{
        setState({
            ...state, nameOne: state.nameOne = data.nameOnePlayer, nameTwo: state.nameTwo = data.nameTwoPlayer
        })
    }

    return(
        <ScoreContext.Provider value={{
            visible: state,
            increment,
            playerName: state.name,
            activeModal,
            players,

        }} >
            {children}
        </ScoreContext.Provider>
    )

}
export default GameContext;

