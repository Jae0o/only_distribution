import { ReactNode } from "react";

export interface NavigationItem {
  currentPath: string;
  prevPath: string;
  id: string;
}
export interface NavigationInitialState {
  pathList: NavigationItem[];
  currentPath: string;
  prevPath: string;
}

export type NavigationAction =
  | {
      type: "NAVIGATION_INIT";
    }
  | {
      type: "NAVIGATION_PUSH";
      newPath: NavigationItem;
    }
  | { type: "NAVIGATION_POP" }
  | {
      type: "NAVIGATION_SLICE";
      id: string;
    };

export type PushNavigation = (newPath: NavigationItem) => void;
export type PopNavigation = () => void;
export type SliceNavigation = (id: string) => void;
export interface NavigationValue {
  pathList: NavigationItem[];
  currentPath: string;
  prevPath: string;
  pushNavigation: PushNavigation;
  popNavigation: PopNavigation;
  sliceNavigation: SliceNavigation;
}

export interface ContextProps {
  children: ReactNode;
}
