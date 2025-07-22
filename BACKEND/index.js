import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import env from "dotenv";
import cors from "cors";
import pg from "pg";
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
  GoogleRedirect,
  CheckAuthenticationStatus,
} from "./functions/usersFunctions.js";

const app = express();
const port = 3000;
app.use(
  cors({
    origin: "http://localhost:5173", // Your React app's address
  })
);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 24 hours
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

var ApiArray = [];

// * get all articles

app.get("/api/articles", async (req, res) => {
  // TODO function to call every single blog article from the db here
  const AllArticles = await GetAllArticles(db);
  res.json({
    message: "user is not authenticated",
    data: AllArticles,
  });
});

// * post new articles

app.post("/api/articles", (req, res) => {
  // TODO function to post a new article to the db here
  // const AllArticles = PostArticle(db);
  // console.log(AllArticles);
});

// * get a particular article

app.get("/api/articles/:id", (req, res) => {
  // TODO function to get a particular article from the db here
  // ** might pass req.params.slug or whatever into function here
  var blog_id = req.params.id;

  GetSpecificArticle(blog_id, db);
});

// * edit a particular article

app.put("/api/articles/:id", (req, res) => {
  // TODO function to edit a particular article by id or title
  // ** might pass req.params.slug or whatever into function here
  // var blog_id = req.params.id;
  // EditSpecificArticle(blog_id, db);
});

app.delete("/api/articles/:id", (req, res) => {
  // TODO function to delete a particular article by id or title
  // ** might pass req.params.slug or whatever into function here
  console.log(req.params.id);
  // DeleteSpecificArticle(title);
});

app.get("/auth/google", GoogleRedirect());
app.get("/auth/google/signedin", CheckAuthenticationStatus());

app.get("/signedin", async (req, res) => {
  // TODO function to call every single blog article from the db here
  const AllArticles = await GetAllArticles(db);
  res.json({
    message: "user is authenticated and logged in",
    data: AllArticles,
  });
});
