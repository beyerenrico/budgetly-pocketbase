import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ locals }) {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/login');
	}
}

/** @type {import('./$types').Actions} */
export const actions = {
	create: async ({ request, locals }) => {
		const data = Object.fromEntries(await request.formData());

		try {
			await locals.pb.collection('budgetbooks').create({ ...data, user: locals.user.id });
		} catch (err) {
			return {
				type: 'error',
				message: err.message
			};
		}

		return {
			type: 'success',
			message: 'Budget Book has been created'
		};

		// throw redirect(
		// 	303,
		// 	'/login?type=success&message=Your+password+has+been+changed.+Please+login+with+your+new+credentials'
		// );
	}
};
