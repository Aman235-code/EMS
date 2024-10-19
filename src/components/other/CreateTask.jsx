import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [taskTitle, settaskTitle] = useState("");
  const [taskDesc, settaskDesc] = useState("");
  const [taskDate, settaskDate] = useState("");
  const [assignTo, setassignTo] = useState("");
  const [category, setcategory] = useState("");

  const userdata = useContext(AuthContext);
  const data = userdata.employees;

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      title: taskTitle,
      description: taskDesc,
      date: taskDate,
      assignTo,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    data.forEach(function (elem) {
      if (assignTo == elem.firstName) {
        elem.tasks.push(newTask);
      }
    });

    localStorage.setItem("employees", JSON.stringify(data));

    settaskTitle("");
    settaskDesc("");
    settaskDate("");
    setassignTo("");
    setcategory("");
  };
  return (
    <div className="p-5 bg-[#e9cdcd] mt-7 rounded">
      <form
        onSubmit={(e) => submitHandler(e)}
        className="flex flex-wrap w-full items-start justify-between"
        action=""
      >
        <div className="w-1/2 text-black text-5xl font-medium">
          <div>
            <h3 className="text-sm mb-0.5">Task Title</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              name=""
              placeholder="Make a UI design"
              id=""
              value={taskTitle}
              onChange={(e) => {
                settaskTitle(e.target.value);
              }}
            />
          </div>
          <div>
            <h3 className="text-sm  mb-0.5">Date</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
              name=""
              id=""
              value={taskDate}
              onChange={(e) => {
                settaskDate(e.target.value);
              }}
            />
          </div>
          <div>
            <h3 className="text-sm  mb-0.5">Assign to</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              name=""
              placeholder="Employee name"
              id=""
              value={assignTo}
              onChange={(e) => {
                setassignTo(e.target.value);
              }}
            />
          </div>
          <div>
            <h3 className="text-sm  mb-0.5">Category</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              name=""
              placeholder="design, dev, etc"
              id=""
              value={category}
              onChange={(e) => {
                setcategory(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start text-black text-5xl font-medium">
          <h3 className="text-sm  mb-0.5">Description</h3>
          <textarea
            className="h-44 text-sm py-2 px-4 w-full rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            name=""
            placeholder="Enter details"
            id=""
            cols={30}
            rows={10}
            value={taskDesc}
            onChange={(e) => {
              settaskDesc(e.target.value);
            }}
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
