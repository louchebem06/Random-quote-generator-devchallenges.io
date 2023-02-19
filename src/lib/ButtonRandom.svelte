<script lang="ts">
	export let fn: any;
</script>

<button on:click={fn}>
	random
	<span class="material-symbols-outlined">
		autorenew
	</span>
</button>

<style>
	button {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 11px;
		font-size: 18px;
		line-height: 22px;
		color: var(--grey2);
		border: none;
		background-color: transparent;
		cursor: pointer;
		position: fixed;
		top: 31px;
		right: 100px;
	}
</style>
