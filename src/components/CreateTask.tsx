import { Button, Stack } from "@mui/material";
import React from "react";
import { colors } from "../styles/Colors";

export default function CreateTask() {
  return (
    <Stack
      margin="50px 40px"
      maxWidth={"70%"}
      maxHeight={"85vh"}
      bgcolor={colors.primaryCardColor}
      borderRadius="1vw"
    >
      this is new
      <Stack
        direction="row"
        bgcolor={colors.white}
        marginTop="5vh"
        py={1.5}
        borderRadius="1vw"
      >
        <Button
          variant="contained"
          //   onClick={handleClose}
          sx={{
            color: colors.blue,
            backgroundColor: colors.secondary,
            fontWeight: 500,
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          //   onClick={handleSave}
          sx={{ backgroundColor: colors.primary, width: "6rem" }}
        >
          Save
        </Button>
      </Stack>
    </Stack>
  );
}
