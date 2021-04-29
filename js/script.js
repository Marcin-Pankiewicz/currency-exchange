{
    const rateContainer = document.querySelector(".js-containerRate");
    const hideShowRateButton = document.querySelector(".js-hideShowRateButton");
    const eurRate = document.querySelector(".js-eur");
    const gbpRate = document.querySelector(".js-gbp");
    const usdRate = document.querySelector(".js-usd");
    eurRate.value = 4.5811;
    gbpRate.value = 5.2662;
    usdRate.value = 3.7939;

    const calculateResult = (amount, rateOption) => {
        switch (rateOption) {
            case "eur":
                currencyName = "EUR";
                return (amount / eurRate.value).toFixed(2);

            case "gbp":
                currencyName = "GBP";
                return (amount / gbpRate.value).toFixed(2);

            case "usd":
                currencyName = "USD";
                return (amount / usdRate.value).toFixed(2);
        };
    };

    const onClickHideShowRateTable = () => {
        rateContainer.classList.toggle("container__rateFieldsetOn");
        hideShowRateButton.innerText = rateContainer.classList.contains("container__rateFieldsetOn") ? "Ukryj stawki" : "Pokaż stawki";
    };

    const updateResultText = (result, currencyName) => {
        const cashElement = document.querySelector(".js-formCash");

        cashElement.innerText = `Kupisz: ${result} ${currencyName} `;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amountInput");
        const currencyElement = document.querySelector(".js-formSelect");

        const amount = +amountElement.value;
        const rateOption = currencyElement.value;

        let result = calculateResult(amount, rateOption);

        updateResultText(result, currencyName);

    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
        hideShowRateButton.addEventListener("click", onClickHideShowRateTable);
    };

    init();

}