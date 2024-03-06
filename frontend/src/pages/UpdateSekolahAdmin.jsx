import axios from "axios";

import { Box, FormLabel, Text, Input } from "@chakra-ui/react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import NavbarCompAdmin from "../components/NavCompAdmin";
import FooterCompAdmin from "../components/FooterCompAdmin";

const UpdateSekolahAdmin = () => {
  const { id } = useParams();
  const [values, setValues] = useState({
    npsn: "",
    status: "",
    nama_sekolah: "",
    nama_yayasan: "",
    skp_sekolah: "",
    tgl_skp_sekolah: "",
    ski_sekolah: "",
    tgl_ski_sekolah: "",
    kbutuhan_khusus: "",
    nama_bank: "",
    cbg_kcp_unit: "",
    rekening_atasnma: "",
    status_bos: "",
    sertifikat_iso: "",
    smbr_listrik: "",
    daya_listrik: "",
    kcp_internet: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8001/UpdateSekolahAdmin/" + id, values)
      .then((res) => navigate("/SekolahAdm", res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
      .get("http://localhost:8001/GetRecordSekolahAdmin/" + id)
      .then((res) => {
        setValues({
          ...values,
          npsn: res.data[0].npsn,
          status: res.data[0].status,
          nama_sekolah: res.data[0].nama_sekolah,
          nama_yayasan: res.data[0].nama_yayasan,
          skp_sekolah: res.data[0].skp_sekolah,
          tgl_skp_sekolah: res.data[0].tgl_skp_sekolah,
          ski_sekolah: res.data[0].ski_sekolah,
          tgl_ski_sekolah: res.data[0].tgl_ski_sekolah,
          kbutuhan_khusus: res.data[0].kbutuhan_khusus,
          nama_bank: res.data[0].nama_bank,
          cbg_kcp_unit: res.data[0].cbg_kcp_unit,
          rekening_atasnma: res.data[0].rekening_atasnma,
          status_bos: res.data[0].status_bos,
          sertifikat_iso: res.data[0].sertifikat_iso,
          smbr_listrik: res.data[0].smbr_listrik,
          daya_listrik: res.data[0].daya_listrik,
          kcp_internet: res.data[0].kcp_internet,
        });
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <NavbarCompAdmin />

      <Box className="updateSekolahAdmin-page">
        <Box className="updateSekolahAdmin min-vh-100 pt-5">
          <Container>
            <Row className="pb-5 mb-2 pt-5 mt-4">
              <Col>
                <Text as="h1" className="text-center fw-bold mt-5">
                  Update Sekolah Admin
                </Text>
              </Col>
            </Row>

            <Row>
              <Col>
                <Box className="d-flex align-items-center flex-column mb-5 pb-5">
                  <form className="w-50" onSubmit={handleSubmit}>
                    {/* IDENTITAS SEKOLAH */}
                    <Box py={5}>
                      <Box bg="teal" w="100%" p={2} color="white" my={5}>
                        Identitas Sekolah
                      </Box>
                      <Box className="mb-3 mt-3">
                        <FormLabel htmlFor="npsn" className="form-label">
                          NPSN :
                        </FormLabel>
                        <Input
                          type="npsn"
                          className="form-control"
                          id="npsn"
                          placeholder="Masukkan NPSN"
                          name="npsn"
                          value={values.npsn}
                          onChange={(e) =>
                            setValues({ ...values, npsn: e.target.value })
                          }
                        ></Input>
                      </Box>

                      <Box className="mb-3">
                        <FormLabel htmlFor="status" className="form-label">
                          Status :
                        </FormLabel>
                        <Input
                          type="status"
                          className="form-control"
                          id="status"
                          placeholder="Masukkan Status"
                          name="status"
                          value={values.status}
                          onChange={(e) =>
                            setValues({ ...values, status: e.target.value })
                          }
                        ></Input>
                      </Box>

                      <Box className="mb-3">
                        <FormLabel
                          htmlFor="nama_sekolah"
                          className="form-label"
                        >
                          Nama Sekolah :
                        </FormLabel>
                        <Input
                          type="nama_sekolah"
                          className="form-control"
                          id="nama_sekolah"
                          placeholder="Masukkan Nama Sekolah"
                          name="nama_sekolah"
                          value={values.nama_sekolah}
                          onChange={(e) =>
                            setValues({
                              ...values,
                              nama_sekolah: e.target.value,
                            })
                          }
                        ></Input>
                      </Box>

                      <Box className="mb-3">
                        <FormLabel
                          htmlFor="nama_yayasan"
                          className="form-label"
                        >
                          Nama Yayasan :
                        </FormLabel>
                        <Input
                          type="nama_yayasan"
                          placeholder="Masukkan Nama Yayasan"
                          className="form-control"
                          id="nama_yayasan"
                          name="nama_yayasan"
                          value={values.nama_yayasan}
                          onChange={(e) =>
                            setValues({
                              ...values,
                              nama_yayasan: e.target.value,
                            })
                          }
                        ></Input>
                      </Box>

                      <Box className="mb-3">
                        <FormLabel htmlFor="skp_sekolah" className="form-label">
                          SK Pendirian Sekolah :
                        </FormLabel>
                        <Input
                          type="skp_sekolah"
                          placeholder="Masukkan SK Pendirian Sekolah"
                          className="form-control"
                          id="skp_sekolah"
                          name="skp_sekolah"
                          value={values.skp_sekolah}
                          onChange={(e) =>
                            setValues({
                              ...values,
                              skp_sekolah: e.target.value,
                            })
                          }
                        ></Input>
                      </Box>

                      <Box className="mb-3">
                        <FormLabel
                          htmlFor="tgl_skp_sekolah"
                          className="form-label"
                        >
                          Tanggal SK Pendirian :
                        </FormLabel>
                        <Input
                          type="tgl_skp_sekolah"
                          placeholder="Masukkan Tanggal SK Pendirian"
                          className="form-control"
                          id="tgl_skp_sekolah"
                          name="tgl_skp_sekolah"
                          value={values.tgl_skp_sekolah}
                          onChange={(e) =>
                            setValues({
                              ...values,
                              tgl_skp_sekolah: e.target.value,
                            })
                          }
                        ></Input>
                      </Box>

                      <Box className="mb-3">
                        <FormLabel htmlFor="ski_sekolah" className="form-label">
                          SK Izin Operasional :
                        </FormLabel>
                        <Input
                          type="ski_sekolah"
                          placeholder="Masukkan SK Izin Operasional"
                          className="form-control"
                          id="ski_sekolah"
                          name="ski_sekolah"
                          value={values.ski_sekolah}
                          onChange={(e) =>
                            setValues({
                              ...values,
                              ski_sekolah: e.target.value,
                            })
                          }
                        ></Input>
                      </Box>

                      <Box className="mb-3">
                        <FormLabel
                          htmlFor="tgl_ski_sekolah"
                          className="form-label"
                        >
                          Tanggal SK Izin Operasional :
                        </FormLabel>
                        <Input
                          type="tgl_ski_sekolah"
                          placeholder="Masukkan Tanggal SK Izin Operasional"
                          className="form-control"
                          id="tgl_ski_sekolah"
                          name="tgl_ski_sekolah"
                          value={values.tgl_ski_sekolah}
                          onChange={(e) =>
                            setValues({
                              ...values,
                              tgl_ski_sekolah: e.target.value,
                            })
                          }
                        ></Input>
                      </Box>
                    </Box>

                    {/* DATA PELENGKAP */}
                    <Box pb={5}>
                      <Box bg="teal" w="100%" p={2} color="white" my={5}>
                        Data Pelengkap
                      </Box>
                      <Box className="mb-3">
                        <FormLabel
                          htmlFor="kbutuhan_khusus"
                          className="form-label"
                        >
                          Kebutuhan Khusus Dilayani :
                        </FormLabel>
                        <Input
                          type="kbutuhan_khusus"
                          placeholder="Masukkan Kebutuhan Khusus Dilayani"
                          className="form-control"
                          id="kbutuhan_khusus"
                          name="kbutuhan_khusus"
                          value={values.kbutuhan_khusus}
                          onChange={(e) =>
                            setValues({
                              ...values,
                              kbutuhan_khusus: e.target.value,
                            })
                          }
                        ></Input>
                      </Box>

                      <Box className="mb-3">
                        <FormLabel htmlFor="nama_bank" className="form-label">
                          Nama Bank :
                        </FormLabel>
                        <Input
                          type="nama_bank"
                          placeholder="Masukkan Nama Bank"
                          className="form-control"
                          id="nama_bank"
                          name="nama_bank"
                          value={values.nama_bank}
                          onChange={(e) =>
                            setValues({ ...values, nama_bank: e.target.value })
                          }
                        ></Input>
                      </Box>

                      <Box className="mb-3">
                        <FormLabel
                          htmlFor="cbg_kcp_unit"
                          className="form-label"
                        >
                          Cabang KCP/Unit :
                        </FormLabel>
                        <Input
                          type="cbg_kcp_unit"
                          placeholder="Masukkan Cabang KCP/Unit"
                          className="form-control"
                          id="cbg_kcp_unit"
                          name="cbg_kcp_unit"
                          value={values.cbg_kcp_unit}
                          onChange={(e) =>
                            setValues({
                              ...values,
                              cbg_kcp_unit: e.target.value,
                            })
                          }
                        ></Input>
                      </Box>

                      <Box className="mb-3">
                        <FormLabel
                          htmlFor="rekening_atasnma"
                          className="form-label"
                        >
                          Rekening Atas Nama :
                        </FormLabel>
                        <Input
                          type="rekening_atasnma"
                          placeholder="Masukkan Rekening Atas Nama"
                          className="form-control"
                          id="rekening_atasnma"
                          name="rekening_atasnma"
                          value={values.rekening_atasnma}
                          onChange={(e) =>
                            setValues({
                              ...values,
                              rekening_atasnma: e.target.value,
                            })
                          }
                        ></Input>
                      </Box>
                    </Box>

                    {/* DATA RINCI */}
                    <Box pb={3}>
                      <Box bg="teal" w="100%" p={2} color="white" my={5}>
                        Data Rinci
                      </Box>
                      <Box className="mb-3">
                        <FormLabel htmlFor="status_bos" className="form-label">
                          Status Bos :
                        </FormLabel>
                        <Input
                          type="status_bos"
                          placeholder="Masukkan Status Bos"
                          className="form-control"
                          id="status_bos"
                          name="status_bos"
                          value={values.status_bos}
                          onChange={(e) =>
                            setValues({ ...values, status_bos: e.target.value })
                          }
                        ></Input>
                      </Box>

                      <Box className="mb-3">
                        <FormLabel
                          htmlFor="sertifikat_iso"
                          className="form-label"
                        >
                          Sertifikat ISO :
                        </FormLabel>
                        <Input
                          type="sertifikat_iso"
                          placeholder="Masukkan Sertifikat ISO"
                          className="form-control"
                          id="sertifikat_iso"
                          name="sertifikat_iso"
                          value={values.sertifikat_iso}
                          onChange={(e) =>
                            setValues({
                              ...values,
                              sertifikat_iso: e.target.value,
                            })
                          }
                        ></Input>
                      </Box>

                      <Box className="mb-3">
                        <FormLabel
                          htmlFor="smbr_listrik"
                          className="form-label"
                        >
                          Sumber Listrik :
                        </FormLabel>
                        <Input
                          type="smbr_listrik"
                          placeholder="Masukkan Sumber Listrik"
                          className="form-control"
                          id="smbr_listrik"
                          name="smbr_listrik"
                          value={values.smbr_listrik}
                          onChange={(e) =>
                            setValues({
                              ...values,
                              smbr_listrik: e.target.value,
                            })
                          }
                        ></Input>
                      </Box>

                      <Box className="mb-3">
                        <FormLabel
                          htmlFor="daya_listrik"
                          className="form-label"
                        >
                          Daya Listrik :
                        </FormLabel>
                        <Input
                          type="daya_listrik"
                          placeholder="Masukkan Daya Listrik"
                          className="form-control"
                          id="daya_listrik"
                          name="daya_listrik"
                          value={values.daya_listrik}
                          onChange={(e) =>
                            setValues({
                              ...values,
                              daya_listrik: e.target.value,
                            })
                          }
                        ></Input>
                      </Box>

                      <Box className="mb-3">
                        <FormLabel
                          htmlFor="kcp_internet"
                          className="form-label"
                        >
                          Kecepatan Internet :
                        </FormLabel>
                        <Input
                          type="kcp_internet"
                          placeholder="Kecepatan Internet"
                          className="form-control"
                          id="kcp_internet"
                          name="kcp_internet"
                          value={values.kcp_internet}
                          onChange={(e) =>
                            setValues({
                              ...values,
                              kcp_internet: e.target.value,
                            })
                          }
                        ></Input>
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

export default UpdateSekolahAdmin;
