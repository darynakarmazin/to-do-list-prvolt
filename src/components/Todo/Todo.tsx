import { RiDeleteBinLine } from "react-icons/ri";
import { BiCircle, BiChevronDownCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "../../redux/tasksSlice";
import { Task } from "../../types/types";

export const Todo = ({ task }: { task: Task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));

  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <div className="relative size-full rounded-lg bg-gray-200 p-10 text-gray-600 shadow-md transition-transform duration-200 hover:scale-105 focus:scale-105">
      <p className="mb-5 text-center text-lg font-bold">TODO #</p>
      <p className="mb-5 text-center text-lg ">{task.text}</p>

      {task.completed ? (
        <button
          className="absolute bottom-0 left-0 p-2 transition-transform duration-200 hover:scale-105 focus:scale-105"
          type="button"
          onClick={handleToggle}
        >
          <BiChevronDownCircle size={32} />
        </button>
      ) : (
        <button
          className="absolute bottom-0 left-0 p-2 transition-transform duration-200 hover:scale-105 focus:scale-105"
          type="button"
          onClick={handleToggle}
        >
          <BiCircle size={32} />
        </button>
      )}

      <button
        className="absolute right-0 top-0 p-2 transition-transform duration-200 ease-in-out hover:scale-105 focus:scale-105"
        type="button"
        aria-label={`Delete ${task.text}`}
        onClick={() => handleDelete()}
      >
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
};
