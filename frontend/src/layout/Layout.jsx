import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
const Layout = () => {
  return (
    <div>
    <ToastContainer />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
