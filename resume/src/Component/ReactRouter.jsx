import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Edu from "./Edu";
import Skills from "./Skills";
import Login from "./Login";
import PageNotFounf from "./PageNotFounf";
import Basic from "./Basic";
import Resume from "./Resume";
function ReactRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Basic />} />
        <Route path="/edu" element={<Edu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/skill" element={<Skills />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<PageNotFounf />} />
      </Routes>
    </>
  );
}

export default ReactRouter;
