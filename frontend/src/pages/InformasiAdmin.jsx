import axios from "axios";

import {
  Box,
  Text,
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
} from "@chakra-ui/react";
import { Container, Row, Col, CardFooter } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import NavCompAdmin from "../components/NavCompAdmin";
import FooterCompAdmin from "../components/FooterCompAdmin";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";

const InformasiAdmin = () => {
  const [informations, setInformations] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8001/Informations")
      .then((res) => setInformations(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete("http://localhost:8001/DeleteInformasiAdmin/" + id)
      .then((res) => window.location.reload(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <NavCompAdmin />

      <Box className="informasi-page">
        <Box className="Informasi min-vh-100 pt-5">
          <Container>
            <Row className="pb-5 mb-5 pt-5 mt-4">
              <Col>
                <Text as="h1" className="text-center fw-bold mt-5">
                  Informasi - Admin
                </Text>
              </Col>
            </Row>

            <Row>
              <Col>
                <Box pb={4}>
                  <Link to="/CreateInformasiAdm" className="btn btn-success">
                    <AddIcon boxSize={4} pr={1} /> Tambah Informasi
                  </Link>
                </Box>

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

                      <Stack>
                        <CardBody>
                          <Heading size="md">{informasi.judul}</Heading>
                          <Text as="p">Assalamualaikum wr.wb</Text>
                          <Text as="p" py="2">
                            {informasi.keterangan}
                          </Text>
                          <Text as="p">Wassalamualaikum wr.wb</Text>
                          <Box>
                            <Link
                              to={`/UpdateInformasiAdm/${informasi.id}`}
                              className="btn btn-info btn-sm me-2"
                            >
                              <EditIcon boxSize={5} pr={1} />
                              Update
                            </Link>
                            <button
                              type="button"
                              onClick={() => handleDelete(informasi.id)}
                              className="btn btn-danger btn-sm"
                            >
                              <DeleteIcon boxSize={5} pr={1} />
                              Delete
                            </button>
                          </Box>
                        </CardBody>
                        <CardFooter></CardFooter>
                      </Stack>
                    </Card>
                  ))}
                </Box>
              </Col>
            </Row>
          </Container>
        </Box>
      </Box>

      <FooterCompAdmin />
    </div>
  );
};

export default InformasiAdmin;
