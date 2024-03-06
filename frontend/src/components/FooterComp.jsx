import { Container, Row, Col } from "react-bootstrap";
import { Box } from "@chakra-ui/react";

const FooterComp = () => {
  return (
    <Box className="footer-page my-5 py-5">
      <Box className="footer">
        <Container>
          {/* <Row>
            <Col lg="8">
              <h3 className="fw-bold">TK Islam Al-Manaar</h3>
              <p className="desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptas, reprehenderit.
              </p>

              <div className="no mb-1 mt-4">
                <Link className="text-decoration-none">
                  <PhoneIcon boxSize={5} pr={1} />
                  <p className="m-0">+62 878-0003-0992</p>
                </Link>
              </div>

              <div className="mail">
                <Link className="text-decoration none">
                  <EmailIcon boxSize={5} pr={1} />
                  <p className="m-0">email sekolah</p>
                </Link>
              </div>
            </Col>

            <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
              <h5 className="fw-bold">Menu</h5>
              <Link to="/">Beranda</Link>
              <Link to="/Informasi">Informasi</Link>
              <Link to="/Program">Program</Link>
              <Link to="/Sekolah">Tentang Sekolah</Link>
              <Link to="/Kontak">Kontak</Link>
            </Col>

            <Col lg="4" className="mt-lg-0 mt-5">
              <h5 className="fw-bold mb-3">Subscribe Untuk Info Menarik</h5>
              <div className="subscribes">
                <input type="text" placeholder="Subscribe...." />
                <button className="btn btn-danger rounded-end rounded-0">
                  Subscribe
                </button>
              </div>

              <div className="social mt-3">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-youtube"></i>
              </div>
            </Col>
          </Row> */}

          <Row>
            <Col>
              <p className="text-center px-md-0 px-3">
                &copy; Copyright {new Date().getFullYear()} by{" "}
                <span className="fw-bold"> TK Islam Al-Manaar</span>, All Right
                Reserver
              </p>
            </Col>
          </Row>
        </Container>
      </Box>
    </Box>
  );
};

export default FooterComp;
