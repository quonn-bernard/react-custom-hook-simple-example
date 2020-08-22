import React from "react";
import useOpen from "./CustomHooks/useOpen";
import useScreenWidth from "./CustomHooks/useScreenWidth";
import { FaBars } from "react-icons/fa";
import {sideBarStyles, buttonStyles} from "./Assets/styles";

function App() {
  const { isOpen, toggle } = useOpen();
  const {windowSize} = useScreenWidth();

  const renderSideBar = () => {
    return (
      <div style={{...sideBarStyles, left: isOpen ? "0" : "-1000px"}}>
        <h1>SIDEBAR</h1>
      </div>
    );
  };
  return (
    <div className="App">
      {windowSize.width < 768 && renderSideBar()}
      <div style={buttonStyles}>
        <FaBars size="3rem" onClick={toggle} />
         <h3>Screen Width: <span className='blue-text'>{windowSize.width}</span></h3>
         {windowSize.width < 768 ? <h3>SideBar isOpen: <span className='blue-text'>{isOpen.toString()}</span></h3> : <h3 className={'light-grey-text'}>SideBar Hidden</h3>}
      </div>
    </div>
  );
}

export default App;
