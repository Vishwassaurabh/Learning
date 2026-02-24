//step 1: initialize feather icons for any elements that need icons
//- use feather.replace() to replace placeholder with actual icons
feather.replace();
//step 2:iitialize the application by selecting necessary Dom elements
//-select element for amount input currency dropdown convert button result display base currenecy get rates button exchange rates display mode toggle and mode section

const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("from-currency");
const tocurrency = document.getElementById("to-currency");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const basecurrency = document.getElementById("base-currency");
const getratesBtn = document.getElementById("get-rates-btn");
const exchangeRates = document.getElementById("exchange-rates");
const convertMode = document.getElementById("convert-mode");
const exchangemode = document.getElementById("exchange-mode");
const toggleBtn = document.querySelectorAll(".toggle-btn");

//step 3: define the api key for accessing the exchangeRate-api
//-set the apikey variable to your exchangeRates-API key
const apikey = "477e6439fd193b3e65623789";

//step 4: set up event listener for toggling between conversion and exchange modes

toggleBtn.forEach((btn) => {
  //step 4a:add click event listener to toggle buttons to swithch between modes

  //step 4b: update the ui to reflect the selected mode (conversion or exchange)
  btn.addEventListener("click", () => {
    toggleBtn.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");

    const mode = btn.getAttribute("data-mode");
    if (mode === "convert") {
      convertMode.style.display = "flex";
      exchangemode.style.display = "none";
    } else {
      convertMode.style.display = "none";
      exchangemode.style.display = "flex";
    }
  });
});

//step 5: implement the currency conversion functionality
convertBtn.addEventListener("click", () => {
  //  -step 5a : add a click event listener to the convert button
  //  -step 5b: get the amount  form-currency  and to-currency values form the user
  const amount = amountInput.value;
  const from = fromCurrency.value;
  const to = tocurrency.value;

  // -step 5c:fetch the conversion rate from the api using the selected currencies
  fetch(`https://v6.exchangerate-api.com/v6/${apikey}/pair/${from}/${to}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //-step 5d: calculates the converted amount and update the result display with the converted value and currency symbol
      const rate = data.conversion_rate;
      const convertedamount = (amount * rate).toFixed(2);
      result.innerHTML = `<span class="currency-icon"></span>${convertedamount} ${to}`;
    })
    .catch((error) => {
      console.log(error);
      // step 5e: handle any error that occur during the ap request and provide feedback to the user
    });
});

//step 6: Implement the exchange rates retrival functionality
//-step 6a: add click event listener to the get rates button
getratesBtn.addEventListener("click", () => {
  // step 6b: get the base currency form the user
  const base = basecurrency.value;
  //step6c: fetch the exchange rates form api based on the selected based currency
  fetch(`https://v6.exchangerate-api.com/v6/${apikey}/latest/${base}`)
    .then((response) => {
      return response.json();
      //step 6d:display the fetched exchange rates in a list formate within the exchange
    })
    .then((data) => {
      let ratesHtml = "<h3>exchange Rates</h3><ul>";
    for (const [currency, rate] of Object.entries(data.conversion_rates)) {
        if (currency !== base) {
          ratesHtml += `   <li>
                <span class="currency-icon">${currency}</span>
                ${currency}: ${rate.toFixed(4)}
              </li>`;
        }
      }
      ratesHtml += "</ul>";
      exchangeRates.innerHTML = ratesHtml;
    })
    .catch((error) => {
      //step6e: handle any error that occcur during the api request and provide feedback

      exchangeRates.textContent = "an error occured. please try again";
    });
});
