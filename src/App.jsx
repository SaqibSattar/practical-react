import { useState } from 'react'
import Modal from 'react-modal';


// Make sure to bind modal to your appElement
Modal.setAppElement('#root');

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => { setModalIsOpen(true)}}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => { setModalIsOpen(false)}}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <button onClick={() => { setModalIsOpen(false)}}>close</button>
        <div>I am a modal</div>
      </Modal>
    </div>
  );
}

export default App
