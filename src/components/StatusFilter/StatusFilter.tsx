import { useSelector } from "react-redux";
import Button from "../Button/Button";
import { statusFilters } from "../../redux/constants";
import { getStatusFilter } from "../../redux/selectors";

export const StatusFilter = () => {
  const filter = useSelector(getStatusFilter);

  return (
    <div className="flex gap-4">
      <Button selected={filter === statusFilters.all}>All</Button>
      <Button selected={filter === statusFilters.active}>Active</Button>
      <Button selected={filter === statusFilters.completed}>Completed</Button>
    </div>
  );
};
