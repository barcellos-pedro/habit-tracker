import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CadenceApp } from "@/components/cadence/app";
import { ThemeSync } from "@/components/cadence/theme-toggle";
import "./styles.css";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Missing #root element");

createRoot(rootElement).render(
  <StrictMode>
    <ThemeSync />
    <CadenceApp />
  </StrictMode>,
);
