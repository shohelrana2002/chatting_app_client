import { Outlet } from "react-router";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";
// 2 3 4 5 6 7
const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
