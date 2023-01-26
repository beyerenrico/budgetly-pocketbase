import { serializeNonPOJOs } from '$lib/utils';

/** @type {import('./$types').PageLoad} */
export async function load({ locals }) {
	try {
		const results = await locals.pb.collection('budgetbooks').getFullList(200, {
			filter: `user = "${locals.user.id}"`
		});

		return {
			budgetbooks: serializeNonPOJOs(results)
		};
	} catch (err) {
		console.log(err);
	}
}
