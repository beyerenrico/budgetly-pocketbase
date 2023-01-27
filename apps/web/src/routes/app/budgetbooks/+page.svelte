<script>
	export let data;

	$: ({ budgetbooks } = data);
</script>

<div class="w-full h-full px-2 pt-4">
	<h2 class="text-3xl font-medium">My Budget Books</h2>
	<div class="divider pb-8" />
</div>
<div class="w-full">
	{#each budgetbooks as element}
		<div class="card w-full bg-base-100 shadow-xl mb-4">
			<div class="card-body">
				<h2 class="card-title">{element.title}</h2>
				<p>{element.description}</p>
				<div class="card-actions justify-end">
					<a href="/budgetbooks/{element.id}" class="btn btn-primary">View</a>
					<!-- <a href="/budgetbooks/{element.id}" class="btn btn-secondary">Edit</a>
					<a href="/budgetbooks/{element.id}" class="btn btn-danger">Delete</a> -->
				</div>
			</div>
		</div>
	{:else}
		<div class="text-center">
			<h3 class="font-medium text-2xl">No Budget Books found</h3>
			<a href="/budgetbooks/new" class="btn btn-primary mt-4">Create your first Budget Book</a>
		</div>
	{/each}
</div>
