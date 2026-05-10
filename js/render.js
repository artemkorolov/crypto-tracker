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
				<div class="change-container"></div>
			</div>
		`;

		const changeHTML = getPriceChange(coin.price_change_percentage_24h);

		const changeContainer = card.querySelector('.change-container');
		if (changeContainer) {
			changeContainer.innerHTML = changeHTML;
		}

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

function getPriceChange(percentage) {
	if (percentage === null || percentage === undefined) {
		return `<p class="coin-change">0.00%</p>`;
	}

	const changeClass = percentage >= 0 ? 'price-up' : 'price-down';

	const prefix = percentage > 0 ? '+' : '';

	return `
		<p class="coin-change ${changeClass}">
			${prefix}${percentage.toFixed(2)}%
		</p>
	`;
}
