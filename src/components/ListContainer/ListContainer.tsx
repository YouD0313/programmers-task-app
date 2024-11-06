import List from '../List/List';
import { IList } from '../../types';
import ActionButton from '../ActionButton/ActionButton';
import { listsContainer } from './ListContainer.css';

type TListContainerProps = {
	boardId: string;
	lists: IList[];
};

export default function ListContainer({
	lists,
	boardId,
}: TListContainerProps): JSX.Element {
	return (
		<div className={listsContainer}>
			{lists.map((list) => (
				<List key={list.listId} list={list} boardId={boardId} />
			))}
			<ActionButton boardId={boardId} listId={''} list />
		</div>
	);
}
