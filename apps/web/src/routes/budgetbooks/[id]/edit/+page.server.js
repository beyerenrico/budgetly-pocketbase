import { serializeNonPOJOs } from '$lib/utils';
import { error, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ locals, params }) {
	const getBudgetBook = async (id) => {
		try {
			const budgetBook = serializeNonPOJOs(await locals.pb.collection('budgetbooks').getOne(id));
			return budgetBook;
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
	};

	return {
		budgetBook: getBudgetBook(params.id)
	};
}

/** @type {import('./$types').Actions} */
export const actions = {
	update: async ({ request, locals, params }) => {
		const data = Object.fromEntries(await request.formData());

		console.log(params);
		console.log(data);

		try {
			await locals.pb
				.collection('budgetbooks')
				.update(params.id, { ...data, user: locals.user.id });
		} catch (err) {
			return {
				type: 'error',
				message: err.message
			};
		}

		throw redirect(303, `/budgetbooks/${params.id}`);
	}
};
