import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ConsomToast = ({cloasToast})=> {
  return (
    <div>
      <h2>Somthing went wrong!</h2>
      <button onClick={cloasToast}>Close</button>
    </div>
  )
}

toast.configure();
const ReactTostyfi = () => {
  const notify = () => {
    toast("Basic Toast", {
      position: toast.POSITION.TOP_LEFT,
    });
    toast.success("Success Toast", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 8000
    });
    toast.info("Info Toast", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: false
    });
    toast.warning("Warning Toast", {
      position: toast.POSITION.BOTTOM_LEFT
    });
    toast.error(<ConsomToast />, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    toast("Basic Toast", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };
  return (
    <div>
      <button onClick={notify}>Notify</button>
    </div>
  );
};

export default ReactTostyfi;
