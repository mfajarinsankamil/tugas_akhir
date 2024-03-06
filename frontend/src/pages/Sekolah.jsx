import axios from "axios";

import {
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

import FooterComp from "../components/FooterComp";
// import NavbarComp from "../components/NavComp";

const Sekolah = () => {
  const [sekolahs, setSekolahs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8001/Sekolah")
      .then((res) => setSekolahs(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [visis, setVisis] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8001/Visi")
      .then((res) => setVisis(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [misis, setMisis] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8001/Misi")
      .then((res) => setMisis(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [tujuans, setTujuans] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8001/Tujuan")
      .then((res) => setTujuans(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [sarpass, setSarpass] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8001/Sarpas")
      .then((res) => setSarpass(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {/* <NavbarComp /> */}

      <Box className="sekolah-page pt-3">
        <Box className="sekolah min-vh-100 pt-5">
          <Container>
            <Row className="pb-5 mb-5 pt-5 mt-4">
              <Col>
                <Text as="h1" className="text-center fw-bold mt-5">
                  Tentang Sekolah
                </Text>
              </Col>
            </Row>

            <Row>
              <Col>
                <Tabs isFitted variant="enclosed">
                  <TabList mb="1em">
                    <Tab as="b">1. Profil</Tab>
                    <Tab as="b">2. Visi Misi & Tujuan</Tab>
                  </TabList>

                  {sekolahs.length !== 0 ? (
                    <TabPanels>
                      {sekolahs.map((sekolah) => (
                        <TabPanel key={sekolah.id}>
                          {/* IDENTITAS SEKOLAH */}
                          <Box bg="teal" w="100%" p={2} color="white" my={5}>
                            Identitas Sekolah
                          </Box>
                          <Box>
                            <Text pt={5}>
                              <b>NPSN </b> : {sekolah.npsn}
                            </Text>
                            <Text>
                              <b>Status </b> : {sekolah.status}
                            </Text>
                            <Text>
                              <b>Nama Sekolah </b> : {sekolah.nama_sekolah}
                            </Text>
                            <Text>
                              <b>Nama Yayasan </b> : {sekolah.nama_yayasan}
                            </Text>
                            <Text>
                              <b>SK Pendirian Sekolah </b> :{" "}
                              {sekolah.skp_sekolah}
                            </Text>
                            <Text>
                              <b>Tanggal SK Pendirian</b> :{" "}
                              {sekolah.tgl_skp_sekolah}
                            </Text>
                            <Text>
                              <b>SK Izin Operasional </b> :{" "}
                              {sekolah.ski_sekolah}
                            </Text>
                            <Text pb={5}>
                              <b>Tanggal SK izin Operasional </b> :{" "}
                              {sekolah.tgl_ski_sekolah}
                            </Text>
                          </Box>

                          {/* DATA PELENGKAP */}
                          <Box bg="teal" w="100%" p={2} color="white" my={5}>
                            Data Pelengkap
                          </Box>
                          <Box>
                            <Text pt={5}>
                              <b>Kebutuhan Khusus Dilayani </b> :
                              {sekolah.kbutuhan_khusus}
                            </Text>
                            <Text>
                              <b>Nama Bank </b> : {sekolah.nama_bank}
                            </Text>
                            <Text>
                              <b>Cabang KCP/Unit </b> : {sekolah.cbg_kcp_unit}
                            </Text>
                            <Text pb={5}>
                              <b>Rekening Atas Nama </b> :
                              {sekolah.rekening_atasnma}
                            </Text>
                          </Box>

                          {/* DATA RINCI */}
                          <Box bg="teal" w="100%" p={2} color="white" my={5}>
                            Data Rinci
                          </Box>
                          <Box>
                            <Text pt={5}>
                              <b>Status Bos</b> : {sekolah.status_bos}
                            </Text>
                            <Text>
                              <b>Sertifikat ISO </b> : {sekolah.sertifikat_iso}
                            </Text>
                            <Text>
                              <b>Sumber Listrik </b> : {sekolah.smbr_listrik}
                            </Text>
                            <Text>
                              <b>Daya Listrik</b> : {sekolah.daya_listrik}
                            </Text>
                            <Text pb={5} mb={5}>
                              <b>Kecepatan Internet</b> : {sekolah.kcp_internet}
                            </Text>
                          </Box>

                          {/* Data Sarpas */}
                          <Box bg="teal" w="100%" p={2} color="white" my={5}>
                            Data Sarpas
                          </Box>
                          <Box>
                            <Table className="table" gap={5}>
                              <Thead>
                                <Tr>
                                  <Th scope="col">No</Th>
                                  <Th scope="col">Jenis Sarpas</Th>
                                  <Th scope="col">Semester 2023/2024 Ganjil</Th>
                                  <Th scope="col">Semester 2023/2024 Genap</Th>
                                </Tr>
                              </Thead>
                              <Tbody>
                                {sarpass.map((sarpas) => (
                                  <Tr key={sarpas.id}>
                                    <Td>{sarpas.no}</Td>
                                    <Td>{sarpas.nama_sarpas}</Td>
                                    <Td>{sarpas.data1}</Td>
                                    <Td>{sarpas.data2}</Td>
                                  </Tr>
                                ))}
                              </Tbody>
                            </Table>
                          </Box>
                        </TabPanel>
                      ))}

                      <TabPanel>
                        {/* VISI MISI */}
                        <Box bg="teal" w="100%" p={2} color="white" my={5}>
                          Visi dan Misi
                        </Box>

                        <Box>
                          <Text pt={5}>
                            <b>Visi : </b>
                          </Text>
                          <Box pb={5}>
                            {visis.map((visi) => (
                              <Text key={visi.id}>
                                {visi.no}. {visi.isi_ket}
                              </Text>
                            ))}
                          </Box>
                        </Box>

                        <Box>
                          <Text>
                            <b>Misi : </b>
                          </Text>
                          <Box pb={5}>
                            {misis.map((misi) => (
                              <Text key={misi.id}>
                                {misi.no}. {misi.isi_ket}
                              </Text>
                            ))}
                          </Box>
                        </Box>

                        {/* TUJUAN */}
                        <Box bg="teal" w="100%" p={2} color="white" my={5}>
                          Tujuan
                        </Box>

                        <Box pt={5}>
                          <Text>
                            <b>Tujuan : </b>
                          </Text>
                          <Box pb={5} mb={5}>
                            {tujuans.map((tujuan) => (
                              <Text key={tujuan.id}>
                                {tujuan.no}. {tujuan.isi_ket}
                              </Text>
                            ))}
                          </Box>
                        </Box>
                      </TabPanel>
                    </TabPanels>
                  ) : (
                    <Text as="h2">No Records</Text>
                  )}
                </Tabs>
              </Col>
            </Row>
            <FooterComp />
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default Sekolah;
