import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	updatePassword: async ({ request, locals }) => {
		const data = Object.fromEntries(await request.formData());

		try {
			await locals.pb.collection('users').update(locals.user.id, data);
			locals.pb.authStore.clear();
		} catch (err) {
			return {
				field: 'password',
				type: 'error',
				message: err.message
			};
		}

		throw redirect(
			303,
			'/login?type=success&message=Your+password+has+been+changed.+Please+login+with+your+new+credentials'
		);
	}
};
