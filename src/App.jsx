import { Route, Routes } from "react-router-dom";
import HomePage from "./page/Home";
import NotFoundPage from "./page/404";
import Login from "./page/register/Login";
import LayoutSearch from "./Components/LayoutSearch";
import HotelList from "./Components/HotelList";
import HotelsProvider from "./context/HotelsProvider";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/hotels" element={<LayoutSearch />}>
          <Route index element={<HotelList />} />
          <Route path=":id" element={<div>single hotels</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
