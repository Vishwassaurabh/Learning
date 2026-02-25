document.addEventListener("DOMContentLoaded", () => {
  //select the elements
  const search = document.querySelector(".search");

  async function countrysearch() {
    const input = document.getElementById("searchInput").value;
    const result = document.getElementById("result");

    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${input}`,
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error("country not found");
      }
      const country = data[0];

      //create HTML Elements country search data show
      const currencies = Object.values(country.currencies || {})
        .map((currency) => {
          return `${currency.name} (${currency.symbol})`;
        })
        .join(" ");

      const languages = Object.values(country.languages || {}).join(" ");
      result.innerHTML=`
            <img src=${country.flags.png}>
            <div class="country-info">
            
            <div class="info-item">
            <h3>country name</h3>
            <p>${country.name.common}</p>
            </div>

            <div class="info-item">
            <h3>Capital</h3>
            <p>${country.capital}</p>
            </div>

            <div class="info-item">
            <h3>populations</h3>
            <p>${country.population}</p>
            </div>

            <div class="info-item">
            <h3>currencies</h3>
            <p>${currencies || N/A}</p>
            </div>

            
            <div class="info-item">
            <h3>Region</h3>
            <p>${country.region}</p>
            </div>

            
            <div class="info-item">
            <h3>language</h3>
            <p>${languages || N/A}</p>
            </div>
            </div>
      `;
      result.classList.remove("hidden")
    } catch (error) {}
    //add events
  }
  search.addEventListener("click",countrysearch)
});
