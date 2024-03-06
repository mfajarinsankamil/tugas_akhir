import { Container, Row, Col, Accordion } from "react-bootstrap";
import { faq } from "../data/dataindex";
import { Box, Text } from "@chakra-ui/react";

const FaqComp = () => {
  return (
    <Box className="faq">
      <Container>
        <Row>
          <Col>
            <Text
              as="h2"
              className="text-center fw-bold animate__animated animate__fadeInUp animated__delay-1s"
            >
              Pertanyaan sering ditanyakan
            </Text>
          </Col>
        </Row>

        <Row className="row-cols-lg-2 row-cols-1 g-4 pt-5">
          {faq.map((data) => {
            return (
              <Col key={data.id}>
                <Accordion className="shadow-sm">
                  <Accordion.Item eventKey={data.eventKey}>
                    <Accordion.Header>{data.title}</Accordion.Header>
                    <Accordion.Body>{data.desc}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Box>
  );
};

export default FaqComp;
