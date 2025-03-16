import Home from "./pages/Home.jsx";
import { useState } from "react";
import Layout from "./layout/Layout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import PasswordGate from "./components/PasswordGate.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const App = () => {
  const [isAuthentiCated, setIsAuthentiCated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        }
      ]
    },
    {
      path: "/dashboard",
      element: isAuthentiCated ? (
        <Dashboard />
      ) : (
        <PasswordGate setIsAuthentiCated={setIsAuthentiCated} />
      )
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;
