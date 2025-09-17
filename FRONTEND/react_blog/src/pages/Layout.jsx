import Header from "../components/Header";
import HeroText from "../components/HeroText";
import { Box } from "@mui/material";
import { Outlet } from "react-router";

export function Layout() {
  return (
    <Box>
      <Header />

      <Outlet />
    </Box>
  );
}
