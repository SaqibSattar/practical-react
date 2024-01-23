import { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

function App() {
  return (
    <>
    <div style={{ paddingBottom: '20px'}}>
    <Tippy arrow={false} delay={1000} content="Basic Tooltip">
    <button>Hover me</button>
    </Tippy>
    </div>
    <div style={{ paddingBottom: '20px'}}>
    <Tippy placement="bottom-start" content={<span style={{ color: "orange" }}>Basic Tooltip with color</span> }>
    <button>Hover me</button>
    </Tippy>
    </div>
    </>
  );
}

export default App;
