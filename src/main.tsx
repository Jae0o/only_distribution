import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { NavigationContextProvider } from "./Context/NavigationContext.tsx";
import TooltipTest from "./Components/TooltipTest.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NavigationContextProvider>
      <App />
      <TooltipTest />
    </NavigationContextProvider>
  </React.StrictMode>
);
