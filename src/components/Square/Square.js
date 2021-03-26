import React from 'react';
import './square.scss';

const Square = ({content, onClick, data, active}) =>{
    const cls = ['square-container'];
    if(active){
        cls.push('active')
    }

    return(
        <div className={cls.join(' ')} onClick={onClick} data={data}>
            {content}
        </div>
    )
}

export default Square;
