import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./component_color_theme/theme.js";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { FetchSpecificArticle } from "../libs/FetchSpecificArticle.js";

function ArticleCard() {
  const [ClickedArticleTitle, setClickedArticleTitle] = useState(false);

  function isClicked(event) {
    setClickedArticleTitle(true);

    if (ClickedArticleTitle) {
      let ArticleTitle = event.target.textContent;
      FetchSpecificArticle(ArticleTitle);
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <Card
        variant="outlined"
        sx={{
          border: 1,
          borderColor: theme.palette.customGrey.light,
          width: 1 / 3,
        }}
      >
        <CardHeader
          title={
            <a href="#your-anchor" onClick={isClicked}>
              First Post
            </a>
          }
        />

        <Box
          sx={{
            p: 2,
          }}
        >
          <CardMedia
            component="img"
            height="194"
            image="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQnk8r084tMrxKInJJt70UcVrl_blksy6VpqDVCxPwvc4WuchML7iBI7ATLTscYmQgW_t01eYmLDB9SHW1Y2VQCPsm9nl-dmx9uKyYDqkm_bA"
            alt="Paella dish"
          />
        </Box>
        <Typography component="p">date article was written</Typography>
      </Card>
    </ThemeProvider>
  );
}

export default ArticleCard;
