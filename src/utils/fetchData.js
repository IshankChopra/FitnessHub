export const exerciseOptions = {
  method: "GET",
  //params: { limit: "100" },
  headers: {
    "X-RapidAPI-Key": "bd43abc361msh92aff9ddef954e0p124d25jsn051e37383506",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "bd43abc361msh92aff9ddef954e0p124d25jsn051e37383506",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
