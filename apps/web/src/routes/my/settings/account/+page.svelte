<script>
	import Alert from '$lib/components/Alert.svelte';
	import Input from '$lib/components/Input.svelte';
	import Modal from '$lib/components/Modal.svelte';

	export let form;
	export let data;

	let emailModalOpen = false;
	let usernameModalOpen = false;
</script>

<div class="flex flex-col w-full h-full space-y-12">
	<div class="w-full">
		<h3 class="text-2xl font-medium">Change Email</h3>
		<div class="divider" />
		<Modal label="change-email" checked={emailModalOpen}>
			<span slot="trigger" class="btn btn-primary">Change Email</span>
			<h3 slot="heading">Change your email</h3>
			<form action="?/updateEmail" method="POST" class="space-y-2">
				<Input
					id="email"
					type="email"
					label="Enter your new email address"
					required={true}
					placeholder={data.user?.email}
					value={form?.data?.email}
				/>
				<button type="submit" class="btn btn-primary w-full">Change email</button>
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
		<Input
			id="currentUsername"
			label="Your current username"
			value={data?.user?.username}
			disabled
			classes="mb-3"
		/>
		<Modal label="change-username" checked={usernameModalOpen}>
			<span slot="trigger" class="btn btn-primary">Change Username</span>
			<h3 slot="heading">Change your username</h3>
			<form action="?/updateUsername" method="POST" class="space-y-2">
				<Input
					id="username"
					type="text"
					label="Enter your new username"
					required={true}
					placeholder={data.user?.username}
					value={form?.data?.username}
				/>
				<button type="submit" class="btn btn-primary w-full">Change username</button>
			</form>
		</Modal>

		{#if form?.field === 'username'}
			<div class="pt-4">
				<Alert type={form?.type}>{form.message}</Alert>
			</div>
		{/if}
	</div>
</div>
