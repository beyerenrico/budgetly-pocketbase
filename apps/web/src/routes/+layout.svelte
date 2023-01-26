<script>
	import '../app.postcss';

	import { Alert } from '$lib/components';
	import { getImageURL } from '$lib/utils';
	import { page } from '$app/stores';

	export let data;

	let type;
	let message;

	$: type = $page.url.searchParams.get('type');
	$: message = $page.url.searchParams.get('message');
</script>

<div class="min-h-screen flex flex-col">
	<nav class="navbar bg-base-100 border-b">
		<div class="flex-1">
			<a href="/" class="btn btn-ghost normal-case text-xl">budgetly</a>
		</div>
		<div class="flex-none">
			{#if !data.user}
				<div class="dropdown dropdown-end">
					<a href="/login" class="btn btn-primary">Login</a>
					<a href="/register" class="btn btn-secondary">Register</a>
				</div>
			{:else}
				<div class="dropdown dropdown-end mr-4">
					<a href="/budgetbooks/new" class="btn btn-primary btn-outline">Add Budget Book</a>
				</div>
				<div class="dropdown dropdown-end">
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label tabindex="0" class="btn btn-ghost btn-circle avatar">
						<div class="w-10 rounded-full">
							<img
								src={data.user?.avatar
									? getImageURL(data.user?.collectionId, data.user?.id, data.user?.avatar)
									: `https://ui-avatars.com/api/?name=${data.user?.name}`}
								alt="{data.user?.name}'s Avatar"
								id="avatar-preview"
							/>
						</div>
					</label>
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<ul
						tabindex="0"
						class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<a href="/my/budgetbooks" class="justify-between">My Budget Books</a>
						</li>
						<li>
							<a href="/my/settings" class="justify-between">Settings</a>
						</li>
						<li>
							<form action="/logout" method="POST">
								<button type="submit" class="w-full text-start">Logout</button>
							</form>
						</li>
					</ul>
				</div>
			{/if}
		</div>
	</nav>
	<main class="py-4 h-full flex-grow">
		{#if type && message}
			<div class="mx-auto max-w-lg pb-8">
				<Alert {type}>{message}</Alert>
			</div>
		{/if}
		<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
			<slot />
		</div>
	</main>
	<footer class="footer footer-center p-4 bg-base-300 text-base-content">
		<div>
			<p>Copyright © 2023 - All right reserved by Budgetly</p>
		</div>
	</footer>
</div>
