import passport from "passport";
import GoogleStrategy from "passport-google-oauth2";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();
// export function CreateUser() {}

// export function AuthenticateUser() {}

// export function DeleteUser() {}

export async function AddUser(userPayload, dbclient) {
  let userInfo;
  try {
    // console.log(profile);
    const result = await dbclient.query(
      "SELECT * FROM users WHERE email = $1",
      [userPayload.email]
    );
    if (result.rows.length === 0) {
      const newUser = await dbclient.query(
        "INSERT INTO users (email, username, password_hash) VALUES ($1,$2, $3 ) RETURNING *",
        [userPayload.email, userPayload.given_name, "google"]
      );

      userInfo = newUser;
    } else {
      const newUser = await dbclient.query(
        "SELECT * FROM users WHERE email = $1;",
        [userPayload.email]
      );
      userInfo = newUser;
    }
  } catch (err) {
    return err;
  }

  return userInfo;
}

export function GenerateToken(userInfo) {
  const appToken = jwt.sign(
    { id: userInfo.rows[0].id, email: userInfo.rows[0].email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  return appToken;
}

export function FrontEndData(appJwt, payload, response) {


  response.json({ jwt: appJwt, user: payload });
}
