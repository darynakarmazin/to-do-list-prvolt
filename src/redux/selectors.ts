import { RootState } from "../types/types";

export const getTasks = (state: RootState) => state.tasks;

export const getStatusFilter = (state: RootState) => state.filters.status;
