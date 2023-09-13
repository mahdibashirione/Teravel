import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="p-4 pt-[88px]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
