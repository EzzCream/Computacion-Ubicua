import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
	userID: {
		type: String,
		require: true,
	},
	name: {
		type: String,
		require: true,
	},
	status: {
		type: Number,
		require: true,
	},
	type: {
		type: String,
		require: true,
	},
});

export const DeviceModel = mongoose.model('device', Schema);
