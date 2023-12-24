export const exerciseOptions = {
  method: "GET",
  //params: { limit: "100" },
  headers: {
    "X-RapidAPI-Key": "ad2e9d9f59msha2c47376365035ap1177f0jsn6a96022d735c",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "ad2e9d9f59msha2c47376365035ap1177f0jsn6a96022d735c",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
