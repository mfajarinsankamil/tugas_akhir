import axios from "axios";

import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const NavbarComp = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  });

  const navigate = useNavigate();
  const handleLogout = () => {
    axios
      .get("http://localhost:8001/Logout")
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/LoginToAdmin");
        } else {
          alert("error");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <Box>
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
          <Image src="../src/assets/informasi/Logo.png" boxSize="30px" mr={3} />
          <Navbar.Brand href="/BerandaAdm" className="navbarBrand fs-4 fw-bold">
            TK Islam Al-Manaar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center menu">
              <Button as="a" href="/BerandaAdm">
                Beranda
              </Button>
              <Button as="a" href="/InformasiAdm">
                Informasi
              </Button>
              <Button as="a" href="/ProgramAdm">
                Program
              </Button>
              <Button as="a" href="/PesdikAdm">
                Peserta Didik
              </Button>
              <Menu bg="none">
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  className="menu-tentang"
                >
                  Tentang
                </MenuButton>
                <MenuList className="listmenu">
                  <MenuItem
                    className="text-center"
                    as="a"
                    href="/SekolahAdm"
                    py={4}
                  >
                    Sekolah
                  </MenuItem>
                  <MenuItem as="a" href="/KepsekAdm" py={4}>
                    Kepala Sekolah
                  </MenuItem>
                  <MenuItem as="a" href="/GuruAdm" py={4}>
                    Guru
                  </MenuItem>
                </MenuList>
              </Menu>
              <Button as="a" href="/KontakAdm">
                Kontak
              </Button>
            </Nav>

            <Box className="text-center pengaturan">
              <Button
                size="md"
                // as={Button}
                // backgroundColor="red.600"
                color="black"
                className="keluar fw-bold rounded-1"
                onClick={handleLogout}
              >
                <ArrowRightIcon boxSize={4} pr={1} />
                Logout
              </Button>
            </Box>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Box>
  );
};

export default NavbarComp;
