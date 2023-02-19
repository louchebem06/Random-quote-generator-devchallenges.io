<script lang="ts">
	export let author: string;
	export let type: string;
	export let clicked: boolean;
	export let fn: any;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	on:click={async () => {await fn(); clicked = true}}
	class="buttonAuthor"
>
	<h1>{author}</h1>
	<p>{type}</p>
	<span class="material-symbols-outlined">
		arrow_right_alt
	</span>
</div>

<style>
	.material-symbols-outlined {
		position: absolute;
		top: 50%;
		right: 40px;
		transform: translateY(-50%);
		color: var(--white1);
	}

	.buttonAuthor {
		cursor: pointer;
		width: calc(672px - 29px);
		transform: translateX(52px);
		padding-left: 29px;
		margin-top: 109px;
		position: relative;
	}

	.buttonAuthor:hover {
		background-color: var(--grey3);
	}

	.buttonAuthor:hover .material-symbols-outlined {
		color: var(--white2);
	}

	.buttonAuthor h1 {
		font-size: 24px;
		line-height: 28px;
		color: var(--grey2);
		margin-bottom: 8px;
		margin-top: 50px;
	}

	.buttonAuthor:hover h1 {
		color: var(--white2);
	}

	.buttonAuthor p {
		font-size: 14px;
		line-height: 16px;
		color: var(--grey1);
		margin-bottom: 49px;
	}
</style>
