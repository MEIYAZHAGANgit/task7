fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    const countriesWithUSD = data.filter((country) => {
      const currencies = country.currencies;
      return currencies && currencies.hasOwnProperty('USD');
    });

    countriesWithUSD.forEach((country) => {
      const name = country.name.common;
      console.log(`${name}`);
    });
  })
