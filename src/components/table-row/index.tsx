import { FC, HTMLAttributes, SyntheticEvent } from 'react';
import TableCell, { TCellColor } from '../table-cell';
import { TRowData } from '../../mock/data';
import LineChart from '../line-chart';

type OwnProps = {
	data: TRowData;
	isOpenCart?: boolean;
	onclick: (event: SyntheticEvent) => void;
} & HTMLAttributes<HTMLTableRowElement>;

type Props = FC<OwnProps>;

const TableRow: Props = ({ data, isOpenCart = false, onclick, id }) => {
	const currentDayValue = data.latestValues[data.latestValues.length - 1];
	const yesterdayValue = data.latestValues[data.latestValues.length - 2];

	const percent = Math.round(((currentDayValue - yesterdayValue) / yesterdayValue) * 100) + '';

	let yesterdayMark: TCellColor = 'default';
	let averegeThisWeekDayMark: TCellColor = 'default';

	if (yesterdayValue > currentDayValue) {
		yesterdayMark = 'negative';
	} else if (yesterdayValue === currentDayValue) {
		yesterdayMark = 'default';
	} else {
		yesterdayMark = 'positive';
	}

	if (data.averegeThisWeekDay > currentDayValue) {
		averegeThisWeekDayMark = 'negative';
	} else if (data.averegeThisWeekDay === currentDayValue) {
		averegeThisWeekDayMark = 'default';
	} else {
		averegeThisWeekDayMark = 'positive';
	}

	return (
		<>
			<tr onClick={onclick} id={id}>
				<TableCell align="left">{data.title}</TableCell>
				<TableCell color="neutral" align="right">
					{currentDayValue}
				</TableCell>
				<TableCell color={yesterdayMark} percent={percent} align="right">
					{yesterdayValue}
				</TableCell>
				<TableCell color={averegeThisWeekDayMark} align="right">
					{data.averegeThisWeekDay}
				</TableCell>
			</tr>

			{isOpenCart ? (
				<tr>
					<td colSpan={4}>
						<LineChart data={data.latestValues} title={data.title} />
					</td>{' '}
				</tr>
			) : (
				''
			)}
		</>
	);
};

export default TableRow;
