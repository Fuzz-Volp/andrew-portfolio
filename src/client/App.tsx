import React, { useEffect, useReducer, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import routes from "./config/routes";
import Login from "./pages/Admin/Login";

import logging from "./config/logging";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div className="app ">
      <Navbar />

      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer title={"Andrew Thompson Art"} />
    </div>
  );
};

export default App;
