import axios from "axios";

import { Box, FormLabel, Text, Input } from "@chakra-ui/react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import NavbarCompAdmin from "../components/NavCompAdmin";
import FooterCompAdmin from "../components/FooterCompAdmin";

const UpdateKepsekripenAdmin = () => {
  const { id } = useParams();
  const [values, setValues] = useState({
    nama_pendidikan: "",
    jurusan: "",
    thn_lulus: "",
    tempat: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8001/UpdateKepsekripenAdmin/" + id, values)
      .then((res) => navigate("/KepsekAdm", res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
      .get("http://localhost:8001/GetRecordKepsekripenAdmin/" + id)
      .then((res) => {
        setValues({
          ...values,
          nama_pendidikan: res.data[0].nama_pendidikan,
          jurusan: res.data[0].jurusan,
          thn_lulus: res.data[0].thn_lulus,
          tempat: res.data[0].tempat,
        });
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <NavbarCompAdmin />

      <Box className="updateKepsekripenAdmin-page pt-3">
        <Box className="updateKepsekripenAdmin min-vh-100 pt-5">
          <Container>
            <Row className="pb-5 mb-5 pt-5 mt-4">
              <Col>
                <Text as="h1" className="text-center fw-bold mt-5">
                  Update Riwayat Pendidikan
                </Text>
              </Col>
            </Row>

            <Row>
              <Col>
                <Box className="d-flex align-items-center flex-column mb-5 pb-5">
                  <form className="w-50" onSubmit={handleSubmit}>
                    <Box pb={5}>
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
                          value={values.nama_pendidikan}
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
                          placeholder="Masukan Jurusan"
                          name="jurusan"
                          value={values.jurusan}
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
                          placeholder="Masukan Tahun Lulus"
                          name="thn_lulus"
                          value={values.thn_lulus}
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
                          value={values.tempat}
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

export default UpdateKepsekripenAdmin;
