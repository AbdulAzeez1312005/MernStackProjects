const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2/top-headlines?country=in";

export const fetchNews = async () => {
  try {
    const response = await fetch(`${BASE_URL}&apiKey=${API_KEY}`);
    const data = await response.json();

    if (data.status !== "ok") {
      console.error("API Error:", data);
      return [];
    }

    return data.articles;
  } catch (error) {
    console.error("Fetch Error:", error);
    return [];
  }
};
