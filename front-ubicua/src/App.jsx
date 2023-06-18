import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { RoutesGeneral } from './routes/RoutesGeneral.jsx';

function App() {
	return (
		<>
			<BrowserRouter>
				<RoutesGeneral />
			</BrowserRouter>
		</>
	);
}

export default App;
