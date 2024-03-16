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
import Link from "next/link";
import { useState } from "react";

import loginImage from "../../../../public/images/login.jpg";

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
        direction="row"
        alignItems="center"
        sx={{ bgcolor: "white" }}
      >
        <Box display={{ xs: "none", md: "block" }}>
          <Image height={600} width={500} alt="login-image" src={loginImage} />
        </Box>
        <Stack flexGrow={1} p={2} gap={2}>
          <Typography variant="h4" fontWeight="bold">
            Welcome 👋
          </Typography>
          <Typography variant="body1" color="gray">
            Please login here
          </Typography>
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
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.currentTarget.checked)}
                />
              }
              label="Remember Me"
            />
            <Link href="/forgot-password">Forgot Password?</Link>
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
          <Button fullWidth sx={{ marginTop: "8px" }}>
            <Link href="/signup">Do Not have any Accont?</Link>
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
