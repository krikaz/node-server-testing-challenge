const db = require('../data/dbConfig');
const Users = require('./usersModel');

beforeEach(async () => {
	await db('users').truncate();
});

describe('users.insert', () => {
	it('is able to add user to the db!', async () => {
		let users = await Users.getAll();
		expect(users).toHaveLength(0);

		// set up
		await Users.insert({ name: 'whiskeyjack' });
		await Users.insert({ name: 'crokus' });
		users = await users.getAll();

		// assertion
		expect(users).toHaveLength(2);
	});

	it('is able to insert the correct users', async () => {
		let users = await Users.getAll();
		expect(users).toHaveLength(0);

		// set up
		await Users.insert({ name: 'whiskeyjack' });
		await Users.insert({ name: 'crokus' });
		users = await Users.getAll();

		expect(users[0].name).toBe('whiskeyjack');
		expect(users[1].name).toBe('crokus');
	});

	it('returns the newly inserted user', async () => {
		const users = await Users.insert({ name: 'whiskeyjack' });
		expect(users.name).toBe('whiskeyjack');
	});
});
