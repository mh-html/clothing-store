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

import loginImage from "../../../public/images/login.jpg";
import Link from "next/link";

export default function Login() {
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
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField
              id="outlined-basic"
              type="password"
              label="Password"
              variant="outlined"
            />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Remember Me"
              />
              <Link href="/forgot-password">Forgot Password?</Link>
            </Box>
          </Box>
          <Button variant="contained" fullWidth color="primary" size="large">
            Login
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}
