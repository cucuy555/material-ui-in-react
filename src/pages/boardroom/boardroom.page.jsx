import React from "react";
import Grid from "@mui/material/Grid";
import { CommonButton } from "../../components/common/commonButton/commonButton";

function Boardroom() {
  const buttonStyles = {
    fontSize: 20,
    fontWeight: 500,
    backgroundColor: "red",
    "&:hover": {
      backgroundColor: "yellow",
    },
  };
  return (
    <Grid>
      <Grid item xs={8}>
        <h1>Boardroom page</h1>
        <CommonButton variant="contained" size="large" sx={buttonStyles}>
          Button
        </CommonButton>
      </Grid>
    </Grid>
  );
}

export default Boardroom;
