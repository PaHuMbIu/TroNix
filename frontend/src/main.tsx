import ReactDOM from "react-dom/client";
import { StrictMode } from "react";

// import { init } from './init';
import { App } from "./app/App.tsx";
import "@/app/index.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);

// await init();

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
