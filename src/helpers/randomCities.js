export const citiesId = [
  5128581, 5368361, 5391959, 4699066, 5809844, 5392171, 638242, 6455259,
  6539761, 6693229, 2174003, 1816670, 1835848, 1850147, 1880252, 1796236,
  1835848,
];

export function getRandomCityIds(cities) {
  const randomCitiesIds = [];
  while (randomCitiesIds.length < 5) {
    let randomIndex = Math.floor(Math.random() * cities.length);
    if (!randomCitiesIds.includes(cities[randomIndex])) {
      randomCitiesIds.push(cities[randomIndex]);
    }
  }
  return randomCitiesIds;
}
