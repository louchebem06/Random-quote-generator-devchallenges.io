export function getRandom() {
	const url = "https://quote-garden.onrender.com/api/v3/quotes/random?limit=1";
	return (
		fetch(url)
			.then(async (response) => {
				return await response.json();
			})
			.catch(async (e) => {
				return await e;
			})
	);
}

export function getQuotes(author: string, page: number) {
	const url = `https://quote-garden.onrender.com/api/v3/quotes?author=${author}&limit=3&page=${page}`;
	return (
		fetch(url)
			.then(async (response) => {
				return await response.json();
			})
			.catch(async (e) => {
				return await e;
			})
	);
}
