import axios from 'axios';
import { useEffect, useState } from 'react';
import './devices.css';
import { useForm } from '../../hooks/useForm.js';

export const Devices = () => {
	const [devices, setDevices] = useState([]);
	const [refresh, setRefresh] = useState(0);
	const { name, type, form, inputChange } = useForm({
		name: '',
		type: '',
	});

	useEffect(() => {
		const call = async () => {
			const api = await axios.get(
				'http://localhost:8080/api/devices/getAll/648dde6407941782724dbc7a',
			);
			setDevices(api.data);
		};
		call();
		setRefresh(0);
	}, [refresh]);

	const status = async (id) => {
		await axios.post(`http://localhost:8080/api/devices/status/${id}`);
		setRefresh(1);
	};

	const addDevice = async () => {
		await axios.post(
			`http://localhost:8080/api/devices/add/648dde6407941782724dbc7a`,
			form,
		);
		setRefresh(1);
	};

	return (
		<div>
			<div className="cont">
				{devices.map((data) => (
					<div className="card" key={data._id}>
						{data.name}
						{data.status === 0 ? <p>Apagado</p> : <p>Encendido</p>}
						<button
							onClick={() => {
								status(data._id);
							}}
						>
							Cambiar status
						</button>
					</div>
				))}
			</div>
			<div className="form">
				<h1>Agregar dispositivo</h1>
				<input
					type="text"
					className="in"
					onChange={inputChange}
					value={name}
					name="name"
					placeholder="Nombre"
				/>
				<input
					type="text"
					onChange={inputChange}
					className="in"
					value={type}
					name="type"
					placeholder="Tipo dispositivo"
				/>
				<button onClick={addDevice}>Agregar</button>
			</div>
		</div>
	);
};
