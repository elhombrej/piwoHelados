import * as React from "react";
import { Grid } from "@mui/material";

function NotFound() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      // width="100vw"
      flexWrap={"nowrap"}
      sx={{
        height: "100vh",
        minHeight: "100vh",
        padding: 0,
        maxWidth: "100vw",
        // backgroundColor: "#D28E31",
        // background: "solid",
      }}
    >
      <Grid item> Page Not Found</Grid>{" "}
    </Grid>
  );
}

export default NotFound;
