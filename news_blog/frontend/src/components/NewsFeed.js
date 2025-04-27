import React, { useEffect, useState } from "react";

const NewsFeed = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("/api/news")
      .then((response) => response.json())
      .then((data) => setNews(data.articles || []))
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  return (
    <div className="news-container">
      <h2>Latest News</h2>
      <ul>
        {news.map((article, index) => (
          <li key={index}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;
