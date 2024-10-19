/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import TaskList from "../TaskList/TaskList";
import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";

const EmployeeDashboard = ({ data, changeUser, loggedInUserData }) => {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header
        changeUser={changeUser}
        data={data}
        loggedInUserData={loggedInUserData}
      />
      <TaskListNumbers changeUser={changeUser} data={data} />
      <TaskList changeUser={changeUser} data={data} />
    </div>
  );
};

export default EmployeeDashboard;
