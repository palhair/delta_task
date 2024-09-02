import './App.css';
import Table from './components/table';
import fakeData from './mock/data';

function App() {
	return (
		<>
			<Table tableData={fakeData}></Table>
		</>
	);
}

export default App;
