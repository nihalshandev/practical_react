import React, {forwardRef} from "react";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

const ColoredToolTip = () => {
  return (
    <span
      style={{
        color: "yellow",
      }}
    >
      Colored Component
    </span>
  );
};

const CostomChild = forwardRef( (props, ref)=> {
    return (
        <div ref={ref}>
            <div>First line</div>
            <div>Secod line</div>
        </div>
    )
})

const ToolTip = () => {
  return (
    <div>
      <div
        style={{
          paddingBottom: "20px",
        }}
      >
        <Tippy content="Basic ToolTip" arrow={false} delay={1000} placement='right'>
          <button>Hover</button>
        </Tippy>
      </div>
      <div
        style={{
          paddingBottom: "20px",
        }}
      >
        <Tippy content={<span style={{ color: "orange" }}>Colored</span>}>
          <button>Hover</button>
        </Tippy>
      </div>
      <div
        style={{
          paddingBottom: "20px",
        }}
      >
        <Tippy content={<ColoredToolTip/>} placement='top-start'>
          <button>Hover</button>
        </Tippy>
    </div>
      <div
        style={{
          paddingBottom: "20px",
        }}
      >
        <Tippy content={<ColoredToolTip/>}>
          <CostomChild />
        </Tippy>
      </div>
    </div>
  );
};

export default ToolTip;
