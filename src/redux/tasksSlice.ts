import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../types/types";

const tasksInitialState: Task[] = [
  { id: "0", title: "Learn HTML and CSS", status: "completed" },
  { id: "1", title: "Get good at JavaScript", status: "completed" },
  { id: "2", title: "Master React", status: "in progress" },
  { id: "3", title: "Discover Redux", status: "in progress" },
  { id: "4", title: "Build amazing apps", status: "in progress" },
];

const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  reducers: {
    addTask: {
      reducer(state, action: PayloadAction<Task>) {
        state.push(action.payload);
      },
      prepare(title: string) {
        return {
          payload: {
            id: nanoid(),
            title,
            status: "in progress",
          },
        };
      },
    },
    deleteTask(state, action: PayloadAction<string>) {
      const index = state.findIndex((task) => task.id === action.payload);
      state.splice(index, 1);
    },
    toggleCompleted(state, action: PayloadAction<string>) {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.status = task.status === "completed" ? "in progress" : "completed";
      }
    },
  },
});

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
