export const cryptoContainer = document.getElementById('crypto-container');

export function renderCryptoCards(coins) {
	if (!cryptoContainer) return;

	cryptoContainer.innerHTML = '';

	coins.forEach(coin => {
		const card = document.createElement('div');
		card.classList.add('coin-card');

		card.innerHTML = `
			<img class="coin-logo">
			<div class="coin-info">
				<h3 class="coin-name"></h3>
				<p class="coin-price"></p>
			</div>
		`;

		const img = card.querySelector('.coin-logo');
		if (img instanceof HTMLImageElement) {
			img.src = coin.image;
			img.alt = coin.name;
		}

		const nameElement = card.querySelector('.coin-name');
		const priceElement = card.querySelector('.coin-price');

		if (nameElement) {
			nameElement.textContent = coin.name;
		}

		if (priceElement) {
			priceElement.textContent = `$${coin.current_price.toLocaleString()}`;
		}

		cryptoContainer.appendChild(card);
	});

}
