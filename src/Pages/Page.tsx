import React, { useCallback, useContext } from "react";
import "../CSS/Page.css";
import { NavigationItem } from "../Types/ContextType";
import { NavigationContext } from "../Context/NavigationContext";
import createNewId from "../Util/createNewId";
import Tooltip from "../Components/Tooltip";

interface PageProps {
  id: number;
}
const Page: React.FC<PageProps> = ({ id }) => {
  const { pushNavigation } = useContext(NavigationContext);

  const moveNextPage = useCallback(() => {
    const newPath: NavigationItem = {
      currentPath: `page/${id + 1}`,
      prevPath: `page/${id}`,
      id: createNewId()
    };
    pushNavigation(newPath);
  }, [pushNavigation, id]);

  return (
    <article className="page">
      <div className="page__container">
        <h4 className="page__title">{`${id} Page 일걸요?..`}</h4>

        <Tooltip
          pointer={true}
          info={`다음 페이지 ${id + 1} 페이지로 이동합니다!`}>
          <button
            className="page__button"
            onClick={moveNextPage}>
            {`Next Page ${id + 1}`}
          </button>
        </Tooltip>
      </div>
    </article>
  );
};

export default Page;
