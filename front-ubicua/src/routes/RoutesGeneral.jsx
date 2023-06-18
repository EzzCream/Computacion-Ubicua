import { Route, Routes } from 'react-router-dom';
import { Login } from '../components/Login/Login.jsx';
import { Devices } from '../components/Devices/Devices.jsx';

export const RoutesGeneral = () => {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="/devices" element={<Devices />} />
		</Routes>
	);
};
