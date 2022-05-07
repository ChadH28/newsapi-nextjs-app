import dotenv from 'dotenv';
import axios from 'axios';
import { json } from 'express/lib/response';
dotenv.config();

const key = process.env.API_KEY;
// posting a search query
export default async function postQueryHandler(req, res) {
  try {
    const search = req.body.search
    console.log(search)
    const result = await axios.get(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${key}`,
      {
        headers: {
          "Content-Type": "application/json"
        },
        method: 'POST',
        body: json.stringify(search)
      }
    )
    const data = await response.json(); 
    console.log(data)
    const news_get = await axios.get(data)
    if (news_get.data.articles.length > 0) {
      res
        .status(200)
        .json(news_get.data.articles)
    } else {
      res
        .status(404)
        .json({ message: `Search query not found on Server` })
    }
  } catch (error) {
    res
      .status(500).json({ error: 'failed to load data' })
  }
};