import { FetchAllArticles } from "../libs/FetchAllArticles";
import { useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";

export function ShowBlogArticles(props) {
  useEffect(() => {
    const getArticles = async () => {
      try {
        const result = await FetchAllArticles();
        props.EditArticleArray(result);
      } catch (error) {
        console.error(error.message);
      }
    };

    getArticles();
  }, []);

  return (
    <Box component="section" sx={{ p: 2, m: 5 }}>
      <Grid container spacing={2}>
        {props.ArticleArray.map((item, index) => {
          return (
            <Grid size={4} key={index}>
              <ArticleCard
                key={index}
                id={item.id}
                title={item.title}
                content={item.content}
                date={item.created_at}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
