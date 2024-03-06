export interface Task {
  id: string;
  title: string;
  status: string;
}

export interface Filters {
  status: string;
}

export interface RootState {
  tasks: Task[];
  filters: Filters;
}
