import Header from "../Components/Header";
import TargetWrapped from "../context/TargetProvider";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="p-4 pt-[88px]">{children}</main>
    </>
  );
};

export default Layout;
