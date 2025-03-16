import { FaFacebookF, FaInstagram } from "react-icons/fa";

import { Link } from "react-router-dom";
import logo from "../../public/assets/logo.png";
const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-primary text-primary-content p-10">
      <aside>
        <img className="w-20" src={logo} alt="" />
        <p className="font-bold">
          Get Glamorous
          <br />
          Your beauty our passion
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link
            target="_blank"
            className="text-2xl"
            to="https://www.facebook.com/getglamorous35?mibextid=ZbWKwL"
          >
            <FaFacebookF />
          </Link>
          <Link
          target="_blank"
            className="text-2xl"
            to="https://www.instagram.com/get_glamorous35?igsh=MWwycWJyc3ptbmdxMA=="
          >
            <FaInstagram />
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
