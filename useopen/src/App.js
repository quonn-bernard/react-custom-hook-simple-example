import React from "react";
import useOpen from "./CustomHooks/useOpen";
import { FaBars } from "react-icons/fa";
import {sideBarStyles, buttonStyles} from "./Assets/styles";

function App() {
  const { isOpen, toggle } = useOpen();
  const renderSideBar = () => {
    return (
      <div style={{...sideBarStyles, left: isOpen ? "0" : "-1000px"}}>
        <h1>SIDEBAR</h1>
      </div>
    );
  };
  return (
    <div className="App">
      {renderSideBar()}
      <div style={buttonStyles}>
        <FaBars size="3rem" onClick={toggle} />
      </div>
    </div>
  );
}

export default App;
