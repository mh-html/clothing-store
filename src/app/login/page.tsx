import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";

import loginImage from "../../../public/images/login.jpg";
import Link from "next/link";

export default function Login() {
  return (
    <Container>
      <Box
        my={4}
        display="flex"
        alignItems="center"
        gap={4}
        sx={{ bgcolor: "white" }}
      >
        <Box>
          <Image height={667} width={550} alt="login-image" src={loginImage} />
        </Box>
        <Box width={500}>
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
      </Box>
    </Container>
  );
}
