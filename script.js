// function whereAmI(lat, long) {
//   fetch(`https://geocode.xyz/${lat},${long}?geoit=json`)
//     .then((response) => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       response.json();
//     })
//     .then((data) => console.log(`I live in ${data.country}`))
//     .catch((err) => {
//       console.error(`${err} 💥💥💥`);
//     });
// }

// whereAmI(48.824, 2.272);
const container = document.getElementById("container");
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    })
    .then((data) => {
      // const population = +data[0].capital;
      // console.log((population / 100000).toFixed(2));
      container.insertAdjacentHTML(
        "beforeend",
        `<img class="flag-img"src="${data[0].flags.png}">
        <p>The country is called ${data[0].altSpellings[1]} </p>
       <div><p>The capital is ${data[0].capital} </p>
       <p>There are ${(+data[0].population / 1000000).toFixed(
         2
       )} Million people</p>
       </div> `
      );
    });
};
// console.log(data[0].flags.png)

function whereAmI(lat, long) {
  fetch(
    `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&apiKey=7e427ba6bf7d4175b5323d39887653cd`
  )
    .then((response) => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    })
    .then((result) => {
      return result.features[0].properties.country;
    })
    .then((country) => getCountryData(country))
    .catch((err) => console.log(`${err} 💥💥💥`));
}

whereAmI(48.824, 2.272);
