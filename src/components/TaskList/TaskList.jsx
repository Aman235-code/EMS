/* eslint-disable react/prop-types */
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FilledTask from "./FilledTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="flex overflow-x-auto items-center justify-start gap-5 flex-nowrap h-[50%] py-5 w-full mt-10"
    >
      {data.tasks.map((elem, id) => {
        if (elem.active) {
          return <AcceptTask elem={elem} key={id} />;
        }
        if (elem.newTask) {
          return <NewTask elem={elem} key={id} />;
        }

        if (elem.completed) {
          return <CompleteTask elem={elem} key={id} />;
        }

        if (elem.failed) {
          return <FilledTask elem={elem} key={id} />;
        }
      })}
    </div>
  );
};

export default TaskList;
