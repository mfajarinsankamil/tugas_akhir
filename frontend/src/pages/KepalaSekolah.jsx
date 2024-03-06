import axios from "axios";

import {
  Box,
  Text,
  Card,
  CardBody,
  Stack,
  Heading,
  Image,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

import FooterComp from "../components/FooterComp";
// import NavbarComp from "../components/NavComp";

const KepalaSekolah = () => {
  const [kepsekidents, setKepsekidents] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8001/KepsekIdentitas")
      .then((res) => setKepsekidents(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [kepsekripens, setKepsekripens] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8001/KepsekRipen")
      .then((res) => setKepsekripens(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [kepsekripangs, setKepsekripangs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8001/KepsekRipang")
      .then((res) => setKepsekripangs(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {/* <NavbarComp /> */}

      <Box className="kepsek-page pt-3">
        <Box className="kepsek min-vh-100 pt-5">
          <Container>
            <Row className="pb-5 mb-5 pt-5 mt-4">
              <Col>
                <Text as="h1" className="text-center fw-bold mt-5">
                  Kepala Sekolah
                </Text>
              </Col>
            </Row>

            <Row pb={5} mb={5}>
              <Col>
                <Card
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  variant="outline"
                  pb={5}
                  mb={5}
                >
                  <Image
                    objectFit="cover"
                    boxSize="200px"
                    src="../src/assets/informasi/Profile.jpg"
                    alt="Kepala Sekolah"
                  />

                  <Stack pl={5}>
                    <CardBody>
                      <Heading size="md">1. Identitas</Heading>
                      <br />
                      {kepsekidents.map((kepsekiden) => (
                        <Text pl={5} ml={5} key={kepsekiden.id}>
                          <Text>
                            <b>Nama :</b> {kepsekiden.nama}
                          </Text>
                          <Text>
                            <b>Jenis Kelamin :</b> {kepsekiden.jenis_kelamin}
                          </Text>
                          <Text>
                            <b>NIP :</b> {kepsekiden.nip}
                          </Text>
                          <Text>
                            <b>Tempat Lahir :</b> {kepsekiden.tmpt_lahir}
                          </Text>
                          <Text>
                            <b>Tanggal Lahir :</b> {kepsekiden.tgl_lahir}
                          </Text>
                          <Text>
                            <b>Alamat :</b> {kepsekiden.alamat}
                          </Text>
                          <Text>
                            <b>Agama :</b> {kepsekiden.agama}
                          </Text>
                          <Text>
                            <b>Kewarganegaraan :</b> {kepsekiden.kwn}
                          </Text>
                          <Text>
                            <b>Berat Badan :</b> {kepsekiden.bb}
                          </Text>
                          <Text>
                            <b>Tinggi :</b> {kepsekiden.tinggi}
                          </Text>
                          <Text>
                            <b>Golongan Darah :</b> {kepsekiden.gol_darah}
                          </Text>
                        </Text>
                      ))}
                      <br />
                      <br />

                      <Heading size="md">2. Riwayat Pendidikan</Heading>
                      <br />

                      <TableContainer>
                        <Table variant="simple" colorScheme="teal">
                          <Thead>
                            <Tr>
                              <Th>Nama Pendidikan</Th>
                              <Th>Jurusan</Th>
                              <Th>Tahun Lulus</Th>
                              <Th>Tempat</Th>
                            </Tr>
                          </Thead>
                          {kepsekripens.map((kepsekripen) => (
                            <Tbody key={kepsekripen.id}>
                              <Tr>
                                <Td>{kepsekripen.nama_pendidikan}</Td>
                                <Td>{kepsekripen.jurusan}</Td>
                                <Td>{kepsekripen.thn_lulus}</Td>
                                <Td>{kepsekripen.tempat}</Td>
                              </Tr>
                            </Tbody>
                          ))}
                        </Table>
                      </TableContainer>

                      <br />
                      <br />

                      <Heading size="md">3. Riwayat Kepangkatan</Heading>
                      <br />

                      <TableContainer>
                        <Table variant="simple" colorScheme="teal">
                          <Thead>
                            <Tr>
                              <Th>Pangkat</Th>
                              <Th>Gol/Ruang</Th>
                              <Th>TMT</Th>
                              <Th>Nomor/Tanggal</Th>
                            </Tr>
                          </Thead>
                          {kepsekripangs.map((kepsekripang) => (
                            <Tbody key={kepsekripang.id}>
                              <Tr>
                                <Td>{kepsekripang.pangkat}</Td>
                                <Td>{kepsekripang.gol_ruang}</Td>
                                <Td>{kepsekripang.tmt}</Td>
                                <Td>{kepsekripang.no_tanggal}</Td>
                              </Tr>
                            </Tbody>
                          ))}
                        </Table>
                      </TableContainer>
                    </CardBody>
                  </Stack>
                </Card>
              </Col>
            </Row>
            <FooterComp />
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default KepalaSekolah;
