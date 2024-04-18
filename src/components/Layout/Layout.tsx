import Header from "components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />

      <main className="pt-10">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
