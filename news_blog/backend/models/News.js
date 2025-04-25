import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    category: { type: String, required: true },
    imageUrl: { type: String, default: "" }, // Optional image URL
    publishedAt: { type: Date, default: Date.now },
  },
  { timestamps: true } // Auto add createdAt & updatedAt
);

const News = mongoose.model("News", newsSchema);

export default News;
