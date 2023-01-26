<script>
	import { Alert, Input } from '$lib/components';

	export let form;
</script>

<div class="flex flex-col items-center h-full w-full">
	<h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content">
		Reset your password
	</h2>
	<p class="text-center mt-1">We'll send you an email with a link to reset your password</p>
	<form
		action="?/resetPassword"
		method="POST"
		class="flex flex-col items-center space-y-2 w-full pt-4"
	>
		<Input type="email" id="email" label="Email" placeholder="john.doe@mail.com" required />
		<div class="w-full max-w-lg pt-2">
			<button type="submit" class="btn btn-primary w-full">Request Password Reset</button>
		</div>
		{#if form?.success}
			<Alert type="success">An email to reset your password has been sent</Alert>
		{/if}
	</form>
</div>
