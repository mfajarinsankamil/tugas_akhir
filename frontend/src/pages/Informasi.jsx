import axios from "axios";

import {
  Box,
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

import FooterComp from "../components/FooterComp";
// import NavComp from "../components/NavComp";
import FaqComp from "../components/FaqComp";

const Informasi = () => {
  const [informations, setInformations] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8001/Informations")
      .then((res) => setInformations(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {/* <NavComp /> */}
      <Box className="informasi-page pt-5">
        <Box
          className="informasi min-vh-100 pt-5 mb-5 pb-5"
          backgroundColor="#ffffff"
          mb={5}
          pb={5}
        >
          <Container>
            <Row className="pb-5 mb-5 pt-5 mt-4">
              <Col>
                <Text
                  as="h1"
                  className="fw-bold text-center animate__animated animate__fadeInUp animated__delay-1s"
                >
                  Informasi
                </Text>
              </Col>
            </Row>

            <Row>
              <Col>
                {informations.length !== 0 ? (
                  <Box>
                    {informations.map((informasi) => (
                      <Card
                        direction={{ base: "column", sm: "row" }}
                        overflow="hidden"
                        variant="outline"
                        key={informasi.id}
                      >
                        <Image
                          className="image-informasi"
                          objectFit="cover"
                          boxSize="150px"
                          src="../src/assets/informasi/informasi.png"
                        />

                        <Stack key={informasi.id}>
                          <CardBody>
                            <Heading size="md">{informasi.judul}</Heading>
                            <Text as="p">Assalamualaikum wr.wb</Text>
                            <Text as="p" py="2">
                              {informasi.keterangan}
                            </Text>
                            <Text as="p">Wassalamualaikum wr.wb</Text>
                          </CardBody>
                        </Stack>
                      </Card>
                    ))}
                  </Box>
                ) : (
                  <h2>No Records</h2>
                )}
              </Col>
            </Row>
          </Container>
        </Box>
      </Box>

      <FaqComp />
      <FooterComp />
    </div>
  );
};

export default Informasi;
