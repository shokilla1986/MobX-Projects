import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import StyledPage from "./pages/StyledPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/*" element={<ProjectsPage />} />
        <Route path="/styled-page" element={<StyledPage />} />
      </Routes>
    </div>
  );
}

export default App;
