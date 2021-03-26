import React from 'react';
import './modal.scss';

const Modal = ({content, setActive, active}) =>{

    return(
        <section onClick={() => setActive(false)} className={active ? 'modal_container modal_active' : 'modal_container'}>
            <div className='modal_content' onClick={(event) => event.stopPropagation()}>
                <div className='header-modal'>
                    <div onClick={() => setActive(false)} className='button'>X</div>
                </div>
                <div className='modal_values'>
                    {content}
                </div>
            </div>

        </section>
    )

}

export default Modal;