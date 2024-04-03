document.getElementById('currency-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const sourceCurrency = document.getElementById('source-currency').value;
    const targetCurrency = document.getElementById('target-currency').value;
    const amount = parseFloat(document.getElementById('amount').value);

    const apiKey = '8b905a7bd87981330a01cbb6'; // Replace with your API key
    const apiUrl = `https://api.exchangerate-api.com/v4/latest/${sourceCurrency}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch exchange rates');
        }
        const data = await response.json();
        const exchangeRate = data.rates[targetCurrency];
        if (!exchangeRate) {
            throw new Error(`Exchange rate not available for ${sourceCurrency} to ${targetCurrency}`);
        }
        const convertedAmount = amount * exchangeRate;
        document.getElementById('result').textContent = `${amount} ${sourceCurrency} equals ${convertedAmount.toFixed(2)} ${targetCurrency}`;
    } catch (error) {
        console.error(error.message);
        document.getElementById('result').textContent = 'An error occurred. Please try again later.';
    }
});
