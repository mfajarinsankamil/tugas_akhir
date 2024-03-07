import axios from "axios";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Box, FormLabel, Input, Text, Textarea } from "@chakra-ui/react";

import NavCompAdmin from "../components/NavCompAdmin";
import FooterCompAdmin from "../components/FooterCompAdmin";

const UpdateTujuanAdmin = () => {
  const { id } = useParams();
  const [values, setValues] = useState({
    no: "",
    isi_ket: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8001/UpdateTujuanAdmin/" + id, values)
      .then((res) => navigate("/SekolahAdm", res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios.get("http://localhost:8001/GetRecordTujuanAdmin/" + id)
      .then((res) => {
        setValues({
          ...values,
          no: res.data[0].no,
          isi_ket: res.data[0].isi_ket,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <NavCompAdmin />

      <Box className="updateTujuanAdmin-page">
        <Box className="updateTujuanAdmin min-vh-99 pt-5">
          <Container>
            <Row className="pb-5 mb-5 pt-5 mt-4">
              <Col>
                <Text as="h1" className="text-center fw-bold mt-5">
                  Update Tujuan
                </Text>
              </Col>
            </Row>

            <Row>
              <Col>
                <Box className="d-flex align-items-center flex-column mb-5 pb-3">
                  <form className="w-50" onSubmit={handleSubmit}>
                    <Box className="mb-3 mt-3">
                      <FormLabel htmlFor="no" className="form-label">
                        No :
                      </FormLabel>
                      <Input
                        type="no"
                        className="form-control"
                        id="no"
                        placeholder="Masukkan No"
                        name="no"
                        value={values.no}
                        onChange={(e) =>
                          setValues({ ...values, no: e.target.value })
                        }
                      />
                    </Box>
                    <Box className="mb-3">
                      <FormLabel htmlFor="isi_ket" className="form-label">
                        Isi Visi:
                      </FormLabel>
                      <Textarea
                        type="isi_ket"
                        className="form-control"
                        placeholder="Masukkan Isi Vis"
                        name="isi_ket"
                        value={values.isi_ket}
                        onChange={(e) =>
                          setValues({ ...values, isi_ket: e.target.value })
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

export default UpdateTujuanAdmin;
