import { getCryptoData } from "./api.js";
import { renderCryptoCards } from "./render.js";

async function initApp() {
	console.log("Request started...");
	const coins = await getCryptoData();

	if (coins && coins.length > 0) {
		console.log(`Received ${coins.length} coins`);
		renderCryptoCards(coins);
	} else {
		console.error('The array is empty or an error occurred');
	}
}

initApp();
