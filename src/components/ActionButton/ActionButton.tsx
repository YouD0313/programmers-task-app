import { useState } from 'react';
import DropDownForm from './DropDownForm/DropDownForm';
import { IoIosAdd } from 'react-icons/io';
import { listButton, taskButton } from './ActionButton.css';

type TActionButtonProps = {
	boardId: string;
	listId: string;
	list?: boolean;
};

export default function ActionButton({
	boardId,
	listId,
	list,
}: TActionButtonProps): JSX.Element {
	const [isFormOpen, setIsFormOpen] = useState(false);
	const buttonText = list ? '새로운 리스트 등록' : '새로운 일 등록';

	return isFormOpen ? (
		<div>
			<DropDownForm
				setIsFormOpen={setIsFormOpen}
				list={list ? true : false}
				boardId={boardId}
				listId={listId}
			/>
		</div>
	) : (
		<div
			className={list ? listButton : taskButton}
			onClick={() => setIsFormOpen(true)}
		>
			<IoIosAdd />
			<p>{buttonText}</p>
		</div>
	);
}
