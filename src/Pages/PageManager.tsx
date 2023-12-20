import { useContext, useEffect, useState } from "react";
import "../CSS/PageManager.css";
import HomePage from "./HomePage";
import { NavigationContext } from "../Context/NavigationContext";
import getElementByPath from "../Util/getElementByPath";
import useMouseDrag from "../Hooks/useMouseDrag";

const PageManager = () => {
  const [currentElement, setCurrentElement] = useState<JSX.Element>(<HomePage />);
  const [prevElement, setPrevElement] = useState<JSX.Element | null>();
  const { currentPath, prevPath, popNavigation } = useContext(NavigationContext);
  const { offsetX, mouseDownHandler } = useMouseDrag(popNavigation);

  useEffect(() => {
    const convertedElement = getElementByPath(currentPath);
    setCurrentElement(convertedElement);
  }, [currentPath]);

  useEffect(() => {
    if (prevPath) {
      const convertedElement = getElementByPath(prevPath);
      setPrevElement(convertedElement);
      return;
    }
    setPrevElement(null);
  }, [prevPath]);

  const activeStyle = {
    transform: `translate(${prevElement ? offsetX : 0}%)`,
    boxShadow: offsetX ? "0px 0px 4px 2px rgba(0,0,0,0.5)" : "none"
  };

  return (
    <section
      className="manager"
      onMouseDown={mouseDownHandler}>
      {prevElement && <div className="manager__prev">{prevElement}</div>}
      <div
        style={{ ...activeStyle }}
        className="manager__current">
        {currentElement}
      </div>
    </section>
  );
};

export default PageManager;
