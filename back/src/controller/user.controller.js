import { UserModel } from '../model/user.model.js';

export async function createUser(req, res) {
	try {
		const user = req.body;
		await UserModel.create(user);
		res.status(200).send('User added');
	} catch (error) {
		console.log(error);
	}
}
