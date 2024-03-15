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
import signupImage from "../../../public/images/signup.jpg";

export default function Signup() {
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
            alt="signup-image"
            src={signupImage}
          />
        </Box>
        <Box width={500}>
          <Box>
            <Typography variant="h4" fontWeight="bold">
              Create New Account
            </Typography>
            <Typography variant="body1">Please enter details</Typography>
          </Box>
          <Box display="flex" flexDirection="column" gap={2} my={4}>
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
            />
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
                label="I agree to the Terms & Conditions"
                sx={{ color: "#000" }}
              />
            </Box>
          </Box>
          <Button variant="contained" fullWidth color="primary" size="large">
            Signup
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
