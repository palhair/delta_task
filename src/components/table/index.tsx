import { FC, HTMLAttributes, SyntheticEvent, useState } from 'react';
import TableCell from '../table-cell';
import { TRowData } from '../../mock/data';
import TableRow from '../table-row';

type OwnProps = {
	tableData: TRowData[];
} & HTMLAttributes<HTMLTableElement>;

type Props = FC<OwnProps>;
const Table: Props = ({ tableData }) => {
	const [stateData, setStateData] = useState(tableData);

	const showChart = (event: SyntheticEvent) => {
		const currentId = event.currentTarget.id;
		console.log(currentId);

		const isOpenId = stateData.filter((item) => item.isOpen == true);

		if (isOpenId.length != 0 && isOpenId[0].id == currentId) {
			const refreshData = stateData.map((item) => {
				item.isOpen = false;
				return item;
			});

			setStateData(refreshData);
			return;
		}

		stateData.map((item) => (item.isOpen = false));

		const refreshData = stateData.map((item) => {
			if (item.id == currentId) {
				item.isOpen = true;
				return item;
			} else {
				return item;
			}
		});
		setStateData(refreshData);
	};

	return (
		<>
			<table>
				<thead>
					<tr>
						<TableCell variant='th'>Показатель</TableCell>
						<TableCell variant='th'>Текущий день</TableCell>
						<TableCell variant='th'>Вчера</TableCell>
						<TableCell variant='th'>Этот день недели</TableCell>
					</tr>
				</thead>

				<tbody>
					{stateData.map((row) => (
						<TableRow
							data={row}
							key={row.title}
							isOpenCart={row.isOpen}
							onclick={showChart}
							id={row.id}
						/>
					))}
				</tbody>
			</table>
		</>
	);
};

export default Table;
