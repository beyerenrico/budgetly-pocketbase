<script>
	export let value = '';
	export let placeholder = '';
	export let id = '';
	export let label = '';
	export let type = 'text';
	export let disabled = false;
	export let required = false;
	export let autocomplete = null;
</script>

<div class="space-y-1">
	<label for={id} class="block text-sm font-medium text-gray-700">{label}</label>
	<div class="mt-1">
		<input
			class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
			name={id}
			{type}
			{autocomplete}
			{placeholder}
			{disabled}
			{required}
			{id}
			{value}
		/>
	</div>
</div>
