import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  console.log("in the app");
  const [user, setUser] = useState(null);
  const [text, settext] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);
  const authData = useContext(AuthContext);
  console.log(authData);

  useEffect(() => {
    console.log("app use effect");
    const loggedInUser = localStorage.getItem("loggedInUser");
    console.log(loggedInUser);

    if (loggedInUser) {
      console.log("Yes");
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setloggedInUserData(userData.data);
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      console.log("In admin");
      setUser({ role: "admin" });
      settext("admin");
      console.log(user);
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      console.log(authData);
      console.log("In employee");
      const employee = authData.employees.find(
        (e) => email === e.email && password === e.password
      );
      console.log(employee);
      if (employee) {
        setUser({ role: "employee" });
        settext("employee");
        setloggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
        console.log(user);
        console.log(loggedInUserData);
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {text == "admin" ? (
        <AdminDashboard text={"admin"} changeUser={setUser} />
      ) : text == "employee" ? (
        <EmployeeDashboard
          loggedInUserData={loggedInUserData}
          changeUser={setUser}
          data={loggedInUserData}
        />
      ) : null}
    </>
  );
};

export default App;
