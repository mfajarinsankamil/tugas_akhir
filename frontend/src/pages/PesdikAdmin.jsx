import axios from "axios";

import { Box, Table, Thead, Tbody, Tr, Th, Td, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import FooterCompAdmin from "../components/FooterCompAdmin";
import NavbarCompAdmin from "../components/NavCompAdmin";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";

const PesdikAdmin = () => {
  const [pesdiks, setPesdiks] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8001/Pesdik")
      .then((res) => setPesdiks(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete("http://localhost:8001/DeletePesdikAdmin/" + id)
      .then((res) => window.location.reload(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <NavbarCompAdmin />

      <Box className="pesdik-page pt-3">
        <Box className="pesdik min-vh-99 pt-5">
          <Container>
            <Row className="pb-5 mb-5 pt-5 mt-4">
              <Col>
                <Text as="h1" className="text-center fw-bold mt-5">
                  Peserta Didik - Admin
                </Text>
              </Col>
            </Row>

            <Row className="pb-5 mb-5">
              {pesdiks.length !== 0 ? (
                <Col>
                  <Link to="/CreatePesdikAdm" className="btn btn-success mb-3">
                    <AddIcon boxSize={4} pr={1} />
                    Tambah Peserta Didik
                  </Link>

                  <Table className="table">
                    <Thead>
                      <Tr>
                        <Th scope="col">Nama</Th>
                        <Th scope="col">NISN</Th>
                        <Th scope="col">Tanggal Lahir</Th>
                        <Th scope="col">Jenis Kelamin</Th>
                        <Th scope="col">Kelas</Th>
                        <Th scope="col">Alamat</Th>
                        <th scope="col">Action</th>
                      </Tr>
                    </Thead>
                    {pesdiks.map((pesdik) => (
                      <Tbody key={pesdik.id}>
                        <Tr py={3}>
                          <Td>{pesdik.nama}</Td>
                          <Td>{pesdik.nisn}</Td>
                          <Td>{pesdik.tgl_lahir}</Td>
                          <Td>{pesdik.jenis_kelamin}</Td>
                          <Td>{pesdik.kelas}</Td>
                          <Td>{pesdik.alamat}</Td>
                          <Td>
                            <Link
                              to={`/UpdatePesdikAdm/${pesdik.id}`}
                              className="btn btn-info btn-sm me-2"
                            >
                              <EditIcon boxSize={5} pr={1} />
                              Update
                            </Link>
                            <button
                              type="button"
                              onClick={() => handleDelete(pesdik.id)}
                              className="btn btn-danger btn-sm"
                            >
                              <DeleteIcon boxSize={5} pr={1} />
                              Delete
                            </button>
                          </Td>
                        </Tr>
                      </Tbody>
                    ))}
                  </Table>
                </Col>
              ) : (
                <Text as="h2">No Records</Text>
              )}
            </Row>
          </Container>
        </Box>
      </Box>

      <FooterCompAdmin />
    </div>
  );
};

export default PesdikAdmin;
