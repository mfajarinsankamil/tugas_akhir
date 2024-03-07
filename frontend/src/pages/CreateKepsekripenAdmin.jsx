import axios from "axios";

import { Box, Text, FormLabel, Input } from "@chakra-ui/react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import NavbarCompAdmin from "../components/NavCompAdmin";
import FooterCompAdmin from "../components/FooterCompAdmin";

const CreateKepsekripenAdmin = () => {
  const [values, setValues] = useState({
    nama_pendidikan: "",
    jurusan: "",
    thn_lulus: "",
    tempat: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8001/CreateKepsekripenAdmin", values)
      .then((res) => navigate("/KepsekAdm", res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <NavbarCompAdmin />

      <Box className="createKepsekripenAdmin-page pt-3">
        <Box className="createKepsekripenAdmin min-vh-99 pt-5">
          <Container>
            <Row className="pb-5 mb-5 pt-5 mt-4">
              <Col>
                <Text as="h1" className="text-center fw-bold mt-5">
                  Tambah Riwayat Pendidikan
                </Text>
              </Col>
            </Row>

            <Row>
              <Col>
                <Box className="d-flex align-items-center flex-column pb-5 mb-5">
                  <form className="w-50" onSubmit={handleSubmit}>
                    <Box>
                      <Box>
                        <FormLabel
                          htmlFor="nama_pendidikan"
                          className="form-label"
                        >
                          Nama Pendidikan:
                        </FormLabel>
                        <Input
                          type="nama_pendidikan"
                          className="form-control"
                          id="nama_pendidikan"
                          placeholder="Masukkan Nama Pendidikan"
                          name="nama_pendidikan"
                          onChange={(e) =>
                            setValues({
                              ...values,
                              nama_pendidikan: e.target.value,
                            })
                          }
                        />
                      </Box>
                      <Box>
                        <FormLabel htmlFor="jurusan" className="form-label">
                          Jurusan:
                        </FormLabel>
                        <Input
                          type="jurusan"
                          className="form-control"
                          id="jurusan"
                          placeholder="Masukkan Jurusan"
                          name="jurusan"
                          onChange={(e) =>
                            setValues({
                              ...values,
                              jurusan: e.target.value,
                            })
                          }
                        ></Input>
                      </Box>
                      <Box>
                        <FormLabel htmlFor="thn_lulus" className="form-label">
                          Tahun Lulus :
                        </FormLabel>
                        <Input
                          type="thn_lulus"
                          className="form-control"
                          id="thn_lulus"
                          placeholder="Masukkan Tahun Lulus"
                          name="thn_lulus"
                          onChange={(e) =>
                            setValues({ ...values, thn_lulus: e.target.value })
                          }
                        />
                      </Box>
                      <Box>
                        <FormLabel htmlFor="tempat" className="form-label">
                          Tempat:
                        </FormLabel>
                        <Input
                          type="tempat"
                          className="form-control"
                          id="tempat"
                          placeholder="Masukkan Tempat"
                          name="tempat"
                          onChange={(e) =>
                            setValues({ ...values, tempat: e.target.value })
                          }
                        />
                      </Box>
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

export default CreateKepsekripenAdmin;
