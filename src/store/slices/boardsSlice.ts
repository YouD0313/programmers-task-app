import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBoard, IList, ITask } from '../../types';
import { boardItem } from '../../components/BoardList/BoardList.css';

type TBoardState = {
	modalActive: boolean;
	boardArray: IBoard[];
};

type TAddBoardAction = {
	board: IBoard;
};

type TDeleteListAction = {
	boardId: string;
	listId: string;
};

type TAddListAction = {
	boardId: string;
	list: IList;
};

type TAddTaskAction = {
	boardId: string;
	listId: string;
	task: ITask;
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
	reducers: {
		addBoard: (state, { payload }: PayloadAction<TAddBoardAction>) => {
			state.boardArray.push(payload.board);
			// immer를 사용하여 불변성을 유지하기 때문에 push 사용 가능
		},

		addList: (state, { payload }: PayloadAction<TAddListAction>) => {
			state.boardArray.map((board) =>
				board.boardId === payload.boardId
					? { ...board, lists: board.lists.push(payload.list) }
					: board
			);
		},
		addTask: (state, { payload }: PayloadAction<TAddTaskAction>) => {
			state.boardArray.map((board) =>
				board.boardId === payload.boardId
					? {
							...board,
							lists: board.lists.map((list) =>
								list.listId === payload.listId
									? { ...list, tasks: list.tasks.push(payload.task) }
									: list
							),
					  }
					: board
			);
		},

		deleteList: (state, { payload }: PayloadAction<TDeleteListAction>) => {
			state.boardArray = state.boardArray.map((board) =>
				board.boardId === payload.boardId
					? {
							...board,
							lists: board.lists.filter(
								(list) => list.listId !== payload.listId
							),
					  }
					: board
			);
		},
		setModalActive: (state, { payload }: PayloadAction<boolean>) => {
			state.modalActive = payload;
		},
	},
});

export const { addBoard, deleteList, setModalActive, addList, addTask } =
	boardsSlice.actions;
export const boardsReducer = boardsSlice.reducer;
// sub reducer ===> reducer combine
// 서브 리듀서로 만드는데 리듀서를 컴바인으로 만들면 된다.
