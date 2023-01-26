import { error, redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	login: async ({ locals, request }) => {
		const body = Object.fromEntries(await request.formData());

		try {
			await locals.pb.collection('users').authWithPassword(body.email, body.password);
			if (!locals.pb?.authStore?.model?.verified) {
				locals.pb.authStore.clear();

				return {
					type: 'error',
					message: 'You must verify your email before you can login'
				};
			}
		} catch (err) {
			console.log('Error: ', err);

			return {
				type: 'error',
				message: err.message
			};
		}

		throw redirect(303, '/');
	}
};
