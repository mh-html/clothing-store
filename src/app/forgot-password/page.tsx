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
import forgotPasswordImage from "../../../public/images/forgot-password.jpg";

export default function ForgotPassword() {
  return (
    <Container>
      <Stack
        my={4}
        direction={{ xs: "column", sm: "row" }}
        alignItems="center"
        gap={4}
        sx={{ bgcolor: "white" }}
      >
        <Image
          height={667}
          width={550}
          alt="forgot-passwordImage-image"
          src={forgotPasswordImage}
        />
        <Box p={2} flex={1}>
          <Box>
            <Link href="/login">
              <ArrowBackIosIcon /> Back
            </Link>
            <Typography variant="h4" fontWeight="bold" mt={4}>
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
      </Stack>
    </Container>
  );
}
