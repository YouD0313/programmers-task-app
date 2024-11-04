import { boardsReducer } from '../slices/boardsSlice';
import { logReducer } from '../slices/loggerSlice';
import { modalReducer } from '../slices/modalSlice';

const reducer = {
	logger: logReducer,
	boards: boardsReducer,
	modal: modalReducer,
};

export default reducer;
