import { Button, Stack, TextField } from "@mui/material";
import React from "react";
import { colors } from "../styles/Colors";

export default function CreateTask() {
  return (
    <Stack
      marginX={"200px"}
      marginY={"100px"}
      maxWidth={"70%"}
      maxHeight={"85vh"}
      bgcolor={colors.black1.black_100}
      borderRadius="1vw"
    >
      Add /Edit Task{" "}
      <Stack>
        <Stack flexDirection={"row"}>
          <TextField
            id="outlined-basic"
            label="Title*"
            // value={basicDetails.examName}
            // onChange={handleExamNameChange}
            variant="outlined"
            size="small"
            sx={{ width: "70%", ml: 2, mr: 2 }}
          />
          <TextField
            id="outlined-basic"
            label="Status"
            // value={basicDetails.examName}
            // onChange={handleExamNameChange}
            variant="outlined"
            size="small"
            sx={{ width: "30%", mr: 2 }}
          />
        </Stack>
        <TextField
          id="outlined-basic"
          label="Description"
          // value={basicDetails.examName}
          // onChange={handleExamNameChange}
          variant="outlined"
          size="small"
          sx={{ mt: 2, ml: 2, mr: 2 }}
        />
        <Stack flexDirection={"row"} mt={2}>
          <TextField
            id="outlined-basic"
            label="Priority Level*"
            // value={basicDetails.examName}
            // onChange={handleExamNameChange}
            variant="outlined"
            size="small"
            sx={{ width: "70%", ml: 2, mr: 2 }}
          />
          <TextField
            id="outlined-basic"
            label="End Date"
            // value={basicDetails.examName}
            // onChange={handleExamNameChange}
            variant="outlined"
            size="small"
            sx={{ width: "30%", mr: 2 }}
          />
        </Stack>
      </Stack>
      <Stack direction="row" marginTop="5vh" py={1.5} borderRadius="1vw">
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
