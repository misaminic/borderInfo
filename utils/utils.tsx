import countries from './AllCountriesNames.json';

const sortCountriesByName = countries.sort(function (a, b) {
  let nameA = a.name.toUpperCase(); // ignore upper and lowercase
  let nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});

// making countries data be in the format that select library expects it.
export const listOfCountries = sortCountriesByName.map((item) => {
  return { value: item.name, label: item.name };
});
