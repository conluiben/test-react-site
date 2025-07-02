import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

export async function render() {
  const appHtml = renderToString(<App />);
  return { appHtml };
}
