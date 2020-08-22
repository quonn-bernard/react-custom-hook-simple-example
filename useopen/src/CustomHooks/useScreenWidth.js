import { useState, useEffect } from "react";

const useScreenWidth = () => {
  
  // set state to track window size
  const [windowSize, setWindowSize] = useState("");

  useEffect(() => {

    // update windowSize on resize
    function handleChanges() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // add event listener to capture changes
    window.addEventListener("resize", handleChanges);

    // ensures that the screen width is always visible
    handleChanges();

    // removes event listeners before dismount
    return () => window.removeEventListener("resize, handleChange");

    // array ensures that contents of use effect are only fired once, when component is mounted
  }, []);

  //   returns window size for use outside of this component
  return { windowSize };
};

export default useScreenWidth;
