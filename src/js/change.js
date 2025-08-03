 const fromCurrency = document.getElementById('from-currency');
    const toCurrency = document.getElementById('to-currency');
    const fromAmount = document.getElementById('from-amount');
    const toAmount = document.getElementById('to-amount');
    const convertBtn = document.getElementById('convert-btn');

    // Pulsuz API-dən istifadə (dəyişə də bilərik istəsən)
    convertBtn.addEventListener('click', () => {
      const from = fromCurrency.value;
      const to = toCurrency.value;
      const amount = parseFloat(fromAmount.value);

      if (!amount || amount <= 0) {
        alert("Zəhmət olmasa düzgün məbləğ daxil edin.");
        return;
      }

fetch(`https://api.exchangerate.host/latest?base=${from}`)
        .then(res => res.json())
        .then(data => {
          const rate = data.rates[to];
          const result = (amount * rate).toFixed(2);
          toAmount.value = result;
        })
        .catch(() => {
          alert("Valyuta məlumatları alınmadı.");
        });
    });

    function swapCurrencies() {
      const temp = fromCurrency.value;
      fromCurrency.value = toCurrency.value;
      toCurrency.value = temp;
    }