import React, { useCallback, useContext, useMemo } from "react";
import "../CSS/Navbar.css";
import { NavigationContext } from "../Context/NavigationContext";
import getNameByPath from "../Util/getNameByPath";
import createNewId from "../Util/createNewId";
import Tooltip from "./Tooltip";

const Navbar: React.FC = () => {
  const { currentPath, prevPath, popNavigation, pushNavigation } = useContext(NavigationContext);

  const pushNavigationHandler = useCallback(() => {
    if (currentPath === "home") return;

    const newPath = {
      currentPath: "home",
      prevPath: currentPath,
      id: createNewId()
    };

    pushNavigation(newPath);
  }, [currentPath, pushNavigation]);

  // 과한 최적화 ?? ...
  const prevPathName = useMemo(() => getNameByPath(prevPath), [prevPath]);
  const currentPathName = useMemo(() => getNameByPath(currentPath), [currentPath]);

  return (
    <nav className="nav">
      <div className="nav__prev-container">
        {prevPath && (
          <Tooltip info={`이전 페이지로 이동! ${prevPathName}로 이동`}>
            <button
              onClick={popNavigation}
              className="nav__prev-button">
              <span className="material-symbols-outlined">arrow_back_ios</span>
              {prevPathName}
            </button>
          </Tooltip>
        )}
      </div>

      <h2 className="nav__title">{currentPathName}</h2>
      <div className="nav__home-container">
        <Tooltip info="Home으로 이동 가능한 버튼 입니다!">
          <button
            className="nav__home-button"
            onClick={pushNavigationHandler}>
            Home
          </button>
        </Tooltip>
      </div>
    </nav>
  );
};

export default Navbar;
