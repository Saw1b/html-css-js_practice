const currencyFirstEl = document.getElementById("currency-first");


const worthFirstEl = document.getElementById("worth-first")
const currencySecondEl = document.getElementById("currency-second")
const worthSecondEl = document.getElementById("worth-second")
const exchangeRateEl = document.getElementById("exchange-rate")


function updateRate(){
        fetch(`https://v6.exchangerate-api.com/v6/67f43ca7bcf7f20ea234e780/latest/${currencyFirstEl.value}`)
            .then((res) => res.json())
            .then((data) => {
                const rate = data.conversion_rates[currencySecondEl.value];
                exchangeRateEl.textContent = `1 ${currencyFirstEl.value} = ${rate} ${currencySecondEl.value}`;
                worthSecondEl.value = (Number(worthFirstEl.value) * rate).toFixed(2);
            });

}

currencyFirstEl.addEventListener("change", updateRate);

currencySecondEl.addEventListener("change", updateRate);

worthFirstEl.addEventListener("input", updateRate)