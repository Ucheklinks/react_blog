import { ShowBlogArticles } from "../components/ShowBlogArticles";
import { Box } from "@mui/material";

import { useState } from "react";

export function SignedIn() {
  const [BlogArray, SetBlogArray] = useState([]);
  return (
    <Box component="section">
      <ShowBlogArticles
        ArticleArray={BlogArray}
        EditArticleArray={SetBlogArray}
      />
    </Box>
  );
}
