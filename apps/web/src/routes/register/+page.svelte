<script>
	import { enhance } from '$app/forms';
	import { Input } from '$lib/components';
</script>

<div class="flex min-h-full">
	<div
		class="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
	>
		<div class="mx-auto w-full max-w-sm lg:w-96">
			<div>
				<img
					class="h-12 w-auto"
					src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
					alt="Your Company"
				/>
				<h2 class="mt-6 text-3xl font-bold tracking-tight text-gray-900">Register a new account</h2>
				<p class="mt-2 text-sm text-gray-600">
					Or
					<a href="/login" class="font-medium text-indigo-600 hover:text-indigo-500"
						>sign in to your account</a
					>
				</p>
			</div>

			<div class="mt-8">
				<div class="mt-6">
					<form action="?/register" method="POST" class="space-y-6" use:enhance>
						<Input type="text" id="name" label="Name" placeholder="John Doe" required />
						<Input type="email" id="email" label="Email" placeholder="john.doe@mail.com" required />
						<Input
							type="password"
							id="password"
							label="Password"
							placeholder="Must have at least 8 characters"
							required
						/>
						<Input
							type="password"
							id="confirmPassword"
							label="Confirm Password"
							placeholder="Must have at least 8 characters"
							required
						/>

						<div class="flex items-center justify-between">
							<div class="flex items-center">
								<input
									id="remember-me"
									name="remember-me"
									type="checkbox"
									required
									class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
								/>
								<label for="remember-me" class="ml-2 block text-sm text-gray-900"
									>I have read and accepted the <a
										href="#"
										class="text-indigo-600 hover:text-indigo-500">privacy policy</a
									></label
								>
							</div>
						</div>

						<div>
							<button
								type="submit"
								class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
								>Register</button
							>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
	<div class="relative hidden w-0 flex-1 lg:block">
		<img
			class="absolute inset-0 h-full w-full object-cover"
			src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
			alt=""
		/>
	</div>
</div>
