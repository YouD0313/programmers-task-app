import { TypedUseSelectorHook } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../store';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useTypedDispatch: () => AppDispatch = useDispatch;

// const logger = useSelector((state: RootState) => state.logger);

/**
 * TypedUseSelectorHook로 감싸는 이유 설명
 */
// interface Obj<T> {
// 	name: T;
// }

// interface State {
// 	state: {
// 		data: string;
// 		loading: boolean;
// 	};
// }

// const obj: Obj<State> = {
// 	name: {
// 		state: {
// 			data: 'abcd',
// 			loading: false,
// 		},
// 	},
// };
