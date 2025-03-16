import { useState } from "react";
import Button from "./Button.jsx";
const PasswordGate = ({ setIsAuthentiCated }) => {
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (password === "safuglam") {
      localStorage.setItem("isAuthenticated", "true");
      setIsAuthentiCated(true);
      window.location.href = "/dashboard";
    } else {
      alert("Wrong Password!");
      setPassword("");
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="">
        <h1 className="text-primary">Enter Password</h1>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <input
            type="password"
            className="input border-primary"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
          />
          <Button type={"submit"}>Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default PasswordGate;
