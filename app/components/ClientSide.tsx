'use client';
import './styles.css';
import React, { useState } from 'react';

interface ModalProps {
  showModal: boolean;
  modal: {
    title: string;
    body: string;
  };
}

const Modal: React.FC<ModalProps> = ({ showModal, modal }) => {
  return (
    <div className="modal">
      <h5 className="modal-title">{modal.title}</h5>
      {showModal ? <p className="modal-body">{modal.body}</p> : null}
    </div>
  );
};

const ClientSide: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modal, setModal] = useState({
    title: 'Did you know that...',
    body: `there was a HUGE SHIFT of global energyfields in 1991, 4th of February.
    In that year the New Messiah was born somewhere in the west coast of Finland.`
  });

  return (
    <section className="container">
      <h3 className="title">Client Side Component</h3>

      <div onClick={() => setShowModal((prev) => !prev)} className="modal">
        <Modal showModal={showModal} modal={modal} />
      </div>
    </section>
  );
};

export default ClientSide;
