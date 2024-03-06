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
import { Link } from "react-router-dom";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";

import NavbarCompAdmin from "../components/NavCompAdmin";
import FooterCompAdmin from "../components/FooterCompAdmin";

const GuruAdmin = () => {
  const [gurus, setGurus] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8001/Guru")
      .then((res) => setGurus(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8001/DeleteGuruAdmin/" + id)
      .then((res) => window.location.reload(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <NavbarCompAdmin />

      <Box className="guru-page pt-3">
        <Box className="guru min-vh-100 pt-5">
          <Container>
            <Row className="pb-5 mb-5 pt-5 mt-4">
              <Col>
                <Text as="h1" className="text-center fw-bold mt-5">
                  Guru - Admin
                </Text>
              </Col>
            </Row>

            <Row pb={5} mb={5}>
              <Col>
                <Box>
                  <Link to="/CreateGuruAdm" className="btn btn-success mb-3 sm">
                    <AddIcon boxSize={4} mr={1} /> Tambah Guru
                  </Link>
                </Box>
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
                        <Box pl={5} ml={5}>
                          <Link
                            to={`/UpdateGuruAdm/${guru.id}`}
                            className="btn btn-info btn-sm me-2"
                          >
                            <EditIcon boxSize={5} pr={1} />
                            Update
                          </Link>
                          <button
                            type="button"
                            onClick={() => handleDelete(guru.id)}
                            className="btn btn-danger btn-sm"
                          >
                            <DeleteIcon boxSize={5} pr={1} />
                            Delete
                          </button>
                        </Box>
                        <br />
                        <br />
                      </CardBody>
                    </Stack>
                  </Card>
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

export default GuruAdmin;
