import { Button, Card, Modal, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { colors } from "../styles/Colors";
import CreateTask from "../components/CreateTask";
import DisplayLottie from "../components/displayLottie/DisplayLottie";
import home from "../assets/lottieFiles/home.json";
import TaskDisplay from "../components/TaskDisplay";
import { CustomButton } from "../components/Atomic/CustomButton";

export default function HomePage() {
  const [openSettings, setOpenSettings] = useState(false);
  const handleSettingsModalClose = () => setOpenSettings(false);
  const handleSettingSave = () => {
    setOpenSettings(true);
  };

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

        <TaskDisplay />
        <TaskDisplay />
        <TaskDisplay />

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
