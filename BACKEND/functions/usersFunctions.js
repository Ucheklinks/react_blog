import passport from "passport";
import GoogleStrategy from "passport-google-oauth2";
import env from "dotenv";
env.config();
// export function CreateUser() {}

// export function AuthenticateUser() {}

// export function DeleteUser() {}

const GoogleRedirect = () => {
  return passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
  });
};

const CheckAuthenticationStatus = () => {
  return passport.authenticate("google", {
    successRedirect: "/signedin",
    failureRedirect: "/api/articles",
  });
};

passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/signedin",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    },
    async (accessToken, refreshToken, profile, cb) => {
      try {
        // console.log(profile);
        const result = await db.query("SELECT * FROM users WHERE email = $1", [
          profile.email,
        ]);
        if (result.rows.length === 0) {
          const newUser = await db.query(
            "INSERT INTO users (email, password) VALUES ($1, $2)",
            [profile.email, "google"]
          );
          return cb(null, newUser.rows[0]);
        } else {
          return cb(null, result.rows[0]);
        }
      } catch (err) {
        return cb(err);
      }
    }
  )
);

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

export { GoogleRedirect, CheckAuthenticationStatus };
