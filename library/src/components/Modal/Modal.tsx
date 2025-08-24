import React from 'react';
import './Modal.css';

interface ModalProps{
    toggleModal:()=>void;
    content:React.ReactNode;
}

export const Modal:React.FC<ModalProps> = ({toggleModal, content}) => {
    return(
        <div className="modal-bg" onClick={toggleModal}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <h5 className="modal-exit" onClick={toggleModal}>✕</h5>
                {content}
            </div>
        </div>
    )
}