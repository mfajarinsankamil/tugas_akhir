import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Box, FormLabel, Input, Text, Textarea } from "@chakra-ui/react";

import NavCompAdmin from "../components/NavCompAdmin";
import FooterCompAdmin from "../components/FooterCompAdmin";

const CreateSarpasAdmin = () => {
  const [values, setValues] = useState({
    no: "",
    nama_sarpas: "",
    data1: "",
    data2: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8001/CreateSarpasAdmin", values)
      .then((res) => navigate("/SekolahAdm", res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <NavCompAdmin />

      <Box className="createSarpasAdmin-page">
        <Box className="createSarpasAdmin min-vh-99 pt-5">
          <Container>
            <Row className="pb-5 mb-5 pt-5 mt-4">
              <Col>
                <Text as="h1" className="text-center fw-bold mt-5">
                  Tambah Data Sarpas
                </Text>
              </Col>
            </Row>

            <Row>
              <Col>
                <Box className="d-flex align-items-center flex-column mb-5 pb-3">
                  <form className="w-50" onSubmit={handleSubmit}>
                    <Box>
                      <FormLabel htmlFor="no" className="form-label">
                        No:
                      </FormLabel>
                      <Input
                        type="no"
                        className="form-control"
                        id="no"
                        placeholder="Enter No"
                        name="no"
                        onChange={(e) =>
                          setValues({ ...values, no: e.target.value })
                        }
                      />
                    </Box>
                    <Box className="mb-3">
                      <FormLabel htmlFor="nama_sarpas" className="form-label">
                        Nama Sarpas:
                      </FormLabel>
                      <Textarea
                        type="text"
                        className="form-control"
                        placeholder="Enter Nama Sarpas"
                        name="nama_sarpas"
                        onChange={(e) =>
                          setValues({ ...values, nama_sarpas: e.target.value })
                        }
                      />
                    </Box>
                    <Box className="mb-3">
                      <FormLabel htmlFor="data1" className="form-label">
                        Masukkan Data Ganjil:
                      </FormLabel>
                      <Textarea
                        type="no"
                        className="form-control"
                        placeholder="Enter Data"
                        name="data1"
                        onChange={(e) =>
                          setValues({ ...values, data1: e.target.value })
                        }
                      />
                    </Box>
                    <Box className="mb-3">
                      <FormLabel htmlFor="data2" className="form-label">
                        Masukkan Data Genap:
                      </FormLabel>
                      <Textarea
                        type="no"
                        className="form-control"
                        placeholder="Enter Data"
                        name="data2"
                        onChange={(e) =>
                          setValues({ ...values, data2: e.target.value })
                        }
                      />
                    </Box>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
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

export default CreateSarpasAdmin;
