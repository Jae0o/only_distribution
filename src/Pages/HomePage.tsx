import { useCallback, useContext } from "react";
import "../CSS/HomePage.css";
import { NavigationContext } from "../Context/NavigationContext";
import { NavigationItem } from "../Types/ContextType";
import createNewId from "../Util/createNewId";
import Tooltip from "../Components/Tooltip";

const HomePage = () => {
  const { pushNavigation } = useContext(NavigationContext);

  const moveNextPage = useCallback(() => {
    const newPath: NavigationItem = {
      currentPath: "page/1",
      prevPath: "home",
      id: createNewId()
    };
    pushNavigation(newPath);
  }, [pushNavigation]);

  return (
    <section className="home">
      <div className="home__container">
        <h1 className="home__title">Home Page </h1>
        <Tooltip
          info="화살표 없는 Tooltip"
          pointer={false}>
          <button
            className="home__button"
            onClick={moveNextPage}>
            Next Page
          </button>
        </Tooltip>
      </div>
    </section>
  );
};

export default HomePage;
