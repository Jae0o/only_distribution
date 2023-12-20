import { NAVIGATION_INITIAL_STATE, NAVIGATION_ACTION } from "../Constants";
import { NavigationAction, NavigationInitialState } from "../Types/ContextType";
import { getLocalStorage, setLocalStorage } from "../Util/LocalStorage";

export default function reducer(state: NavigationInitialState, action: NavigationAction) {
  switch (action.type) {
    case NAVIGATION_ACTION.INIT: {
      const initState = getLocalStorage();

      return initState;
    }

    case NAVIGATION_ACTION.PUSH: {
      const { newPath } = action;
      const updatedList = [...state.pathList, newPath];

      const updatedState = {
        pathList: updatedList,
        currentPath: newPath.currentPath,
        prevPath: newPath.prevPath
      };

      setLocalStorage(updatedState);
      return updatedState;
    }

    case NAVIGATION_ACTION.POP: {
      const slicedList = state.pathList.slice(0, -1);

      if (slicedList.length) {
        const { currentPath, prevPath } = slicedList[slicedList.length - 1];

        const updatedState = {
          pathList: slicedList,
          currentPath: currentPath,
          prevPath: prevPath
        };

        setLocalStorage(updatedState);
        return updatedState;
      }

      setLocalStorage(NAVIGATION_INITIAL_STATE);
      return NAVIGATION_INITIAL_STATE;
    }

    case NAVIGATION_ACTION.SLICE: {
      const index = state.pathList.findIndex((path) => path.id === action.id);

      const isCurrentPath = state.pathList[index].currentPath === state.currentPath;
      if (isCurrentPath) {
        return state;
      }

      const slicedList = state.pathList.slice(0, index + 1);
      const { currentPath, prevPath } = slicedList[slicedList.length - 1];

      const updatedState = {
        pathList: slicedList,
        currentPath: currentPath,
        prevPath: prevPath
      };

      setLocalStorage(updatedState);
      return updatedState;
    }

    default:
      return state;
  }
}
