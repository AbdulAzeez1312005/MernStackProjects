import React from "react";
import { useParams } from "react-router-dom";

function NewsDetail() {
  const { id } = useParams();

  return (
    <div className="container mt-4">
      <h2>News Title {id}</h2>
      <img
        src="https://via.placeholder.com/600"
        className="img-fluid"
        alt="News"
      />
      <p className="mt-3">Full article content for news {id} goes here...</p>
    </div>
  );
}

export default NewsDetail;
