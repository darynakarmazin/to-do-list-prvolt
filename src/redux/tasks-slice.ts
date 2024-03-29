import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'
import { Task } from '../types/types'
import { mockData } from '../data/mockdata'

const tasksInitialState: Task[] = mockData || []

const tasksSlice = createSlice({
  'name': 'tasks',
  'initialState': tasksInitialState,
  'reducers': {
    'addTask': {
      reducer(state, action: PayloadAction<Task>) {
        state.push(action.payload)
      },
      prepare(text: string) {
        return {
          'payload': {
            text,
            'id': nanoid(),
            'completed': false,
          },
        }
      },
    },
    deleteTask(state, action) {
      const index = state.findIndex((task) => task.id === action.payload)
      state.splice(index, 1)
    },
    toggleCompleted(state, action) {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed
          break
        }
      }
    },
  },
})

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions
export const tasksReducer = tasksSlice.reducer
