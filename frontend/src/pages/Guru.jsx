import axios from "axios";

import {
  Box,
  Text,
  Card,
  CardBody,
  Stack,
  Heading,
  Image,
} from "@chakra-ui/react";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

import FooterComp from "../components/FooterComp";
// import NavbarComp from "../components/NavComp";

const Guru = () => {
  const [gurus, setGurus] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8001/Guru")
      .then((res) => setGurus(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {/* <NavbarComp /> */}
      <Box className="guru-page pt-3">
        <Box className="guru min-vh-100 pt-5">
          <Container>
            <Row className="pb-5 mb-5 pt-5 mt-4">
              <Col>
                <Text as="h1" className="text-center fw-bold mt-5">
                  Guru
                </Text>
              </Col>
            </Row>

            <Row pb={5} mb={5}>
              <Col>
                {gurus.map((guru) => (
                  <Card
                    direction={{ base: "column", sm: "row" }}
                    overflow="hidden"
                    variant="outline"
                    key={guru.id}
                    pb={5}
                    mb={5}
                  >
                    <Image
                      objectFit="cover"
                      boxSize="200px"
                      src="../src/assets/informasi/Profile.jpg"
                    />

                    <Stack pl={5}>
                      <CardBody>
                        <Heading size="md" pb={4}>
                          {guru.no}. {guru.nama}
                        </Heading>
                        <Text pl={5} ml={5}>
                          <Text>
                            <b>Jenis Kelamin :</b> {guru.jns_kelamin}
                          </Text>
                          <Text>
                            <b>Tempat Lahir :</b> {guru.tmpt_lahir}
                          </Text>
                          <Text>
                            <b>Tanggal Lahir :</b> {guru.tgl_lahir}
                          </Text>
                          <Text>
                            <b>Alamat :</b> {guru.alamat}
                          </Text>
                          <Text>
                            <b>Agama :</b> {guru.agama}
                          </Text>
                          <Text>
                            <b>Kewarganegaraan:</b> {guru.kwn}
                          </Text>
                          <Text>
                            <b>Berat Badan :</b> {guru.bb}
                          </Text>
                          <Text>
                            <b>Tinggi:</b> {guru.tinggi}
                          </Text>
                          <Text>
                            <b>Golongan Darah :</b> {guru.gol_darah}
                          </Text>
                        </Text>
                        <br />
                        <br />
                      </CardBody>
                    </Stack>
                  </Card>
                ))}
              </Col>
            </Row>
            <FooterComp />
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default Guru;
