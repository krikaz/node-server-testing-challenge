exports.seed = function(knex, Promise) {
	return knex('users')
		.truncate()
		.then(function() {
			return knex('users').insert([
				{ name: 'rake' },
				{ name: 'kruppe' },
				{ name: 'karsa' },
				{ name: 'krul' },
			]);
		});
};
