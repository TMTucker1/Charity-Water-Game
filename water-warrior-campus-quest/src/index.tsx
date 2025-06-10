import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/main.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);

export interface Mission {
  id: number;
  campusId: string;
  type: string;
  title: string;
  description: string;
  reward: number;
  completed: boolean;
  content?: string; // <-- This must be present
}