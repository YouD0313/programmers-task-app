import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITask } from '../../types';

type TModlaState = {
	boardId: string;
	listId: string;
	task: ITask;
};

type TSetModalDateAction = {
	boardId: string;
	listId: string;
	task: ITask;
};

const initialState: TModlaState = {
	boardId: 'board-0',
	listId: 'list-0',
	task: {
		taskId: 'task-0',
		taskName: 'task 0',
		taskDescription: 'task description',
		taskOwner: 'YouD',
	},
};

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		setModalData: (state, { payload }: PayloadAction<TSetModalDateAction>) => {
			state.boardId = payload.boardId;
			state.listId = payload.listId;
			state.task = payload.task;
		},
	},
});

export const { setModalData } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
