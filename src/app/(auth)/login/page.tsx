"use client";

import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";

import loginImage from "../../../../public/images/login.jpg";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [rememberMe, setRememberMe] = useState<boolean>(true);

  const loginHandler = (): void => {
    console.log(email, password, "rememberMe :", rememberMe);
  };
  return (
    <Container>
      <Stack
        my={4}
        direction={{ xs: "column", sm: "row" }}
        alignItems="center"
        spacing={4}
        sx={{ bgcolor: "white" }}
      >
        <Image height={667} width={550} alt="login-image" src={loginImage} />
        <Box p={2} flex={1}>
          <Box>
            <Typography variant="h4" fontWeight="bold">
              Welcome 👋
            </Typography>
            <Typography variant="body1" color="gray">
              Please login here
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column" gap={2} my={4}>
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              type="password"
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <FormControlLabel
                control={
                  <Checkbox
                    value={rememberMe}
                    onChange={(e) => setRememberMe(e.currentTarget.checked)}
                  />
                }
                label="Remember Me"
              />
              <Link href="/forgot-password">Forgot Password?</Link>
            </Box>
          </Box>
          <Button
            variant="contained"
            fullWidth
            color="primary"
            size="large"
            onClick={loginHandler}
          >
            Login
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}
