export type TRowData = {
	id: string;
	title: string;
	latestValues: number[];
	averegeThisWeekDay: number;
	isOpen?: boolean;
};

const fakeData: TRowData[] = [
	{
		id: '1',
		title: 'Выручка, руб',
		latestValues: [500521, 500000, 554000, 700000, 525844, 649648, 645575],
		averegeThisWeekDay: 542668,
	},
	{
		id: '2',
		title: 'Наличные',
		latestValues: [300000, 300000, 300000, 300000, 300000, 300000, 300000],
		averegeThisWeekDay: 300000,
	},
	{
		id: '3',
		title: 'Безналичный расчет',
		latestValues: [100000, 100000, 100000, 100000, 100000, 100000, 100000],
		averegeThisWeekDay: 100000,
	},
	{
		id: '4',
		title: 'Кредитные карты',
		latestValues: [100521, 50000, 154000, 300000, 125844, 249648, 245575],
		averegeThisWeekDay: 212000,
	},
	{
		id: '5',
		title: 'Средний чек, руб',
		latestValues: [1335, 1545, 1258, 1365, 1477, 900, 1300],
		averegeThisWeekDay: 1254,
	},
	{
		id: '6',
		title: 'Удаления из чека (после оплаты)б руб',
		latestValues: [1335, 1545, 1258, 1365, 1477, 1100, 1000],
		averegeThisWeekDay: 1254,
	},
];

export default fakeData;
