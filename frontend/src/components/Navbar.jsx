import logo from "../../public/assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div
      className="
      navbar bg-base-100 shadow-sm w-full px-5 py-3 flex items-center justify-between"
    >
      <img className="w-12" src={logo} alt="" />
      <h3 className="btn btn-ghost text-2xl font-bangla">Get Glamorous</h3>
      <div className="drawer w-fit">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer"
            className="btn btn-square btn-ghost drawer-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="drawer-side z-10">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <Link className="border-[1px] border-b-primary rounded-none my-2 font-bangla text-2xl font-medium">
                অফার
              </Link>
            </li>
            <li>
              <Link className="border-[1px] border-b-primary font-bangla text-2xl font-medium rounded-none">
                কন্টাক্ট
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
