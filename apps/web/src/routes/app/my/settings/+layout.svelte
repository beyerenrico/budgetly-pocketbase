<script>
	import { page } from '$app/stores';

	const navigation = [
		{
			title: 'Profile',
			href: '/my/settings/profile'
		},
		{
			title: 'Account',
			href: '/my/settings/account'
		},
		{
			title: 'Security',
			href: '/my/settings/security'
		}
	];
</script>

<div class="w-full h-full px-2 pt-4">
	<h2 class="text-3xl font-medium">Settings</h2>
	<div class="divider pb-8" />
</div>
<div class="flex w-full h-full space-x-4">
	<ul class="menu bg-base-100 w-56 p-2 rounded-box">
		{#each navigation as element}
			<li>
				<a
					href={element.href}
					class="font-normal {$page.url.pathname === element.href ? 'active' : ''}"
					>{element.title}</a
				>
			</li>
		{/each}
	</ul>
	<div class="w-full">
		<slot />
	</div>
</div>

<style>
</style>
