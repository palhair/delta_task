import { FC, HTMLAttributes } from 'react';

export type TCellColor = 'negative' | 'positive' | 'neutral' | 'default';

type OwnProps = {
	variant?: 'th' | 'td';
	color?: TCellColor;
	percent?: string;
	align?: 'center' | 'left' | 'right';
} & HTMLAttributes<HTMLTableCellElement>;

type Props = FC<OwnProps>;

const TableCell: Props = ({ variant = 'td', color = 'default', children, percent, align = 'center' }) => {
	if (variant == 'th') {
		return (
			<th className={`table-cell ${color} ${align}`}>
				<span>{children}</span> {percent ? <span>{percent}</span> : ''}
			</th>
		);
	}

	return (
		<td className={`table-cell ${color}  ${align}`}>
			<span>{children}</span> {percent ? <span className="percent-span">{`${percent}%`}</span> : ''}
		</td>
	);
};

export default TableCell;
