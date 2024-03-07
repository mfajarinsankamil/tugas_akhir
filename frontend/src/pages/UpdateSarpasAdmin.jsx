import axios from "axios";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Box, FormLabel, Text, Textarea, Input } from "@chakra-ui/react";

import NavbarCompAdmin from "../components/NavCompAdmin";
import FooterCompAdmin from "../components/FooterCompAdmin";

const UpdateSarpasAdmin = () => {
  const { id } = useParams();
  const [values, setValues] = useState({
    no: "",
    nama_sarpas: "",
    data1: "",
    data2: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:8001/UpdateSarpasAdmin/" + id, values)
      .then((res) => navigate("/SekolahAdm", res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios.get("http://localhost:8001/GetRecordSarpasAdmin/" + id)
      .then((res) => {
        setValues({
          ...values,
          no: res.data[0].no,
          nama_sarpas: res.data[0].nama_sarpas,
          data1: res.data[0].data1,
          data2: res.data[0].data2,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <NavbarCompAdmin />

      <Box className="updateSarpasAdmin-page pt-3">
        <Box className="updateSarpasAdmin min-vh-99 pt-5">
          <Container>
            <Row className="pb-5 mb-5 pt-5 mt-4">
              <Col>
                <Text as="h1" className="text-center fw-bold mt-5">
                  Update Sarpas
                </Text>
              </Col>
            </Row>

            <Row>
              <Col>
                <Box className="d-flex align-items-center flex-column mb-5 pb-5">
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
                        value={values.no}
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
                        value={values.nama_sarpas}
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
                        value={values.data1}
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
                        value={values.data2}
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

export default UpdateSarpasAdmin;
