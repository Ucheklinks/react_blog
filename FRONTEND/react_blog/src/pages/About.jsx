import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export function About() {
  return (
    <Box component="section" sx={{ p: 2, m: 5 }}>
      <Stack
        direction="row"
        justifyContent="space-around"
        sx={{ width: "100%" }}
     
      >
        {" "}
        <Box
          component="img"
          src="https://ucheklinks.com/images/me.jpg"
          alt="monochrome image of man with dog"
          sx={{ width: "30%", borderRadius: "16px" }}
        ></Box>
        <Box
          sx={{
            width: "30%",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ height: "50%", width: "100%" }}></Box>
          <Box>
            <Typography component="p" sx={{ fontSize: "15px" }}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus.
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
