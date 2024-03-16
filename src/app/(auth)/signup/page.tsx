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
import signupImage from "../../../../public/images/signup.jpg";
import { useState } from "react";

export default function Signup() {
  const [firstName, setFirstName] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [agreeCondition, setAgreeCondition] = useState<boolean>(false);
  const [errorAgree, setErrorAgree] = useState<boolean>(false);

  const signupHandler = (): void => {
    if (agreeCondition) {
      console.log(firstName, lastName, email, password);
    } else {
      setErrorAgree(true);
    }
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
        <Image height={600} width={500} alt="signup-image" src={signupImage} />
        <Stack width="100%" gap={2}>
          <Typography variant="h4" fontWeight="bold">
            Create New Account
          </Typography>
          <Typography variant="body1">Please enter details</Typography>
          <TextField
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            variant="outlined"
          />
          <TextField
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            variant="outlined"
          />
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
          />
          <TextField
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            variant="outlined"
          />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <FormControlLabel
              control={
                <Checkbox
                  value={agreeCondition}
                  onChange={(e) => setAgreeCondition(e.currentTarget.checked)}
                />
              }
              label="I agree to the Terms & Conditions"
              sx={{ color: "black" }}
            />
          </Box>
          {errorAgree && !agreeCondition && (
            <Typography variant="subtitle1" color="red">
              Please agree to the Terms & Conditions !
            </Typography>
          )}
          <Button
            variant="contained"
            fullWidth
            color="primary"
            size="large"
            onClick={signupHandler}
          >
            Signup
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
