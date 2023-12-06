import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../404";
import Publications from "./publications";
import ResearchAreas from "./areas";
import ResearchFacilities from "./facilities";
import ResearchLabs from "./labs";
import ResearchProjects from "./projects.research";

const ResearchModule: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/publications" element={<Publications />} />
        <Route path="/areas" element={<ResearchAreas />} />
        <Route path="/facility" element={<ResearchFacilities />} />
        <Route path="/labs" element={<ResearchLabs />} />
        <Route path="/projects" element={<ResearchProjects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default ResearchModule;
