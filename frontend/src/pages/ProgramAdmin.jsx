import {
  Box,
  Text,
  Card,
  Image,
  CardBody,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { Container, Row, Col } from "react-bootstrap";
import { proGul, proLin, proSkul } from "../data/dataindex";

import FooterCompAdmin from "../components/FooterCompAdmin";
import NavbarCompAdmin from "../components/NavCompAdmin";

const ProgramAdmin = () => {
  return (
    <div>
      <NavbarCompAdmin />
      <Box className="program-page pt-3">
        <Box className="program-unggulan min-vh-100 pt-5 mb-5 pb-5">
          <Container>
            <Row className="pb-5 mb-5 pt-5 mt-4">
              <Col>
                <Text as="h1" className="text-center fw-bold mt-5">
                  Program Unggulan
                </Text>
              </Col>
            </Row>

            <Row>
              {proGul.map((pg) => {
                return (
                  <Col key={pg.id} className="shadow rounded">
                    <Card boxShadow="none">
                      <Image
                        src={pg.image}
                        className="mt-3 mb-3 rounded-top"
                        h="250px"
                        w="100%"
                        px="2"
                      />
                      <CardBody>
                        <Heading size="15px" className="mb-3 px-1">
                          {pg.judul}
                        </Heading>

                        <Text as="p" py="1" px="1">
                          {pg.keterangan}
                        </Text>
                      </CardBody>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </Box>
        {/* <Divider /> */}

        <Box
          className="program-ekskul min-vh-100 pt-2 mb-5 pb-5"
          backgroundColor="#E0F2F1"
        >
          <Container>
            <Row className="pb-5 mb-5 pt-3 mt-4">
              <Col>
                <Text as="h1" className="text-center fw-bold mt-5">
                  Program Ekstrakulikuler
                </Text>
              </Col>
            </Row>

            <Row>
              {proSkul.map((ps) => {
                return (
                  <Col key={ps.id} className="shadow rounded">
                    <Card boxShadow="none">
                      <Image
                        src={ps.image}
                        className="mt-3 mb-3 rounded-top"
                        h="250px"
                        w="100%"
                        px="2"
                      />
                      <CardBody>
                        <Heading size="15px" className="mb-3 px-1">
                          {ps.judul}
                        </Heading>
                        <Text as="p" py="1" px="1">
                          {ps.keterangan}
                        </Text>
                      </CardBody>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </Box>

        <Box className="program-lainnya min-vh-100  mb-5 pb-3">
          <Container>
            <Row className="pb-5 mb-5 pt-3 mt-4">
              <Col>
                <Text as="h1" className="text-center fw-bold mt-5">
                  Program Lainnya
                </Text>
              </Col>
            </Row>

            <Row>
              {proLin.map((pl) => {
                return (
                  <Col key={pl.id} className="shadow rounded">
                    <Card boxShadow="none">
                      <Image
                        src={pl.image}
                        className="mt-3 mb-3 rounded-top"
                        h="250px"
                        w="100%"
                        px="2"
                      />
                      <CardBody>
                        <Heading size="15px" className="mb-3 px-1">
                          {pl.judul}
                        </Heading>
                        <Text as="p" py="1" px="1">
                          {pl.keterangan}
                        </Text>
                      </CardBody>
                    </Card>
                  </Col>
                );
              })}
            </Row>
            <Divider />
          </Container>
        </Box>
      </Box>
      <FooterCompAdmin />
    </div>
  );
};

export default ProgramAdmin;
