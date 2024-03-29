"use client";
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Image from "next/image";
import Link from "next/link";
import forgotPasswordImage from "../../../../public/images/forgot-password.jpg";
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState<string | null>(null);
  const forgotPasswordHadler = (): void => {
    console.log(email);
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
        <Image
          height={600}
          width={500}
          alt="forgot-passwordImage-image"
          src={forgotPasswordImage}
        />
        <Stack gap={2} width="100%">
          <Link href="/login">
            <ArrowBackIosIcon /> Back
          </Link>
          <Typography variant="h4" fontWeight="bold" mt={4}>
            Forgot Password
          </Typography>
          <Typography variant="body1" color="gray">
            Enter your registered email address. we’ll send you a code to reset
            your password.
          </Typography>
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            variant="contained"
            fullWidth
            color="primary"
            size="large"
            onClick={forgotPasswordHadler}
          >
            Send OTP
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
