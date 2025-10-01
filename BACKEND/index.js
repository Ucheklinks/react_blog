import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import dotenv from "dotenv";
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
import { AddUser } from "./functions/usersFunctions.js";
import { OAuth2Client } from "google-auth-library";
import { GenerateToken } from "./functions/usersFunctions.js";
import { FrontEndData } from "./functions/usersFunctions.js";

const app = express();
const port = 3000;
app.use(
  cors({
    origin: "http://localhost:5173", // Your React app's address
  })
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config();

// Google OAuth client
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

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

// JWT verification middleware to ensure user can access protected route
const verifyJwt = (req, res, next) => {

  console.log(req.body);
  const authHeader = req.headers.authorization;
  console.log("auth header");
  console.log(authHeader);

  if (!authHeader) {
    req.isAuthenticated = false;
    return res.status(401).json({ error: "No token provided" });
  }

  const token = authHeader.split(" ")[1]; // Bearer <jwt>
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload; // attach user info
    req.isAuthenticated = true; // emulate Passport
    next();
  } catch (err) {
    req.isAuthenticated = false;
    return res.status(401).json({ error: "Invalid token" });
  }
};

app.get("/api/articles", async (req, res) => {
  // TODO function to call every single blog article from the db here
  const AllArticles = await GetAllArticles(db);

  res.json({
    data: AllArticles,
  });
});

// * post new articles

app.post("/api/articles", (req, res) => {
  // TODO function to post a new article to the db here
  console.log(req.body);
});

// * get a particular article

app.get("/api/articles/:id", (req, res) => {
  // TODO function to get a particular article from the db here
  // ** might pass req.params.slug or whatever into function here

  var blog_id = req.params.id;
  console.log(blog_id);

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

app.post("/api/auth/google", async (req, res) => {
  const { token } = req.body;

  // Step 1: Verify Google ID token
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT_ID,
  });
  const payload = ticket.getPayload(); // payload contains email, name, sub
  console.log(payload);

  // Step 2: check and verify if user is in db

  const userInfo = await AddUser(payload, db);

  // Step 3: create backend JWT

  const BackendToken = GenerateToken(userInfo);

  // Step 4: create backend JWT to frontend
  FrontEndData(BackendToken, payload, res);
});
// app.get("/auth/google/signedin", CheckAuthenticationStatus());

app.get("/signedin", async (req, res) => {
  // TODO function to call every single blog article from the db here
  const AllArticles = await GetAllArticles(db);
  res.json({
    message: "user is authenticated and logged in",
    data: AllArticles,
  });
});
