<script>
	import { applyAction, enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import Input from '$lib/components/Input.svelte';
	import { getImageURL } from '$lib/utils';
	import { Icon, Pencil } from 'svelte-hero-icons';

	export let data;
	export let form;

	let loading = false;

	const showPreview = (event) => {
		console.log(event);
		const target = event.target;
		const files = target.files;

		if (files.length > 0) {
			const src = URL.createObjectURL(files[0]);
			const preview = document.getElementById('avatar-preview');

			preview.src = src;
			console.log(preview.src);
		}
	};

	const submitUpdateProfile = () => {
		loading = true;

		return async ({ result }) => {
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
		};
	};
</script>

<div class="flex flex-col w-full h-full">
	<form
		action="?/updateProfile"
		method="POST"
		enctype="multipart/form-data"
		class="flex flex-col w-full"
		use:enhance={submitUpdateProfile}
	>
		<h3 class="text-2xl font-medium">Update Profile</h3>
		<div class="divider" />
		<div class="form-control w-full max-w-lg">
			<label for="avatar" class="label font-medium pb-1">
				<span class="label-text">Profile Picture</span>
			</label>
			<label for="avatar" class="avatar w-32 rounded-full hover:cursor-pointer">
				<label for="avatar" class="absolute -bottom-0.5 -right-0.5 hover:cursor-pointer">
					<span class="btn btn-circle btn-sm btn-secondary">
						<Icon src={Pencil} class="w-4 h-4" />
					</span>
				</label>
				<div class="w-32 rounded-full">
					<img
						src={data.user?.avatar
							? getImageURL(data.user?.collectionId, data.user?.id, data.user?.avatar)
							: `https://ui-avatars.com/api/?name=${data.user?.name}`}
						alt="{data.user?.name}'s Avatar"
						id="avatar-preview"
					/>
				</div>
			</label>
			<input
				type="file"
				name="avatar"
				id="avatar"
				value=""
				accept="image/*"
				hidden
				on:change={showPreview}
				disabled={loading}
			/>
		</div>
		<Input
			id="name"
			label="Name"
			placeholder="Enter your name"
			value={data?.user?.name}
			disabled={loading}
		/>
		<div class="w-full max-w-lg pt-3">
			<button type="submit" class="btn btn-primary w-full max-w-lg" disabled={loading}
				>Update Profile</button
			>
		</div>
		{#if form?.success}
			<div class="alert alert-success shadow-lg w-full max-w-lg">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="stroke-current flex-shrink-0 h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						/></svg
					>

					<span>Your profile has been updated</span>
				</div>
			</div>
		{/if}
	</form>
</div>

<style>
</style>
