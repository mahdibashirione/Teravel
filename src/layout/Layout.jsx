import { useLocation } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/login" && <Header />}
      <main className={`p-4 ${pathname !== "/login" && "pt-[88px]"}`}>
        {children}
      </main>
      {pathname !== "/login" && <Footer />}
    </>
  );
};

export default Layout;
