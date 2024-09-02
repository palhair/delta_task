import { FC, HTMLAttributes } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

type OwnProps = {
	data: number[];
	title: string;
} & HTMLAttributes<HTMLTableRowElement>;

type Props = FC<OwnProps>;

const LineChart: Props = ({ data, title }) => {
	const chartOptions = {
		series: [{ data }],
		title: {
			text: title,
		},
		plotOptions: {
			series: {
				label: {
					connectorAllowed: false,
				},
				pointStart: 1,
			},
		},
	};

	//     this.state = {
	//       // To avoid unnecessary update keep all options in the state.
	//       chartOptions: {
	//         xAxis: {
	//           categories: ['A', 'B', 'C'],
	//         },

	//         plotOptions: {
	//           series: {
	//             point: {
	//               events: {
	//                 mouseOver: this.setHoverData.bind(this)
	//               }
	//             }
	//           }
	//         }
	//       },
	//       hoverData: null
	//     };
	//   }

	//   setHoverData = (e) => {
	//     // The chart is not updated because `chartOptions` has not changed.
	//     this.setState({ hoverData: e.target.category })
	//   }

	//   updateSeries = () => {
	//     // The chart is updated only with new options.
	//     this.setState({
	//       chartOptions: {
	//         series: [
	//           { data: [Math.random() * 5, 2, 1]}
	//         ]
	//       }
	//     });
	//   }

	//   return  {
	//     const { chartOptions, hoverData } = this.state;

	return (
		<div>
			<HighchartsReact highcharts={Highcharts} options={chartOptions} />
		</div>
	);
};

export default LineChart;
