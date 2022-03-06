function whereAmI(lat, long) {
  fetch(
    `https://geocode.xyz/${lat},${long}?geoit=json&auth=217766118136315206757x13894 `
  )
    .then((jsonLocation) => jsonLocation.json())
    .then((data) => console.log(data));
}

whereAmI(48.824, 2.272);
