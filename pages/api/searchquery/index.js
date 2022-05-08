import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

const key = process.env.API_KEY;

// posting a search query
export default async function postQueryHandler(req, res) {
  const search = req.body
  console.log("log of search", search.query)
  try {
    const result = await axios.get(
      `https://newsapi.org/v2/everything?q=${search.query}&
      sortBy=popularity&
      pageSize=10&
      apiKey=${key}`
    )
    console.log(result)
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
};