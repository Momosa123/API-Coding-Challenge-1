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
    .catch((err) => console.log(`${err} 💥💥💥`));
}

whereAmI(48.824, 2.272);
const getCountryData = function (country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`);
};
