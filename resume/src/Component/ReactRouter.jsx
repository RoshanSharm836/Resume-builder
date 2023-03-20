import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Edu from "./Edu";
import Skills from "./Skills";
import Login from "./Login";
import PageNotFounf from "./PageNotFounf";
import Basic from "./Basic";
import Project from "./Project";
import Resumes from "./Resumes";
import LandingPage from "./LandingPage";
import Basictwo from "./Basictwo";
function ReactRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/basic" element={<Basic />} />
        <Route path="/basicTwo" element={<Basictwo />} />
        <Route path="/edu" element={<Edu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/skill" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/resume/:id" element={<Resumes />} />
        <Route path="*" element={<PageNotFounf />} />
      </Routes>
    </>
  );
}

export default ReactRouter;
