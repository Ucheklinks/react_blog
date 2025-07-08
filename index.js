import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import pg from "pg";
import env from "dotenv";
import passport from "passport";
import GoogleStrategy from "passport-google-oauth2";
import session from "express-session";
import multer from "multer";
import convert from "heic-convert";
import {
  GetAllArticles,
  GetSpecificArticle,
  PostArticle,
  EditSpecificArticle,
  DeleteSpecificArticle,
} from "./functions/articlesFunctions.js";
import {
  CreateUser,
  AuthenticateUser,
  DeleteUser,
} from "./functions/usersFunctions.js";

const app = express();
const port = 3000;

env.config();

const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});
db.connect();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  
});

var ApiArray = [];

// * get all articles

app.get("/api/articles", async (req, res) => {
  // TODO function to call every single blog article from the db here
  const AllArticles= await GetAllArticles(db);
  res.json(AllArticles);


 
});

// * post new articles

app.post("/api/articles", (req, res) => {
  // TODO function to post a new article to the db here
  // !continue tomorrow
  PostArticle();
});

// * get a particular article

app.get("/api/articles/:title", (req, res) => {
  // TODO function to get a particular article from the db here
  // ** might pass req.params.slug or whatever into function here
  GetSpecificArticle(req.params.slug);
});

// * edit a particular article

app.put("/api/articles/:title", (req, res) => {
  // TODO function to edit a particular article by id or title
  // ** might pass req.params.slug or whatever into function here
  EditSpecificArticle(req.params.slug);
});

app.delete("/api/articles/:id", (req, res) => {
  // TODO function to delete a particular article by id or title
  // ** might pass req.params.slug or whatever into function here
  DeleteSpecificArticle(title);
});
