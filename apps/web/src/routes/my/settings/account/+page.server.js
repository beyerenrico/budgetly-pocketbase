import { error } from '@sveltejs/kit';

export const actions = {
	updateEmail: async ({ request, locals }) => {
		const data = Object.fromEntries(await request.formData());

		try {
			await locals.pb.collection('users').requestEmailChange(data.email);
		} catch (err) {
			return {
				field: 'email',
				type: 'error',
				message: err.message
			};
		}

		return {
			field: 'email',
			type: 'success',
			message: 'We have sent you a confirmation email'
		};
	},
	updateUsername: async ({ request, locals }) => {
		const data = Object.fromEntries(await request.formData());

		try {
			await locals.pb.collection('users').getFirstListItem(`username = "${data.username}"`);
		} catch (err) {
			if (err.status === 404) {
				try {
					const { username } = await locals.pb
						.collection('users')
						.update(locals.user.id, { username: data.username });

					locals.user.username = username;

					return {
						field: 'username',
						type: 'success',
						message: 'Username has been changed'
					};
				} catch (err) {
					return {
						field: 'username',
						type: 'error',
						message: err.message
					};
				}
			}

			return {
				field: 'username',
				type: 'error',
				message: err.message
			};
		}

		return {
			field: 'username',
			type: 'error',
			message: 'Username already exists'
		};
	}
};
