import { useLocation } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== ("/login" || "/hotels") && <Header />}
      <main
        className={`${pathname !== ("/login" || "/hotels") && "pt-[88px]"}`}
      >
        {children}
      </main>
      {/* {pathname === "/" && <Footer />} */}
    </>
  );
};

export default Layout;
