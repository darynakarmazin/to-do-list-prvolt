import { FiCheckCircle } from "react-icons/fi";
import { TaskCounter } from "../TaskCounter/TaskCounter";
import { StatusFilter } from "../StatusFilter/StatusFilter";

function Header() {
  return (
    <header className="mb-0 rounded-b-lg bg-white text-lg font-bold uppercase text-gray-700 shadow-lg">
      <div className="flex justify-between items-center mx-auto max-w-screen-xl p-5">
        <div className="flex items-center justify-start gap-10">
          <FiCheckCircle size="28px" />
          TODO List
        </div>
        <TaskCounter />
        <StatusFilter />
      </div>
    </header>
  );
}

export default Header;
