import { useSelector } from "react-redux";
import { getTasks } from "../../redux/selectors";

export const TaskCounter = () => {
  const tasks = useSelector(getTasks);

  return (
    <div>
      <p>Active: {}</p>
      <p>Completed: {}</p>
    </div>
  );
};
