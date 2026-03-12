import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CounterContextProvider from "./context/CounterContextProvider.jsx";
import UserContextProvider from "./context/UserContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  // Wrap root component with CounterContextProvider to provide context to the entire app
  <UserContextProvider>
  <CounterContextProvider>
    <App />
  </CounterContextProvider>
  </UserContextProvider>,
);
