import axios from "axios";

import { Box, FormLabel, Text, Input } from "@chakra-ui/react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import NavbarCompAdmin from "../components/NavCompAdmin";
import FooterCompAdmin from "../components/FooterCompAdmin";

const UpdateKepsekripangAdmin = () => {
  const { id } = useParams();
  const [values, setValues] = useState({
    pangkat: "",
    gol_ruang: "",
    tmt: "",
    no_tanggal: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8001/UpdateKepsekripangAdmin/" + id, values)
      .then((res) => navigate("/KepsekAdm", res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
      .get("http://localhost:8001/GetRecordKepsekripangAdmin/" + id)
      .then((res) => {
        setValues({
          ...values,
          pangkat: res.data[0].pangkat,
          gol_ruang: res.data[0].gol_ruang,
          tmt: res.data[0].tmt,
          no_tanggal: res.data[0].no_tanggal,
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
                  Update Riwayat Kepangkatan
                </Text>
              </Col>
            </Row>

            <Row>
              <Col>
                <Box className="d-flex align-items-center flex-column mb-5 pb-5">
                  <form className="w-50" onSubmit={handleSubmit}>
                    <Box pb={5}>
                      <Box>
                        <FormLabel htmlFor="pangkat" className="form-label">
                          Pangkat:
                        </FormLabel>
                        <Input
                          // type="pangkat"
                          className="form-control"
                          id="pangkat"
                          placeholder="Masukkan Pangkat"
                          name="pangkat"
                          value={values.pangkat}
                          onChange={(e) =>
                            setValues({
                              ...values,
                              pangkat: e.target.value,
                            })
                          }
                        />
                      </Box>
                      <Box>
                        <FormLabel htmlFor="gol_ruang" className="form-label">
                          Gol/Ruang:
                        </FormLabel>
                        <Input
                          type="gol_ruang"
                          className="form-control"
                          id="gol_ruang"
                          placeholder="Masukan Gol/Ruang"
                          name="gol_ruang"
                          value={values.gol_ruang}
                          onChange={(e) =>
                            setValues({
                              ...values,
                              gol_ruang: e.target.value,
                            })
                          }
                        ></Input>
                      </Box>
                      <Box>
                        <FormLabel htmlFor="tmt" className="form-label">
                          Terhitung Mulai Tanggal :
                        </FormLabel>
                        <Input
                          type="tmt"
                          className="form-control"
                          id="tmt"
                          placeholder="Masukan Terhitung Mulai Tanggal"
                          name="tmt"
                          value={values.tmt}
                          onChange={(e) =>
                            setValues({ ...values, tmt: e.target.value })
                          }
                        />
                      </Box>
                      <Box>
                        <FormLabel htmlFor="no_tanggal" className="form-label">
                          No/Tanggal:
                        </FormLabel>
                        <Input
                          type="no_tanggal"
                          className="form-control"
                          id="no_tanggal"
                          placeholder="Masukkan No/Tanggal"
                          name="no_tanggal"
                          value={values.no_tanggal}
                          onChange={(e) =>
                            setValues({ ...values, no_tanggal: e.target.value })
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

export default UpdateKepsekripangAdmin;
