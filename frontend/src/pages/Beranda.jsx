import axios from "axios";
import { useEffect, useState } from "react";
import {
  Box,
  // Image,
  // Heading,
  Text,
  // ButtonGroup,
  // Card,
  // Image,
  // CardBody,
  Button,
} from "@chakra-ui/react";
import { Container, Row, Col } from "react-bootstrap";
// import { proGul } from "../data/dataindex";
//
// import NavbarComp from "../components/NavComp";
import FooterComp from "../components/FooterComp";
import FaqComp from "../components/FaqComp";
import { useNavigate } from "react-router-dom";

function Beranda() {
  let navigate = useNavigate();
  const [visis, setVisis] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8001/Visi")
      .then((res) => setVisis(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [misis, setMisis] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8001/Misi")
      .then((res) => setMisis(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [tujuans, setTujuans] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8001/Tujuan")
      .then((res) => setTujuans(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {/* <NavbarComp /> */}

      <Box className="beranda">
        <Box
          className="box-header"
          bgImage="../src/assets/informasi/sekolahfoto.jpg"
        >
          <Container>
            <Row className="min-vh-100 d-flex align-items-center">
              <Col lg="6">
                <Text as="h1" fontSize="30" pr={5} color="white">
                  <b>
                    Mari Bergabung Di <br />
                    <span> Taman Kanak-Kanak</span> <br />
                    Islam Al-Manaar
                  </b>
                </Text>
                <Text as="p" pr={5} color="white" fontWeight="bold">
                  TK Islam Al-Manaar adalah rumah kedua bagi setiap anak. Dengan
                  lingkungan yang ramah anak, kami menciptakan suasana di mana
                  setiap anak merasa aman, senang, dan siap untuk belajar.
                </Text>
                <Button
                  color="white"
                  backgroundColor="red.600"
                  _hover={{ background: "teal" }}
                  onClick={() => navigate("/Program")}
                >
                  Lihat Program
                </Button>
              </Col>
            </Row>
          </Container>
        </Box>
      </Box>

      <Box className="vimitu-page mb-5 pb-5">
        <Box className="min-vh-100 d-flex align-items-center">
          <Container>
            <Row className="pb-5 mb-5 pt-5 mt-4">
              <Col>
                <Text as="h1" className="text-center fw-bold mt-5">
                  Visi, Misi dan Tujuan
                </Text>
              </Col>
            </Row>

            <Row>
              <Col>
                <Box
                  bg="teal"
                  w="100%"
                  p={2}
                  color="white"
                  my={5}
                  fontSize={15}
                >
                  Visi dan Misi
                </Box>

                <Box>
                  <Text fontSize="15" pt={5}>
                    <b>Visi : </b>
                  </Text>
                  <Box pb={5}>
                    {visis.map((visi) => (
                      <Text key={visi.id}>
                        {visi.no}. {visi.isi_ket}
                      </Text>
                    ))}
                  </Box>
                </Box>

                <Box>
                  <Text fontSize="15">
                    <b>Misi : </b>
                  </Text>
                  <Box pb={5}>
                    {misis.map((misi) => (
                      <Text key={misi.id}>
                        {misi.no}. {misi.isi_ket}
                      </Text>
                    ))}
                  </Box>
                </Box>

                {/* TUJUAN */}
                <Box
                  bg="teal"
                  w="100%"
                  p={2}
                  color="white"
                  my={5}
                  fontSize="15"
                >
                  Tujuan
                </Box>

                <Box pt={5}>
                  <Text fontSize="15">
                    <b>Tujuan : </b>
                  </Text>
                  <Box pb={5} mb={5}>
                    {tujuans.map((tujuan) => (
                      <Text key={tujuan.id}>
                        {tujuan.no}. {tujuan.isi_ket}
                      </Text>
                    ))}
                  </Box>
                </Box>
              </Col>
            </Row>
          </Container>
        </Box>
      </Box>

      {/* <Box className="program-page">
        <Box
          className="program-unggulan min-vh-100 pt-3"
          mb={100}
          pb={110}
          backgroundColor="#E0F2F1"
        >
          <Container>
            <Row className="pb-5 mb-5 pt-5 mt-4">
              <Col>
                <Text
                  as="h1"
                  fontSize="35"
                  className="text-center fw-bold mt-5"
                >
                  Program Unggulan
                </Text>
              </Col>
            </Row>

            <Row>
              {proGul.map((pg) => {
                return (
                  <Col key={pg.id} className="shadow rounded">
                    <Card boxShadow="none">
                      <Image
                        src={pg.image}
                        className="mb-3 mt-3 rounded-top"
                        px="2"
                        h="250"
                        w="100%"
                      />
                      <CardBody>
                        <Heading size="15px" className="mb-3 px-1">
                          {pg.judul}
                        </Heading>

                        <Text as="p" py="1" px="1">
                          {pg.keterangan}
                        </Text>
                      </CardBody>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </Box>
      </Box> */}

      <FaqComp />
      <FooterComp />
    </div>
  );
}

export default Beranda;
