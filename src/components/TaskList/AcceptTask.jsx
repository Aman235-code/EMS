/* eslint-disable react/prop-types */
const AcceptTask = ({ elem }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl text-9xl font-medium justify-between text-justify">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-400 text-sm px-3 py-1 rounded-lg">
          {elem.category}
        </h3>
        <h4 className="text-sm">{elem.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{elem.title}</h2>
      <p className="text-sm mt-4">{elem.description}</p>
      <div className="flex justify-between mt-10 gap-3">
        <button className="bg-yellow-400 py-1 px-2 text-sm rounded-lg">
          Mark as Completed
        </button>
        <button className="bg-blue-300 py-1 px-2 text-sm rounded-lg">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
