fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    
    const asiaCountries = data.filter((country) =>
      country.region.includes("Asia")
    );

   
    const countryNames = asiaCountries.map((country) => country.name.common);
    console.log("Countries in Asia:", countryNames);
  })
