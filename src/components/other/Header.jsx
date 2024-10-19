/* eslint-disable react/prop-types */
const Header = ({ changeUser, text, loggedInUserData }) => {
  console.log(loggedInUserData);
  const logoutUser = () => {
    localStorage.setItem("loggedInUser", "");
    changeUser("");
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium text-white">
        Hello <br />
        <span className="text-3xl text-white font-semibold">
          {text === "admin" ? "Admin" : loggedInUserData.firstName} 👋
        </span>
      </h1>
      <button
        onClick={logoutUser}
        className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
