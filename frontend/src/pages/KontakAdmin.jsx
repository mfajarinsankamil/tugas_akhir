import axios from "axios";

import { Box, Text, AspectRatio } from "@chakra-ui/react";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import NavbarCompAdmin from "../components/NavCompAdmin";
import FooterCompAdmin from "../components/FooterCompAdmin";
import { EditIcon, PhoneIcon, EmailIcon } from "@chakra-ui/icons";

const KontakAdmin = () => {
  const [kontaks, setKontaks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8001/Kontak")
      .then((res) => setKontaks(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <NavbarCompAdmin />

      <Box className="kontak-page pt-3">
        <Box className="kontak min-vh-100 pt-5">
          <Container>
            <Row className="pb-5 mb-5 pt-5 mt-4">
              <Col>
                <Text as="h1" className="text-center fw-bold mt-5">
                  Kontak - Admin
                </Text>
              </Col>
            </Row>

            <Row className="pb-5 mb-5">
              <Col>
                {kontaks.map((kontak) => (
                  <Box key={kontak.id}>
                    <Text>
                      <PhoneIcon boxSize={5} pr={1} />
                      <b>No Telepon :</b> <br /> {kontak.no_tlpn}
                    </Text>
                    <Text>
                      <EmailIcon boxSize={5} pr={1} />
                      <b>Email :</b> <br /> {kontak.email}
                    </Text>
                    <Text>
                      <Text
                        as="i"
                        className="fas fa-map-marker-alt"
                        pr={1}
                      ></Text>
                      <b>Alamat :</b> <br /> {kontak.alamat}
                    </Text>
                    <Box pb={5}>
                      <Link
                        to={`/UpdateKontakAdm/${kontak.id}`}
                        className="btn btn-info btn-sm me-2"
                      >
                        <EditIcon boxSize={5} pr={1} />
                        Update
                      </Link>
                    </Box>
                    <Box pl={5}>
                      <AspectRatio
                        // float="right"
                        width="100%"
                        maxW="100%"
                        ratio={16 / 9}
                      >
                        <iframe src={kontak.gmaps} />
                      </AspectRatio>
                    </Box>
                  </Box>
                ))}
              </Col>
            </Row>
          </Container>
        </Box>
      </Box>

      <FooterCompAdmin />
    </div>
  );
};

export default KontakAdmin;
