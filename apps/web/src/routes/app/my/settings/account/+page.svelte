<script>
	import { applyAction, enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import { Alert } from '$lib/components';
	import { Input } from '$lib/components';
	import { Modal } from '$lib/components';

	export let form;
	export let data;

	let emailModalOpen = false;
	let usernameModalOpen = false;
	let loading = false;

	const submitUpdateEmail = () => {
		loading = true;
		emailModalOpen = true;

		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					await invalidateAll();
					emailModalOpen = false;
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

	const submitUpdateUsername = () => {
		loading = true;
		usernameModalOpen = true;

		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					await invalidateAll();
					usernameModalOpen = false;
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

	$: ({ email, username } = data.user);
</script>

<div class="flex flex-col w-full h-full space-y-12">
	<div class="w-full">
		<h3 class="text-2xl font-medium">Change Email</h3>
		<div class="divider" />
		<Modal label="change-email" checked={emailModalOpen}>
			<span slot="trigger" class="btn btn-primary mt-3">Change Email</span>
			<h3 slot="heading">Change your email</h3>
			<form action="?/updateEmail" method="POST" class="space-y-2" use:enhance={submitUpdateEmail}>
				<Input
					id="email"
					type="email"
					label="Enter your new email address"
					required={true}
					placeholder={email}
					value={email}
					disabled={loading}
				/>
				<button type="submit" class="btn btn-primary w-full" disabled={loading}>Change email</button
				>
			</form>
		</Modal>
		{#if form?.field === 'email'}
			<div class="pt-4">
				<Alert type={form?.type}>{form?.message}</Alert>
			</div>
		{/if}
	</div>

	<div class="w-full">
		<h3 class="text-2xl font-medium">Change Username</h3>
		<div class="divider -mb-0.5" />
		<div class="mb-3">
			<Input id="currentUsername" label="Your current username" value={username} disabled />
		</div>
		<Modal label="change-username" checked={usernameModalOpen}>
			<span slot="trigger" class="btn btn-primary">Change Username</span>
			<h3 slot="heading">Change your username</h3>
			<form
				action="?/updateUsername"
				method="POST"
				class="space-y-2"
				use:enhance={submitUpdateUsername}
			>
				<Input
					id="username"
					type="text"
					label="Enter your new username"
					required={true}
					placeholder={username}
					value={username}
					disabled={loading}
				/>
				<button type="submit" class="btn btn-primary w-full" disabled={loading}
					>Change username</button
				>
			</form>
		</Modal>

		{#if form?.field === 'username'}
			<div class="pt-4">
				<Alert type={form?.type}>{form.message}</Alert>
			</div>
		{/if}
	</div>
</div>
