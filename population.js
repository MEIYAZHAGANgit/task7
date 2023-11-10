fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    const countriesWithLowPopulation = data.filter((country) => {
      const population = country.population;
      return population && population < 200000;
    });

    countriesWithLowPopulation.forEach((country) => {
      const name = country.name.common;
      const population = country.population;
      console.log(`${name} - Population: ${population}`);
    });
  })
  