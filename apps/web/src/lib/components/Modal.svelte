<script>
	export let label = '';
	export let checked = false;
</script>

<label for={label}>
	<slot name="trigger" />
</label>

<input type="checkbox" id={label} class="modal-toggle" {checked} />
<label for={label} class="modal modal-bottom sm:modal-middle">
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<label class="modal-box">
		<div class="font-bold text-xl text-center">
			<slot name="heading" />
		</div>
		<div class="my-2">
			<slot />
		</div>
		<div class="modal-action justify-center">
			<slot name="actions" />
		</div>
	</label>
</label>
