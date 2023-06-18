import express from 'express';
import './config/mongo.config.js';
import cors from 'cors';
import Device from './route/device.route.js';
import User from './route/user.route.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/devices', Device);
app.use('/api/user', User);

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
	console.log(`----------------------------------------------`);
	console.log(`Server started on http://localhost:${PORT} ✨`);
	console.log(`----------------------------------------------`);
});
server.on('error', (err) => console.log(err));
