import { Route, Routes, useRoutes } from "react-router-dom";
import HomePage from "./page/Home";
import NotFoundPage from "./page/404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
