<script>
	import { applyAction, enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { Alert, Input } from '$lib/components';

	export let data;
	export let form;

	let loading = false;

	const submitEdit = () => {
		loading = true;

		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					await invalidateAll();
					break;
				case 'error':
					break;
				default:
					await applyAction(result);
					break;
			}

			loading = false;
			update();
		};
	};

	$: ({ budgetBook } = data);
</script>

<div class="flex flex-col items-center h-full w-full">
	<h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content">
		Edit Budget Book
	</h2>
	<form
		action="?/update"
		method="POST"
		class="flex flex-col items-center space-y-2 w-full pt-4"
		use:enhance={submitEdit}
	>
		<Input
			type="text"
			id="title"
			label="Title"
			placeholder="My Budget Book"
			value={budgetBook.title}
			disabled={loading}
			required
		/>
		<div class="form-control w-full max-w-lg">
			<label for="description" class="label font-medium pb-1">
				<span class="label-text">Description</span>
			</label>
			<textarea
				class="textarea textarea-bordered"
				name="description"
				placeholder="Optional description"
				disabled={loading}
				rows="5">{budgetBook.description}</textarea
			>
		</div>
		<Input
			type="number"
			id="year"
			label="Year"
			placeholder={new Date().getFullYear().toString()}
			value={budgetBook.year}
			disabled={loading}
			required
		/>
		<div class="w-full max-w-lg pt-2">
			<button type="submit" class="btn btn-primary w-full">Edit Budget Book</button>
		</div>
		{#if form?.type}
			<div class="pt-4">
				<Alert type={form?.type}>{form?.message}</Alert>
			</div>
		{/if}
	</form>
</div>
