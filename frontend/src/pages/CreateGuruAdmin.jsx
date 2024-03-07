import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import {
  Box,
  FormLabel,
  Input,
  Text,
  Textarea,
  Select,
} from "@chakra-ui/react";

import NavbarCompAdmin from "../components/NavCompAdmin";
import FooterCompAdmin from "../components/FooterCompAdmin";

const CreateGuruAdmin = () => {
  const [values, setValues] = useState({
    id: "",
    nama: "",
    jns_kelamin: "",
    tmpt_lahir: "",
    tgl_lahir: "",
    alamat: "",
    agama: "",
    kwn: "",
    bb: "",
    tinggi: "",
    gol_darah: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8001/CreateGuruAdmin", values)
      .then((res) => navigate("/GuruAdm", res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <NavbarCompAdmin />

      <Box className="createGuruAdmin-page pt-3">
        <Box className="createGuruAdmin min-vh-100 pt-5">
          <Container>
            <Row className="pb-5 mb-5 pt-5 mt-4">
              <Col>
                <Text as="h1" className="text-center fw-bold mt-5">
                  Tambah Guru
                </Text>
              </Col>
            </Row>

            <Row>
              <Col>
                <Box className="d-flex align-items-center flex-column">
                  <form className="w-50" onSubmit={handleSubmit}>
                    <Box>
                      <Box>
                        <FormLabel htmlFor="no" className="form-label">
                          No:
                        </FormLabel>
                        <Input
                          type="number"
                          className="form-control"
                          id="no"
                          placeholder="Masukkan No"
                          name="no"
                          onChange={(e) =>
                            setValues({ ...values, no: e.target.value })
                          }
                        />
                      </Box>
                      <Box className="mb-3">
                        <FormLabel htmlFor="nama" className="form-label">
                          Nama:
                        </FormLabel>
                        <Input
                          type="nama"
                          className="form-control"
                          placeholder="Masukkan Nama"
                          name="nama"
                          onChange={(e) =>
                            setValues({ ...values, nama: e.target.value })
                          }
                        />
                      </Box>
                      <Box className="mb-3">
                        <FormLabel htmlFor="jns_kelamin" className="form-label">
                          Jenis Kelamin:
                        </FormLabel>
                        <Select
                          type="jns_kelamin"
                          className="form-control"
                          placeholder="Pilih Jenis Kelamin"
                          name="jns_kelamin"
                          onChange={(e) =>
                            setValues({
                              ...values,
                              jns_kelamin: e.target.value,
                            })
                          }
                        >
                          <option>Laki-laki</option>
                          <option>Perempuan</option>
                        </Select>
                      </Box>
                      <Box className="mb-3">
                        <FormLabel htmlFor="tmpt_lahir" className="form-label">
                          Tempat Lahir:
                        </FormLabel>
                        <Input
                          type="tmpt_lahir"
                          className="form-control"
                          placeholder="Masukkan Tempat Lahir"
                          name="tmpt_lahir"
                          onChange={(e) =>
                            setValues({ ...values, tmpt_lahir: e.target.value })
                          }
                        />
                      </Box>
                      <Box className="mb-3">
                        <FormLabel htmlFor="tgl_lahir" className="form-label">
                          Tanggal Lahir:
                        </FormLabel>
                        <Input
                          type="date"
                          className="form-control"
                          placeholder="Masukkan Tanggal Lahir"
                          name="tgl_lahir"
                          onChange={(e) =>
                            setValues({ ...values, tgl_lahir: e.target.value })
                          }
                        />
                      </Box>
                      <Box className="mb-3">
                        <FormLabel htmlFor="alamat" className="form-label">
                          Alamat:
                        </FormLabel>
                        <Textarea
                          type="text"
                          className="form-control"
                          placeholder="Masukkan Alamat"
                          name="alamat"
                          onChange={(e) =>
                            setValues({ ...values, alamat: e.target.value })
                          }
                        />
                      </Box>
                      <Box className="mb-3">
                        <FormLabel htmlFor="agama" className="form-label">
                          Agama:
                        </FormLabel>
                        <Select
                          type="agama"
                          className="form-control"
                          name="agama"
                          onChange={(e) =>
                            setValues({ ...values, agama: e.target.value })
                          }
                        >
                          <option>Islam</option>
                        </Select>
                      </Box>
                      <Box className="mb-3">
                        <FormLabel htmlFor="kwn" className="form-label">
                          Kewarganegaraan:
                        </FormLabel>
                        <Input
                          type="kwn"
                          className="form-control"
                          placeholder="Masukkan Kewarganegaraan"
                          name="kwn"
                          onChange={(e) =>
                            setValues({ ...values, kwn: e.target.value })
                          }
                        ></Input>
                      </Box>
                      <Box className="mb-3">
                        <FormLabel htmlFor="bb" className="form-label">
                          Berat Badan:
                        </FormLabel>
                        <Input
                          type="bb"
                          className="form-control"
                          placeholder="Masukkan Berat Badan"
                          name="bb"
                          onChange={(e) =>
                            setValues({ ...values, bb: e.target.value })
                          }
                        ></Input>
                      </Box>
                      <Box className="mb-3">
                        <FormLabel htmlFor="tinggi" className="form-label">
                          Tinggi:
                        </FormLabel>
                        <Input
                          type="tinggi"
                          className="form-control"
                          placeholder="Masukkan Tinggi"
                          name="tinggi"
                          onChange={(e) =>
                            setValues({ ...values, tinggi: e.target.value })
                          }
                        ></Input>
                      </Box>
                      <Box className="mb-3">
                        <FormLabel htmlFor="gol_darah" className="form-label">
                          Golongan Darah:
                        </FormLabel>
                        <Select
                          type="gol_darah"
                          className="form-control"
                          placeholder="Pilih Golongan Darah "
                          name="gol_darah"
                          onChange={(e) =>
                            setValues({ ...values, gol_darah: e.target.value })
                          }
                        >
                          <option>Golongan O</option>
                          <option>Golongan A</option>
                          <option>Golongan B</option>
                          <option>Golongan AB</option>
                        </Select>
                      </Box>
                    </Box>

                    <Box pt={5}>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </Box>
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

export default CreateGuruAdmin;
