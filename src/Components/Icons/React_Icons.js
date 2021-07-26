import React from "react";
import { IconContext } from "react-icons";
import { FaReact } from "react-icons/fa";
import { MdAlarmOn } from "react-icons/md";

const React_Icons = () => {
  return (
    <div>
      <IconContext.Provider
        value={{
          color: "blue",
          size: "5rem",
        }}
      >
        <FaReact />
        <MdAlarmOn size='10rem' />
      </IconContext.Provider>
    </div>
  );
};

export default React_Icons;
