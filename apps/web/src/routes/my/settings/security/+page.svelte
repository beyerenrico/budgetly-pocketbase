<script>
	import { applyAction, enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { Alert, Input } from '$lib/components';

	export let form;

	let loading = false;

	const submitUpdatePassword = () => {
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
</script>

<div class="flex flex-col w-full h-full">
	<div class="w-full">
		<form
			action="?/updatePassword"
			method="POST"
			class="flex flex-col space-y-2 w-full"
			use:enhance={submitUpdatePassword}
		>
			<h3 class="text-2xl font-medium">Change Password</h3>
			<div class="divider" />
			<Input
				id="oldPassword"
				label="Old Password"
				type="password"
				placeholder="Type in your current password"
				required
				disabled={loading}
			/>
			<Input
				id="password"
				label="New Password"
				type="password"
				placeholder="Must have at least 8 characters"
				required
				disabled={loading}
			/>
			<Input
				id="passwordConfirm"
				label="Confirm New Password"
				type="password"
				placeholder="Must have at least 8 characters"
				required
				disabled={loading}
			/>
			<a href="/reset-password" class="text-primary hover:underline">I forgot my password</a>
			<div class="w-full max-w-lg pt-2">
				<button type="submit" class="btn btn-primary w-full" disabled={loading}
					>Change Password</button
				>
			</div>
			{#if form?.field === 'password'}
				<div class="pt-4">
					<Alert type={form?.type}>{form?.message}</Alert>
				</div>
			{/if}
		</form>
	</div>
</div>
