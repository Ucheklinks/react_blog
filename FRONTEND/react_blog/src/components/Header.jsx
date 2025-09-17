import { Box } from "@mui/material";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signOut } from "../redux/authSlice";
import { useEffect } from "react";
import { useState } from "react";
import Button from "@mui/material/Button";

function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  // const handleAuth = () => {};
  const d = JSON.stringify(new Date());
  const handleCallbackResponse = async (response) => {
    // 'response.credential' is the Google JWT ID token
    const googleToken = response.credential;

    // Next step: send google jwt to backend

    try {
      const res = await fetch("http://localhost:3000/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: googleToken }), // send to backend
      });

      const data = await res.json();

      if (data.jwt) {
        dispatch(signIn());
      }

      // Optionally save backend JWT for future API calls
      localStorage.setItem("jwt", data.jwt);
      //  use JWT in Authorization header for backend to know authenticated and authorised user
      const protectedRes = await fetch("http://localhost:3000/signedin", {
        headers: {
          Authorization: `Bearer ${data.jwt}`,
        },
      });

      //receive data from protected route here
      const protectedData = await protectedRes.json();
      console.log("Protected data:", protectedData);
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  useEffect(() => {
    /* global google */
    // Step 2b: Initialize Google Sign-In
    google.accounts.id.initialize({
      client_id:
        "964597864443-i0a7gej7arn7p3aq4hj7nej60u7l7pvu.apps.googleusercontent.com", // identify your app
      callback: handleCallbackResponse, // called after login
    });

    // Step 2c: Render Google Sign-In button

    // if (!isLoggedIn) {
    //   google.accounts.id.renderButton(
    //     document.getElementById("signInButton"),
    //     { theme: "outline", size: "large" } // style
    //   );
    // }
  }, []);
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        border: 1,
        color: "grey",
      }}
    >
      <Link to="/">Klinks's Blog</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/About">About me</Link>
      <Link to="/Auth" id="signInButton">
        {" "}
        {isLoggedIn ? <Button variant="contained">Signout</Button> : null}
      </Link>
    </Box>
  );
}

export default Header;
