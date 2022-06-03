import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import TodosPage from "./TodosPage";
import LikesPage from "./LikesPage";

const ProjectsPage = () => {
  return (
    <div className="projects">
      <div className="leftDiv">
        <h1>ProjectsPage</h1>
        <Link to="todos">TodosPage</Link>
        <Link to="likes">LikesPage</Link>
      </div>
      <div className="rightDiv">
        <Routes>
          <Route path="todos" element={<TodosPage />} />
          <Route path="likes" element={<LikesPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default ProjectsPage;
