import axios from "axios";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import {
  Box,
  FormLabel,
  Text,
  Textarea,
  Input,
  Select,
} from "@chakra-ui/react";

import NavbarCompAdmin from "../components/NavCompAdmin";
import FooterCompAdmin from "../components/FooterCompAdmin";

const UpdateGuruAdmin = () => {
  const { id } = useParams();
  const [values, setValues] = useState({
    no: "",
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
    axios.put("http://localhost:8001/UpdateGuruAdmin/" + id, values)
      .then((res) => navigate("/GuruAdm", res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios.get("http://localhost:8001/GetRecordGuruAdmin/" + id)
      .then((res) => {
        setValues({
          ...values,
          no: res.data[0].no,
          id: res.data[0].id,
          nama: res.data[0].nama,
          jns_kelamin: res.data[0].jns_kelamin,
          tmpt_lahir: res.data[0].tmpt_lahir,
          tgl_lahir: res.data[0].tgl_lahir,
          alamat: res.data[0].alamat,
          agama: res.data[0].agama,
          kwn: res.data[0].kwn,
          bb: res.data[0].bb,
          tinggi: res.data[0].tinggi,
          gol_darah: res.data[0].gol_darah,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <NavbarCompAdmin />

      <Box className="updateGuruAdmin-page pt-3">
        <Box className="updateGuruAdmin min-vh-100 pt-5">
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
                        <FormLabel htmlFor="no" className="form-label">
                          No:
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
                        <FormLabel htmlFor="nama" className="form-label">
                          Nama:
                        </FormLabel>
                        <Input
                          type="nama"
                          className="form-control"
                          value={values.nama}
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
                          value={values.jns_kelamin}
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
                          value={values.tmpt_lahir}
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
                          value={values.tgl_lahir}
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
                          value={values.alamat}
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
                          value={values.agama}
                          placeholder="Pilih Agama"
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
                          value={values.kwn}
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
                          value={values.bb}
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
                          value={values.tinggi}
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
                          value={values.gol_darah}
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

export default UpdateGuruAdmin;
