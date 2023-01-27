import { serializeNonPOJOs } from '$lib/utils';
import { error } from '@sveltejs/kit';

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
