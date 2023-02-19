<script lang="ts">
	import ButtonAuthor from "$lib/ButtonAuthor.svelte";
	import ButtonRandom from "$lib/ButtonRandom.svelte";
	import Signature from "$lib/Signature.svelte";
	import Quote from "$lib/Quote.svelte";
  	import { getRandom, getQuotes } from "$lib/api";

	export let data: any;

	let text: string;
	let author: string;
	let type: string;
	let clicked: boolean = false;
	let quotes: string[] = [];

	function setValue() {
		const quote = data.data[0];
		text = quote.quoteText;
		author = quote.quoteAuthor;
		type = quote.quoteGenre;
	}
	
	async function newRandom() {
		data = await getRandom();
		clicked = false;
		quotes = []
		setValue();
	}

	setValue();

	async function getQuote() {
		const qts = await getQuotes(author, 1);
		const datas = qts.data;
		datas.forEach((quote: any) => {
			quotes.push(quote.quoteText)
		});
	}
</script>

<svelte:head>
	<title>Random quote generator</title>
</svelte:head>

<ButtonRandom fn={newRandom}/>
{#if clicked}
	<div class="title">
		<h1>{author}</h1>
	</div>
	<div class="quotes">
		{#each quotes as text}
			<Quote {text} />
		{/each}
	</div>
{:else}
<div class="quotes">
	<Quote bind:text={text} />
	<ButtonAuthor fn={getQuote} bind:clicked={clicked} bind:author={author} bind:type={type} />
</div>
{/if}
<Signature />

<style>
	.quotes {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.quotes {
		margin-bottom: 100px;
	}

	.title {
		margin: auto;
		margin-top: 101px;
		max-width: 614px;
		padding-left: 99px;
	}

	.title h1 {
		color: var(--grey3);
		font-size: 36px;
		line-height: 42px;
	}
</style>
