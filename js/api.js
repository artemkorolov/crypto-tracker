export async function getCryptoData() {
	try {
		const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false';

		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Server error ${response.status}`);
		}

		const data = await response.json();
		console.log(data);
		return data;

	} catch (error) {
		console.error(`Something went wrong: ${error.message}`);
		return [];
	}

}
