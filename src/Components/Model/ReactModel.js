import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement('#root')
const ReactModel = () => {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setmodalIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setmodalIsOpen(false)}
        style={{
            overlay: {
                backgroundColor: 'gray'
            },
            content: {
                color: 'red',
                backgroundColor: '#f0f0f0'
            }
        }}
      >
        <h2>Model Title</h2>
        <p>Model body</p>
        <div>
          <button onClick={() => setmodalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default ReactModel;
