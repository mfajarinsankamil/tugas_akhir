import axios from "axios";

import { Box, FormLabel, Select, Text, Input } from "@chakra-ui/react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import NavbarCompAdmin from "../components/NavCompAdmin";
import FooterCompAdmin from "../components/FooterCompAdmin";

const UpdateKepsekidenAdmin = () => {
  const { id } = useParams();
  const [values, setValues] = useState({
    nama: "",
    jenis_kelamin: "",
    nip: "",
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
    axios.put("http://localhost:8001/UpdateKepsekidenAdmin/" + id, values)
      .then((res) => navigate("/KepsekAdm", res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios.get("http://localhost:8001/GetRecordKepsekidenAdmin/" + id)
      .then((res) => {
        setValues({
          ...values,
          nama: res.data[0].nama,
          jenis_kelamin: res.data[0].jenis_kelamin,
          nip: res.data[0].nip,
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

      <Box className="updateKepsekidenAdmin-page pt-3">
        <Box className="updateKepsekidenAdmin min-vh-100 pt-5">
          <Container>
            <Row className="pb-5 mb-5 pt-5 mt-4">
              <Col>
                <Text as="h1" className="text-center fw-bold mt-5">
                  Update Identitas Kepala Sekolah
                </Text>
              </Col>
            </Row>

            <Row>
              <Col>
                <Box className="d-flex align-items-center flex-column mb-5 pb-5">
                  <form className="w-50" onSubmit={handleSubmit}>
                    <Box pb={5}>
                      <Box>
                        <FormLabel htmlFor="nama" className="form-label">
                          Nama :
                        </FormLabel>
                        <Input
                          type="nama"
                          className="form-control"
                          id="nama"
                          placeholder="Enter Nama"
                          name="nama"
                          value={values.nama}
                          onChange={(e) =>
                            setValues({ ...values, nama: e.target.value })
                          }
                        />
                      </Box>
                      <Box>
                        <FormLabel
                          htmlFor="jenis_kelamin"
                          className="form-label"
                        >
                          Jenis Kelamin:
                        </FormLabel>
                        <Select
                          type="jenis_kelamin"
                          className="form-control"
                          id="jenis_kelamin"
                          placeholder="Pilih Jenis Kelamin"
                          name="jenis_kelamin"
                          value={values.jenis_kelamin}
                          onChange={(e) =>
                            setValues({
                              ...values,
                              jenis_kelamin: e.target.value,
                            })
                          }
                        >
                          <option>Laki-laki</option>
                          <option>Perempuan</option>
                        </Select>
                      </Box>
                      <Box>
                        <FormLabel htmlFor="nip" className="form-label">
                          NIP :
                        </FormLabel>
                        <Input
                          type="nip"
                          className="form-control"
                          id="nip"
                          placeholder="Enter NIP"
                          name="nip"
                          value={values.nip}
                          onChange={(e) =>
                            setValues({ ...values, nip: e.target.value })
                          }
                        />
                      </Box>
                      <Box>
                        <FormLabel htmlFor="tmpt_lahir" className="form-label">
                          Tempat Lahir:
                        </FormLabel>
                        <Input
                          type="tmpt_lahir"
                          className="form-control"
                          id="tmpt_lahir"
                          placeholder="Enter Tempat Lahir"
                          name="tmpt_lahir"
                          value={values.tmpt_lahir}
                          onChange={(e) =>
                            setValues({ ...values, tmpt_lahir: e.target.value })
                          }
                        />
                      </Box>
                      <Box>
                        <FormLabel htmlFor="tgl_lahir" className="form-label">
                          Tanggal Lahir:
                        </FormLabel>
                        <Input
                          type="date"
                          className="form-control"
                          id="tgl_lahir"
                          placeholder="Enter Tanggal Lahir"
                          name="tgl_lahir"
                          value={values.tgl_lahir}
                          onChange={(e) =>
                            setValues({ ...values, tgl_lahir: e.target.value })
                          }
                        />
                      </Box>
                      <Box>
                        <FormLabel htmlFor="alamat" className="form-label">
                          Alamat:
                        </FormLabel>
                        <Input
                          type="text"
                          className="form-control"
                          id="alamat"
                          placeholder="Enter Alamat"
                          name="alamat"
                          value={values.alamat}
                          onChange={(e) =>
                            setValues({ ...values, alamat: e.target.value })
                          }
                        />
                      </Box>
                      <Box>
                        <FormLabel htmlFor="agama" className="form-label">
                          Agama:
                        </FormLabel>
                        <Select
                          type="agama"
                          className="form-control"
                          id="agama"
                          placeholder="Enter Agama"
                          name="agama"
                          value={values.agama}
                          onChange={(e) =>
                            setValues({ ...values, agama: e.target.value })
                          }
                        >
                          <option>Islam</option>
                          <option>Kristen Protestan</option>
                          <option>Kristen Katolik</option>
                          <option>Hindu</option>
                          <option>Buddha</option>
                          <option>Konghucu</option>
                        </Select>
                      </Box>
                      <Box>
                        <FormLabel htmlFor="kwn" className="form-label">
                          Kewarganegaraan:
                        </FormLabel>
                        <Input
                          type="kwn"
                          className="form-control"
                          id="kwn"
                          placeholder="Enter Kewarganegaraan"
                          name="kwn"
                          value={values.kwn}
                          onChange={(e) =>
                            setValues({ ...values, kwn: e.target.value })
                          }
                        />
                      </Box>
                      <Box>
                        <FormLabel htmlFor="bb" className="form-label">
                          Berat Badan:
                        </FormLabel>
                        <Input
                          type="bb"
                          className="form-control"
                          id="bb"
                          placeholder="Enter Berat Badan"
                          name="bb"
                          value={values.bb}
                          onChange={(e) =>
                            setValues({ ...values, bb: e.target.value })
                          }
                        />
                      </Box>
                      <Box>
                        <FormLabel htmlFor="tinggi" className="form-label">
                          Tinggi Badan:
                        </FormLabel>
                        <Input
                          type="tinggi"
                          className="form-control"
                          id="tinggi"
                          placeholder="Enter Tinggi Badan"
                          name="tinggi"
                          value={values.tinggi}
                          onChange={(e) =>
                            setValues({ ...values, tinggi: e.target.value })
                          }
                        />
                      </Box>
                      <Box>
                        <FormLabel htmlFor="gol_darah" className="form-label">
                          Golongan Darah:
                        </FormLabel>
                        <Select
                          type="gol_darah"
                          className="form-control"
                          id="gol_darah"
                          placeholder="Enter Berat Badan"
                          name="gol_darah"
                          value={values.gol_darah}
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

export default UpdateKepsekidenAdmin;
