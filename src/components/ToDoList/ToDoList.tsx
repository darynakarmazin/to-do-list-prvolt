import { useSelector } from "react-redux";
import { Todo } from "../Todo/Todo";
import { statusFilters } from "../../redux/constants";
import { getStatusFilter, getTasks } from "../../redux/selectors";
import { RootState, Task } from "../../types/types";

const getVisibleTasks = (tasks: Task[], statusFilter: string): Task[] => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter((task) => !task.completed);
    case statusFilters.completed:
      return tasks.filter((task) => task.completed);
    default:
      return tasks;
  }
};

function ToDoList() {
  const tasks = useSelector((state: RootState) => getTasks(state));
  const statusFilter = useSelector((state: RootState) =>
    getStatusFilter(state)
  );
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className="mb-10 flex flex-wrap justify-center gap-5 items-center">
      {visibleTasks.map((task) => (
        <li
          key={task.id}
          className="flex h-48 basis-72 flex-col items-center justify-center"
        >
          <Todo task={task} />
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
