import { Box, Link } from "@mui/material";


function Header() {
  return (
    <section>
      <Box sx={{ display: "flex", justifyContent: "space-between" , border: 1, color: 'grey' }}>
        <Link href="">Klinks's Blog</Link>
        <Link href="">Contact</Link>
        <Link href="">About me</Link>
        <Link href="">google Sign in</Link>
      </Box>
    </section>
  );
}

export default Header;
