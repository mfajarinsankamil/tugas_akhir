import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Box, FormLabel, Input, Text, Textarea } from "@chakra-ui/react";

import NavCompAdmin from "../components/NavCompAdmin";
import FooterCompAdmin from "../components/FooterCompAdmin";

const CreateInformasiAdmin = () => {
  const [values, setValues] = useState({
    judul: "",
    keterangan: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8001/CreateInformasiAdmin", values)
      .then((res) => navigate("/InformasiAdm", res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <NavCompAdmin />

      <Box className="createInformasiAdmin-page">
        <Box className="createInformasiAdmin min-vh-99 pt-5">
          <Container>
            <Row className="pb-5 mb-5 pt-5 mt-4">
              <Col>
                <Text as="h1" className="text-center fw-bold mt-5">
                  Tambah Informasi
                </Text>
              </Col>
            </Row>

            <Row>
              <Col>
                <Box className="d-flex align-items-center flex-column mb-5 pb-3">
                  <form className="w-50" onSubmit={handleSubmit}>
                    <Box className="mb-3 mt-3">
                      <FormLabel htmlFor="judul" className="form-label">
                        Judul:
                      </FormLabel>
                      <Input
                        type="judul"
                        className="form-control"
                        id="judul"
                        placeholder="Enter Judul"
                        name="judul"
                        onChange={(e) =>
                          setValues({ ...values, judul: e.target.value })
                        }
                      />
                    </Box>
                    <Box className="mb-3">
                      <FormLabel htmlFor="kelas" className="form-label">
                        Keterangan:
                      </FormLabel>
                      <Textarea
                        type="text"
                        className="form-control"
                        placeholder="Enter keterangan"
                        name="keterangan"
                        onChange={(e) =>
                          setValues({ ...values, keterangan: e.target.value })
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

export default CreateInformasiAdmin;
