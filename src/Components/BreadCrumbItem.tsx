import React from "react";
import { NavigationItem } from "../Types/ContextType";
import getNameByPath from "../Util/getNameByPath";

interface BreadCrumbItemProps {
  path: NavigationItem;
  isFirstItem: boolean;
  onClick: (id: string) => void;
}

const BreadCrumbItem: React.FC<BreadCrumbItemProps> = ({ path, isFirstItem, onClick }) => {
  return (
    <li className="breadcrumb__item">
      {!isFirstItem && <span className="material-symbols-outlined">arrow_back_ios</span>}

      <div
        className="breadcrumb__title"
        onClick={() => onClick(path.id)}>
        {getNameByPath(path.currentPath)}
      </div>
    </li>
  );
};

export default BreadCrumbItem;
