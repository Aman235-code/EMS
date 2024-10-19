/* eslint-disable react/prop-types */
import AllTask from "../other/AllTask";
import CreateTask from "../other/CreateTask";
import Header from "../other/Header";

const AdminDashboard = (props) => {
  console.log("Admi");
  return (
    <div className="h-screen w-full p-7">
      <Header text={props.text} changeUser={props.changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
