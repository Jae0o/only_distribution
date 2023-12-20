import { createContext, useCallback, useEffect, useReducer } from "react";
import {
  ContextProps,
  NavigationValue,
  PushNavigation,
  SliceNavigation
} from "../Types/ContextType";
import reducer from "../Reducer/NavigationReducer";
import { NAVIGATION_ACTION, NAVIGATION_INITIAL_STATE } from "../Constants";

export const NavigationContext = createContext<NavigationValue>({
  pathList: [],
  currentPath: "",
  prevPath: "",
  pushNavigation: () => {},
  popNavigation: () => {},
  sliceNavigation: () => {}
});

export const NavigationContextProvider: React.FC<ContextProps> = ({ children }) => {
  const [navigation, dispatch] = useReducer(reducer, NAVIGATION_INITIAL_STATE);

  useEffect(() => {
    dispatch({ type: NAVIGATION_ACTION.INIT });
  }, []);

  const pushNavigation: PushNavigation = useCallback((newPath) => {
    dispatch({ type: NAVIGATION_ACTION.PUSH, newPath });
  }, []);

  const popNavigation = useCallback(() => {
    dispatch({ type: NAVIGATION_ACTION.POP });
  }, []);

  const sliceNavigation: SliceNavigation = useCallback((id) => {
    dispatch({ type: NAVIGATION_ACTION.SLICE, id });
  }, []);

  return (
    <NavigationContext.Provider
      value={{
        pathList: navigation.pathList,
        currentPath: navigation.currentPath,
        prevPath: navigation.prevPath,
        pushNavigation,
        popNavigation,
        sliceNavigation
      }}>
      {children}
    </NavigationContext.Provider>
  );
};
