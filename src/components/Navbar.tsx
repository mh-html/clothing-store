import {
  AppBar,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

import Image from "next/image";
import Link from "next/link";

import logo from "../../public/logo/logo-jewel.png";

interface ButtonType {
  title: string;
  url: string;
}

const BUTTON: ButtonType[] = [
  { title: "Home", url: "/" },
  { title: "Shop", url: "/" },
  { title: "Our Story", url: "/" },
  { title: "blog", url: "/" },
  { title: "Contact us", url: "/" },
];

export default function Navbar() {
  return (
    <AppBar position="static" color="secondary" elevation={0}>
      <Container>
        <Toolbar>
          <Stack
            width="100%"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack direction="row" alignItems="center">
              <Image alt="logo" src={logo} width={80} height={80} />
              <Typography variant="h4">JEWEL</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={4}>
              {BUTTON.map((button, index) => (
                <Link key={index} href={button.url}>
                  {button.title}
                </Link>
              ))}
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Link href="/">
                <SearchIcon />
              </Link>
              <Link href="/">
                <FavoriteBorderRoundedIcon />
              </Link>
              <Link href="/">
                <LocalMallOutlinedIcon />
              </Link>
              <Button variant="contained" color="primary">
                <Link href="/login">Login</Link>
              </Button>
            </Stack>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
