import { Box, Button, Container, TextField, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Image from "next/image";

import forgotPasswordImage from "../../../public/images/forgot-password.jpg";
import Link from "next/link";

export default function ForgotPassword() {
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
          <Image
            height={667}
            width={550}
            alt="forgot-passwordImage-image"
            src={forgotPasswordImage}
          />
        </Box>
        <Box width={500}>
          <Box>
            <Button size="small" variant="text" sx={{ margin: "16px 0" }}>
              <Link href="/login">
                <ArrowBackIosIcon /> Back
              </Link>
            </Button>
            <Typography variant="h4" fontWeight="bold">
              Forgot Password
            </Typography>
            <Typography my={2} variant="body1" color="gray">
              Enter your registered email address. we’ll send you a code to
              reset your password.
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column" gap={2} my={4}>
            <TextField id="outlined-basic" label="Email" variant="outlined" />
          </Box>
          <Button variant="contained" fullWidth color="primary" size="large">
            Send OTP
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
