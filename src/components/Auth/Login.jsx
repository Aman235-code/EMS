/* eslint-disable react/prop-types */
import { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    // console.log(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20 text-white">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          action=""
          className="flex flex-col items-center justify-center"
        >
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className=" outline-none bg-transparent border-2 border-emerald-600 py-3 text-xl px-5 rounded-full w-full placeholder:text-gray-400"
            type="email"
            name=""
            id=""
            value={email}
            placeholder="Enter your email"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className=" outline-none bg-transparent border-2 font-medium border-emerald-600 py-3 text-xl px-5 rounded-full mt-3 placeholder:text-gray-400"
            type="password"
            name=""
            id=""
            value={password}
            placeholder="Enter password"
          />
          <button className="text-white border-none outline-none font-medium border-2 bg-emerald-600 py-3 text-xl mt-5 px-5 w-full rounded-full placeholder:text-white">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
