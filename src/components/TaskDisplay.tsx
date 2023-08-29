import { Stack, Card, Typography, Modal, Chip } from "@mui/material";
import React, { useState } from "react";
import { colors } from "../styles/Colors";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { TaskList } from "../services/models/TaskModel";
import { editTask } from "../services/TestService";
import { useMutation } from "@tanstack/react-query";
interface props {
  task: TaskList;
}

export default function TaskDisplay({ task }: props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const deleteTaskService = useMutation(editTask);

  const handleDelete = () => {
    setIsModalOpen(true);
    deleteTaskService.mutate({
      taskId: task.taskId,
      deleted: true,
      title: task.title,
      description: task.description,
      priorityLevel: task.priorityLevel,
      status: task.status,
      endDate: task.endDate,
    });
  };

  return (
    <Card
      variant="outlined"
      sx={{ bgcolor: colors.blue.blue_700, mt: 2, mr: 7 }}
    >
      <Stack flexDirection={"row"}>
        <Typography
          color={colors.grey.grey_800}
          pr={2}
          pl={1}
          py={1}
          width="50%"
        >
          {task.title}
        </Typography>
        <Typography
          color={colors.grey.grey_800}
          pr={2}
          pl={1}
          py={1}
          width="50%"
        >
          {task.status}
        </Typography>
        <Typography color={colors.grey.grey_600} pr={2} pl={1} py={1}>
          {task.endDate}
        </Typography>
        <EditIcon sx={{ color: "#FCCF55" }} />
      </Stack>
      <Stack flexDirection={"row"}>
        <Typography
          color={colors.grey.grey_600}
          pr={2}
          pl={1}
          pb={1}
          width="60%"
        >
          {task.description}
        </Typography>
        <Chip label={task.priorityLevel} color="warning" />
        <DeleteIcon
          sx={{ color: "#C30101", cursor: "pointer" }}
          onClick={handleDelete}
        />
      </Stack>
      <Modal
        open={isModalOpen}
        // hideBackdrop
        // style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <Typography>Are you sure you want to delete</Typography>
      </Modal>
    </Card>
  );
}
