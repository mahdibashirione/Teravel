import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Style/index.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import TargetProvider from "./context/TargetProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <TargetProvider>
        <Layout>
          <App />
        </Layout>
      </TargetProvider>
    </BrowserRouter>
  </React.StrictMode>
);
