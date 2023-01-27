<script>
	import { Icon, Pencil } from 'svelte-hero-icons';

	export let data;

	$: ({ budgetBook } = data);
</script>

<div class="w-full h-full px-2 pt-4">
	<div class="flex justify-between">
		<h2 class="text-3xl font-medium flex items-center gap-2">
			{budgetBook.title}
			<div class="badge h-8 badge-primary">{budgetBook.year}</div>
		</h2>
		<a href="/budgetbooks/{budgetBook.id}/edit" class="btn btn-primary btn-outline btn-sm">
			<Icon src={Pencil} class="w-4 h-4" />
		</a>
	</div>
	<div class="divider pb-8" />
	<p>{budgetBook.description}</p>
	<div class="btn-group">
		<button class="btn btn-primary">Button</button>
		<button class="btn">Button</button>
		<button class="btn">Button</button>
	</div>
</div>
