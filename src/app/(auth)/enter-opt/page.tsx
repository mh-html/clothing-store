"use client";

import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "next/image";
import Link from "next/link";
import enterOpt from "../../../../public/images/enteropt.jpg";
import { useState } from "react";

export default function EnterOpt() {
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Stack
        my={4}
        direction="row"
        alignItems="center"
        gap={4}
        sx={{ bgcolor: "white" }}
      >
        <Image height={667} width={550} alt="enter-opt-image" src={enterOpt} />
        <Stack>
          <Link href="/forgot-password">
            <ArrowBackIosIcon /> Back
          </Link>
          <Typography variant="h4" fontWeight="bold" mt={4}>
            Enter OTP
          </Typography>
          <Typography my={2} variant="body1" color="gray">
            We have share a code of your registered email address
            robertfox@example.com
          </Typography>
          <TextField
            fullWidth
            type="number"
            variant="outlined"
            sx={{ margin: "12px 0" }}
          />
          <Button
            variant="contained"
            fullWidth
            color="primary"
            size="large"
            onClick={handleClickOpen}
          >
            Verify
          </Button>
        </Stack>
      </Stack>
      <Dialog open={open} onClose={handleClose}>
        <CheckCircleIcon sx={{ fontSize: "44px", margin: "0 auto" }} />
        <DialogTitle>Password Changed Successfully</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your password has been updated successfully
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={handleClose}
            fullWidth
            href="/login"
          >
            Back to Login
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
