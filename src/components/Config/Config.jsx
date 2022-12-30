export const BASE_URL = "https://restcountries.com/v2/";

export const ALL_CONTRIES =
  BASE_URL + "all?fields=name,capital,flags,population,region";

export const searchByContrie = name => BASE_URL + "name/" + name;

export const filterByCode = codes =>
  BASE_URL + "alpha?codes=" + codes.join(",");
