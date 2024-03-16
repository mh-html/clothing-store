import Navbar from "@/components/Navbar";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import hero from "../../public/images/hero.png";

export default function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          bgcolor="white"
          p={2}
          sx={{ background: "#f9fafb" }}
        >
          <Box gap={4}>
            <Typography variant="h3">Classic Exclusive</Typography>
            <Typography variant="h2" fontWeight="bold">
              Womens Collection
            </Typography>
            <Typography variant="h6">UPTO 40% OFF</Typography>
            <Button variant="contained">Shop Now</Button>
          </Box>
          <Image height={600} alt="hero" src={hero} />
        </Stack>
      </Container>
    </>
  );
}
