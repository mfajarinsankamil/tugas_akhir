import axios from "axios";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Box, FormLabel, Text, Textarea, Input } from "@chakra-ui/react";

import NavbarCompAdmin from "../components/NavCompAdmin";
import FooterCompAdmin from "../components/FooterCompAdmin";

const UpdateInformasiAdmin = () => {
  const { id } = useParams();
  const [values, setValues] = useState({
    judul: "",
    keterangan: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8001/UpdateInformasiAdmin/" + id, values)
      .then((res) => navigate("/InformasiAdm", res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
      .get("http://localhost:8001/GetRecordInformasiAdmin/" + id)
      .then((res) => {
        setValues({
          ...values,
          judul: res.data[0].judul,
          keterangan: res.data[0].keterangan,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <NavbarCompAdmin />

      <Box className="updateInformasiAdmin-page pt-3">
        <Box className="updateInformasiAdmin min-vh-99 pt-5">
          <Container>
            <Row className="pb-5 mb-5 pt-5 mt-4">
              <Col>
                <Text as="h1" className="text-center fw-bold mt-5">
                  Update Informasi
                </Text>
              </Col>
            </Row>

            <Row>
              <Col>
                <Box className="d-flex align-items-center flex-column mb-5 pb-5">
                  <form className="w-50" onSubmit={handleSubmit}>
                    <Box>
                      <FormLabel htmlFor="judul" className="form-label">
                        Judul:
                      </FormLabel>
                      <Input
                        type="judul"
                        className="form-control"
                        id="judul"
                        placeholder="Enter Judul"
                        name="judul"
                        value={values.judul}
                        onChange={(e) =>
                          setValues({ ...values, judul: e.target.value })
                        }
                      />
                    </Box>
                    <Box className="mb-3">
                      <FormLabel htmlFor="keterangan" className="form-label">
                        keterangan:
                      </FormLabel>
                      <Textarea
                        type="text"
                        className="form-control"
                        value={values.keterangan}
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

export default UpdateInformasiAdmin;
