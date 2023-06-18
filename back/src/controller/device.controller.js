import { DeviceModel } from '../model/devices.model.js';

export async function createDevice(req, res) {
	try {
		const device = req.body;
		const { userID } = req.params;
		const newArr = {
			...device,
			userID,
		};
		await DeviceModel.create(newArr);
		res.status(200).send('Device added');
	} catch (error) {
		console.log(error);
	}
}

export async function updateStatus(req, res) {
	try {
		const { id } = req.params;
		const device = await DeviceModel.findOne({ _id: id });

		if (device.status === 0) {
			device.status = 1;
		} else {
			device.status = 0;
		}
		await DeviceModel.updateOne({ _id: id }, device);
		res.status(200).send('Status update');
	} catch (error) {
		console.log(error);
	}
}

export async function getAllDevices(req, res) {
	try {
		const { userID } = req.params;
		const devices = await DeviceModel.find({ userID });
		res.status(200).json(devices);
	} catch (error) {
		console.log(error);
	}
}
