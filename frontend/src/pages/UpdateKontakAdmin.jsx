import axios from "axios";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Box, FormLabel, Text, Textarea, Input } from "@chakra-ui/react";

import NavbarCompAdmin from "../components/NavCompAdmin";
import FooterCompAdmin from "../components/FooterCompAdmin";

const UpdateKontakAdmin = () => {
  const { id } = useParams();
  const [values, setValues] = useState({
    no_tlpn: "",
    email: "",
    alamat: "",
    gmaps: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8001/UpdateKontakAdmin/" + id, values)
      .then((res) => navigate("/KontakAdm", res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
      .get("http://localhost:8001/GetRecordKontakAdmin/" + id)
      .then((res) => {
        setValues({
          ...values,
          no_tlpn: res.data[0].no_tlpn,
          email: res.data[0].email,
          alamat: res.data[0].alamat,
          gmaps: res.data[0].gmaps,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <NavbarCompAdmin />

      <Box className="updateKontakAdmin-page pt-3">
        <Box className="updateKontakAdmin min-vh-100 pt-5">
          <Container>
            <Row className="pb-5 mb-5 pt-5 mt-4">
              <Col>
                <Text as="h1" className="text-center fw-bold mt-5">
                  Update Guru
                </Text>
              </Col>
            </Row>

            <Row>
              <Col>
                <Box className="d-flex align-items-center flex-column mb-5 pb-5">
                  <form className="w-50" onSubmit={handleSubmit}>
                    <Box pb={5}>
                      <Box>
                        <FormLabel htmlFor="no_tlpn" className="form-label">
                          No Telepon :
                        </FormLabel>
                        <Input
                          type="no_tlpn"
                          className="form-control"
                          id="no_tlpn"
                          placeholder="Masukkan No Telepon"
                          name="no_tlpn"
                          value={values.no_tlpn}
                          onChange={(e) =>
                            setValues({ ...values, no_tlpn: e.target.value })
                          }
                        />
                      </Box>
                      <Box className="mb-3">
                        <FormLabel htmlFor="email" className="form-label">
                          Email :
                        </FormLabel>
                        <Input
                          type="email"
                          className="form-control"
                          value={values.email}
                          placeholder="Masukkan Email"
                          name="email"
                          onChange={(e) =>
                            setValues({ ...values, email: e.target.value })
                          }
                        />
                      </Box>
                      <Box className="mb-3">
                        <FormLabel htmlFor="alamat" className="form-label">
                          Alamat :
                        </FormLabel>
                        <Textarea
                          type="alamat"
                          className="form-control"
                          value={values.alamat}
                          placeholder="Masukkan Alamat"
                          name="alamat"
                          onChange={(e) =>
                            setValues({
                              ...values,
                              alamat: e.target.value,
                            })
                          }
                        ></Textarea>
                      </Box>
                      <Box className="mb-3">
                        <FormLabel htmlFor="gmaps" className="form-label">
                          Google Maps:
                        </FormLabel>
                        <Textarea
                          type="gmaps"
                          className="form-control"
                          value={values.gmaps}
                          placeholder="Masukkan Google Maps"
                          name="gmaps"
                          onChange={(e) =>
                            setValues({ ...values, gmaps: e.target.value })
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

export default UpdateKontakAdmin;
