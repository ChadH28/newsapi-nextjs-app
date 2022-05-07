import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

const key = process.env.API_KEY;

export default async function getScienceHandler(req, res) {
  try {
    const result = 'https://newsapi.org/v2/top-headlines?' +
      'category=science&' +
      'country=za&' +
      'pageSize=10&' +
      `apiKey=${key}`;
    const news_get = await axios.get(result)
    if (news_get.data.articles.length > 0) {
      res
        .status(200)
        .json(news_get.data.articles)
    } else {
      res
        .status(404)
        .json({ message: `Articles not found on Server` })
    }
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}