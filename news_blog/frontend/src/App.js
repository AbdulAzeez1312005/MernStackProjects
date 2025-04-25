import React from "react";
import NewsFeed from "./components/NewsFeed"; // ✅ Correct path

function App() {
  return (
    <div className="App">
      <h1>Welcome to Our Blog</h1>
      <NewsFeed />
    </div>
  );
}

export default App;
