import { Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { colors } from "../styles/Colors";
import { addTask } from "../services/TestService";
import { useMutation } from "@tanstack/react-query";
import { CreateTaskModel } from "../services/models/TaskModel";

export default function CreateTask() {
  const addTaskService = useMutation(addTask);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priorityLevel, setPriorityLevel] = useState("");
  const [isDeleted, setIsDeleted] = useState(false);
  const [endDate, setEndDate] = useState("");
  const handleTitleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTitle(event.target.value);
  };
  const handleDescChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setDescription(event.target.value);
  };
  const handleDateChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEndDate(event.target.value);
  };
  const handleLevelChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPriorityLevel(event.target.value);
  };
  const handleSave = () => {
    const data: CreateTaskModel = {
      title: title,
      description: description,
      priorityLevel: priorityLevel,
      isDeleted: false,
      endDate: endDate,
    };
    addTaskService.mutate(data);
  };

  return (
    <Stack
      marginX={"200px"}
      marginY={"100px"}
      maxWidth={"70%"}
      maxHeight={"85vh"}
      bgcolor={colors.black1.black_100}
      borderRadius="1vw"
    >
      Add /Edit Task
      <Stack>
        <Stack flexDirection={"row"}>
          <TextField
            id="outlined-basic"
            label="Title*"
            value={title}
            variant="outlined"
            onChange={handleTitleChange}
            size="small"
            sx={{ width: "70%", ml: 2, mr: 2 }}
          />
          {/* <TextField
            id="outlined-basic"
            label="Status"
            // value={basicDetails.examName}
            // onChange={handleExamNameChange}
            variant="outlined"
            size="small"
            sx={{ width: "30%", mr: 2 }}
          /> */}
        </Stack>
        <TextField
          id="outlined-basic"
          label="Description"
          value={description}
          onChange={handleDescChange}
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
            value={priorityLevel}
            onChange={handleLevelChange}
            // value={basicDetails.examName}
            // onChange={handleExamNameChange}
            variant="outlined"
            size="small"
            sx={{ width: "70%", ml: 2, mr: 2 }}
          />
          <TextField
            id="outlined-basic"
            label="End Date"
            value={endDate}
            onChange={handleDateChange}
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
          onClick={handleSave}
          sx={{ backgroundColor: colors.primary, width: "6rem" }}
        >
          Save
        </Button>
      </Stack>
    </Stack>
  );
}
