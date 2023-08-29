import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { colors } from "../styles/Colors";
import { addTask } from "../services/TestService";
import { useMutation } from "@tanstack/react-query";
import { CreateTaskModel } from "../services/models/TaskModel";
import { CustomButton } from "./Atomic/CustomButton";
import { DatePicker, DateRangePicker } from "@mui/lab";

type CreateTaskProps = {
  handleClose: () => void;
};

export default function CreateTask({ handleClose }: CreateTaskProps) {
  const addTaskService = useMutation(addTask);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
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
  const handleStatusChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setStatus(event.target.value);
  };

  const handleSave = () => {
    const data: CreateTaskModel = {
      title: title,
      description: description,
      priorityLevel: priorityLevel,
      isDeleted: false,
      endDate: endDate,
      status: status,
    };
    addTaskService.mutate(data, { onSuccess: handleClose });
  };

  return (
    <Stack
      marginX={"200px"}
      marginY={"100px"}
      maxWidth={"70%"}
      maxHeight={"85vh"}
      bgcolor={colors.blue.blue_700}
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
            sx={{ width: "70%", ml: 2, mr: 2, color: "white" }}
          />
          {/* <TextField
            id="outlined-basic"
            label="Status"
            value={status}
            onChange={handleStatusChange}
            variant="outlined"
            size="small"
            sx={{ width: "30%", mr: 2 }}
          /> */}
          <FormControl sx={{ width: "50%", marginRight: "10px" }} size="small">
            <InputLabel>Status</InputLabel>
            <Select label="Status" value={status} onChange={handleStatusChange}>
              <MenuItem value="In Progress">In Progress</MenuItem>
              <MenuItem value="Planning">Planning</MenuItem>
              <MenuItem value="Upcoming">Upcoming</MenuItem>
            </Select>
          </FormControl>
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
          <FormControl sx={{ width: "50%" }} size="small">
            <InputLabel>Priority</InputLabel>
            <Select
              label="Priority"
              value={priorityLevel}
              onChange={handleLevelChange}
            >
              <MenuItem value="Low">Low</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="High">High</MenuItem>
            </Select>
          </FormControl>
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
          onClick={handleClose}
          sx={{
            color: colors.blue,
            backgroundColor: colors.secondary,
            fontWeight: 500,
          }}
        >
          Cancel
        </Button>
        <CustomButton
          variant="contained"
          onClick={handleSave}
          loading={addTaskService.isSuccess}
          sx={{ backgroundColor: colors.primary, width: "6rem" }}
        >
          Save
        </CustomButton>
      </Stack>
    </Stack>
  );
}
