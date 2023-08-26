import { Stack, Card, Typography, Modal, Chip } from "@mui/material";
import React, { useState } from "react";
import { colors } from "../styles/Colors";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TaskDisplay() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleDelete = () => {
    setIsModalOpen(true);
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
          title
        </Typography>
        <Typography color={colors.grey.grey_600} pr={2} pl={1} py={1}>
          end date
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
          Description
        </Typography>
        <Chip label="prio" color="warning" />
        <DeleteIcon
          sx={{ color: "#C30101", cursor: "pointer" }}
          onClick={handleDelete}
        />
      </Stack>
      <Modal open={isModalOpen} hideBackdrop>
        <Typography>Are you sure you want to delete</Typography>
      </Modal>
    </Card>
  );
}
