import {
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo/logo-jewel.png";

import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Navbar() {
  return (
    <Box>
      <AppBar position="static" color="secondary" sx={{ boxShadow: "none" }}>
        <Toolbar>
          <Container>
            <Stack
              flex={1}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack direction="row" alignItems="center">
                <Image alt="logo" src={logo} width={80} height={80} />
                <Typography variant="h4">JEWEL</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={4}>
                <Link href="/">Home</Link>
                <Link href="/">
                  Shop <KeyboardArrowDownIcon />
                </Link>
                <Link href="/">Our Stroy</Link>
                <Link href="/">Blog</Link>
                <Link href="/">Contact Us</Link>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Link href="/">
                  <SearchIcon fontSize="medium" />
                </Link>
                <Link href="/">
                  <FavoriteBorderRoundedIcon fontSize="medium" />
                </Link>
                <Link href="/">
                  <LocalMallOutlinedIcon fontSize="medium" />
                </Link>
                <Button variant="contained" color="primary" href="/login">
                  Login
                </Button>
              </Stack>
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
