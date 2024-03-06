import axios from "axios";

import { Box, Table, Thead, Tbody, Tr, Th, Td, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import FooterComp from "../components/FooterComp";
// import NavbarComp from "../components/NavComp";
import FaqComp from "../components/FaqComp";

const Pesdik = () => {
  const [pesdiks, setPesdiks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8001/Pesdik")
      .then((res) => setPesdiks(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {/* <NavbarComp /> */}

      <Box className="pesdik-page pt-3">
        <Box className="pesdik min-vh-100 pt-5 mb-5 pb-5">
          <Container>
            <Row className="pb-5 mb-5 pt-5 mt-4">
              <Col>
                <Text as="h1" className="text-center fw-bold mt-5">
                  Peserta Didik
                </Text>
              </Col>
            </Row>

            <Row className="pb-5 mb-5">
              <Col>
                {pesdiks.length !== 0 ? (
                  <Table className="table" gap={5}>
                    <Thead>
                      <Tr>
                        <Th scope="col">Nama</Th>
                        <Th scope="col">NISN</Th>
                        <Th scope="col">Tanggal Lahir</Th>
                        <Th scope="col">Jenis Kelamin</Th>
                        <Th scope="col">Kelas</Th>
                        <Th scope="col">Alamat</Th>
                        {/* <th scope="col">Action</th> */}
                      </Tr>
                    </Thead>
                    <Tbody>
                      {pesdiks.map((pesdik) => (
                        <Tr key={pesdik.id}>
                          <Td>{pesdik.nama}</Td>
                          <Td>{pesdik.nisn}</Td>
                          <Td>{pesdik.tgl_lahir}</Td>
                          <Td>{pesdik.jenis_kelamin}</Td>
                          <Td>{pesdik.kelas}</Td>
                          <Td>{pesdik.alamat}</Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                ) : (
                  <Text as="h2">No Records</Text>
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

export default Pesdik;
