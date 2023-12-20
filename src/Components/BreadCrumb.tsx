import { useContext } from "react";
import "../CSS/BreadCrumb.css";
import { NavigationContext } from "../Context/NavigationContext";
import BreadCrumbItem from "./BreadCrumbItem";

const BreadCrumb = () => {
  const { pathList, sliceNavigation } = useContext(NavigationContext);

  const onClickHandler = (id: string) => {
    sliceNavigation(id);
  };

  return (
    <ul className="breadcrumb">
      {pathList &&
        pathList.map((path, index) => (
          <BreadCrumbItem
            key={path.id}
            path={path}
            isFirstItem={index === 0}
            onClick={onClickHandler}
          />
        ))}
    </ul>
  );
};

export default BreadCrumb;
