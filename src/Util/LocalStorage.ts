import {
  LOCAL_STORAGE_ERROR_MESSAGE,
  LOCAL_STORAGE_NAVIGATION_KEY,
  NAVIGATION_INITIAL_STATE
} from "../Constants";
import { NavigationInitialState } from "../Types/ContextType";

export const setLocalStorage = (state: NavigationInitialState) => {
  try {
    localStorage.setItem(LOCAL_STORAGE_NAVIGATION_KEY, JSON.stringify(state));
  } catch (e) {
    throw new Error(LOCAL_STORAGE_ERROR_MESSAGE.SET_NAVIGATION);
  }
};

export const getLocalStorage = () => {
  try {
    const storageData = localStorage.getItem(LOCAL_STORAGE_NAVIGATION_KEY);

    if (storageData) {
      return JSON.parse(storageData);
    }

    return NAVIGATION_INITIAL_STATE;
  } catch (e) {
    throw new Error(LOCAL_STORAGE_ERROR_MESSAGE.GET_NAVIGATION);
  }
};
