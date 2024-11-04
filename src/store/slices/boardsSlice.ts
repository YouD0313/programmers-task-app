import { createSlice } from '@reduxjs/toolkit';
import { IBoard } from '../../types';

type TBoardState = {
	modalActive: boolean;
	boardArray: IBoard[];
};

const initialState: TBoardState = {
	modalActive: false,
	boardArray: [
		{
			boardId: 'board-0',
			boardName: '첫 번째 게시물',
			lists: [
				{
					listId: 'list-0',
					listName: 'List 1',
					tasks: [
						{
							taskId: 'task-0',
							taskName: 'Task 1',
							taskDescription: 'Description',
							taskOwner: 'YouD',
						},
						{
							taskId: 'task-1',
							taskName: 'Task 2',
							taskDescription: 'Description',
							taskOwner: 'YouD',
						},
					],
				},
				{
					listId: 'list-1',
					listName: 'List 2',
					tasks: [
						{
							taskId: 'task-3',
							taskName: 'Task 3',
							taskDescription: 'Description',
							taskOwner: 'YouD',
						},
					],
				},
			],
		},
	],
};

const boardsSlice = createSlice({
	name: 'boards',
	initialState,
	reducers: {},
});

export const boardsReducer = boardsSlice.reducer;
// sub reducer ===> reducer combine
// 서브 리듀서로 만드는데 리듀서를 컴바인으로 만들면 된다.
