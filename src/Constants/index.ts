import { NavigationInitialState } from "../Types/ContextType";

export const NAVIGATION_INITIAL_STATE: NavigationInitialState = {
  pathList: [],
  currentPath: "home",
  prevPath: ""
};

export const NAVIGATION_ACTION: {
  PUSH: "NAVIGATION_PUSH";
  POP: "NAVIGATION_POP";
  SLICE: "NAVIGATION_SLICE";
  INIT: "NAVIGATION_INIT";
} = {
  PUSH: "NAVIGATION_PUSH",
  POP: "NAVIGATION_POP",
  SLICE: "NAVIGATION_SLICE",
  INIT: "NAVIGATION_INIT"
};

export const MIN_OFFSET_PERCENTAGE = 40;

export const TOOLTIP_LEFT_PERCENTAGE = {
  MIN: 0,
  MAX: 100
};

export const LOCAL_STORAGE_NAVIGATION_KEY = "NAVIGATION_LOCAL_KEY_1237612";
export const LOCAL_STORAGE_ERROR_MESSAGE = {
  SET_NAVIGATION: "Local Storage 에 Navigation정보 업로드 중 실패",
  GET_NAVIGATION: "Local Storage 에 Navigation정보 불러오는 중 실패"
};
