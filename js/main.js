import { getCryptoData } from "./api.js";
import { cryptoContainer, renderCryptoCards } from "./render.js";

async function initApp() {
	console.log("Request started...");
	const coins = await getCryptoData();

	if (coins && coins.length > 0) {
		console.log(`Received ${coins.length} coins`);
		renderCryptoCards(coins);
	} else {
		if (cryptoContainer) {
			cryptoContainer.innerHTML = `
			<p class="error-message">The server is resting (Limit reached). <br>
				 Please wait 1 minute and refresh the page.
			</p>`
		}
		console.error('The array is empty or an error occurred');
	}
}

initApp();
