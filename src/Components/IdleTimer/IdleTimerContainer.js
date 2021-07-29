import React, { useRef, useState } from "react";
import IdeleTimer from "react-idle-timer";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");
const IdleTimerContainer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const idelTimerRef = useRef(null);
  const sessionTimerRef = useRef(null)
  const onIdle = () => {
    console.log("user is idle");
    setModalIsOpen(true);
  };

  const logOut = () => {
      setModalIsOpen(false)
      setIsLoggedIn(false)
      console.log('User Logged out');
      sessionTimerRef.current = setTimeout(logOut, 5000)
  };
  const stayActive = () => {
      setModalIsOpen(false)
      clearTimeout(sessionTimerRef.current)
      console.log('user is active')
  };
  return (
    <div>
      {isLoggedIn ? <h2>Hello, Nihal</h2> : <h2>Hello Guest</h2>}
      <ReactModal isOpen={modalIsOpen}>
        <h2>You've been idle for a while!</h2>
        <p>You will be logged out soon</p>
        <div>
          <button onClick={logOut}>Log me out</button>
          <button onClick={stayActive}>Keep me signed in</button>
        </div>
      </ReactModal>
      <IdeleTimer ref={idelTimerRef} timeout={5 * 1000} onIdle={onIdle} />
    </div>
  );
};

export default IdleTimerContainer;
