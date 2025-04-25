import React, { useEffect, useState } from "react";
import { fetchNews } from "../services/newsService";

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchNews().then(setArticles);
  }, []);

  return (
    <div className="container mt-4">
      <h2>Latest News</h2>
      <div className="row">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-4">
              <div className="card">
                <img
                  src={article.urlToImage || "https://via.placeholder.com/300"}
                  className="card-img-top"
                  alt="News"
                />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.description}</p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading news...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
