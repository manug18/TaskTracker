import { Button, Card, Modal, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { colors } from "../styles/Colors";
import CreateTask from "../components/CreateTask";
import DisplayLottie from "../components/displayLottie/DisplayLottie";
import home from "../assets/lottieFiles/home.json";
import TaskDisplay from "../components/TaskDisplay";
import { CustomButton } from "../components/Atomic/CustomButton";
import { getAllTask } from "../services/TestService";
import { useQuery } from "@tanstack/react-query";
import { TaskList } from "../services/models/TaskModel";

export default function HomePage() {
  const [openSettings, setOpenSettings] = useState(false);
  const handleSettingsModalClose = () => setOpenSettings(false);
  const handleSettingSave = () => {
    setOpenSettings(true);
  };
  const taskService = useQuery(["taskList"], getAllTask);

  const [taskList, setTaskList] = useState<TaskList[]>([]);
  useEffect(() => {
    if (taskService.data?.data) {
      setTaskList(taskService.data?.data);
    }
  }, [taskService]);

  return (
    <Stack
      bgcolor={colors.black1.black_100}
      sx={{ width: "100%", height: "100%" }}
      flexDirection={"row"}
    >
      <Stack>
        <DisplayLottie animationData={home} />
      </Stack>
      <Stack width={"50%"}>
        <Typography color={colors.white}>this is home page</Typography>

        {taskList.map((task, index) => (
          <TaskDisplay key={index} task={task} />
        ))}

        <Modal
          open={openSettings}
          onClose={handleSettingsModalClose}
          // hideBackdrop
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <CreateTask />
        </Modal>
        <CustomButton
          onClick={handleSettingSave}
          size="small"
          sx={{
            bgcolor: colors.newTaskButtonColor,
            ml: 19,
            mt: 1,
            width: "9rem",
          }}
        >
          Add a new Task
        </CustomButton>
      </Stack>
    </Stack>
  );
}
