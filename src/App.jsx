import { Route, Routes } from "react-router-dom";
import HomePage from "./page/Home";
import NotFoundPage from "./page/404";
import Login from "./page/register/Login";
import LayoutSearch from "./Components/LayoutSearch";
import HotelList from "./Components/HotelList";
import HotelsProvider from "./context/HotelsProvider";
import SingleHotel from "./Components/SingleHotel";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/hotels" element={<LayoutSearch />}>
          <Route index element={<HotelList />} />
          <Route path=":id" element={<SingleHotel />} />
        </Route>
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
