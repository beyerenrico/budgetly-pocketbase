<script>
	import { Alert, Input } from '$lib/components';

	export let form;
</script>

{#if form?.type}
	<div class="mx-auto max-w-lg pb-4">
		<Alert type={form?.type}>{form?.message}</Alert>
	</div>
{/if}
<div class="flex flex-col items-center h-full w-full">
	<h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content">
		Login to your account
	</h2>
	<p class="text-center mt-1">
		Or
		<a href="/register" class="text-primary font-medium hover:cursor-pointer hover:underline">
			register
		</a>
		if you don't already have an account
	</p>
	<form action="?/login" method="POST" class="flex flex-col items-center space-y-2 w-full pt-4">
		<Input type="email" id="email" label="Email" placeholder="john.doe@mail.com" required />
		<Input
			type="password"
			id="password"
			label="Password"
			placeholder="Must have at least 8 characters"
			required
		/>
		<div class="w-full max-w-lg pt-2">
			<button type="submit" class="btn btn-primary w-full">Login</button>
			<div class="w-full max-w-lg pt-2 text-center">
				<a href="/reset-password" class="text-primary hover:underline">Forgot password?</a>
			</div>
		</div>
	</form>
</div>
