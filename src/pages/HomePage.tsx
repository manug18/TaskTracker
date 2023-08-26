import { Button, Card, Modal, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { colors } from "../styles/Colors";
import CreateTask from "../components/CreateTask";

export default function HomePage() {
  const [openSettings, setOpenSettings] = useState(false);
  const handleSettingsModalClose = () => setOpenSettings(false);
  const handleSettingSave = () => {
    setOpenSettings(true);
  };

  return (
    <Stack bgcolor={colors.black} sx={{ width: "100%", height: "100%" }}>
      <Typography color={colors.white}>this is home page</Typography>
      <Card
        variant="outlined"
        sx={{ bgcolor: colors.primaryCardColor, height: "20%", width: "50%" }}
        elevation={3}
      >
        <Typography color={colors.white}>hello</Typography>
      </Card>
      <Modal
        open={openSettings}
        onClose={handleSettingsModalClose}
        hideBackdrop
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <CreateTask />
      </Modal>
      <Button onClick={handleSettingSave}>Add a new Task</Button>
    </Stack>
  );
}
