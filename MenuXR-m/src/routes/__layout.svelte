<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>Restaurante - 2022</p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	footer {
		font-size:15px;
		background: white;
		padding: 10px !important;
		border-radius: 45px 45px 0px 0px;
	}


	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
