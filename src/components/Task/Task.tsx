import { container, description, title } from './Task.css';

type TTask = {
	index: number;
	id: string;
	boardId: string;
	taskName: string;
	taskDescription: string;
};

export default function Task({
	taskName,
	taskDescription,
	boardId,
	id,
	index,
}: TTask): JSX.Element {
	return (
		<div className={container}>
			<div className={title}>{taskName}</div>
			<div className={description}>{taskDescription}</div>
		</div>
	);
}
