import axios from "axios";

import { Box } from "@chakra-ui/react";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import NavCompAdmin from "../components/NavCompAdmin";
import FooterCompAdmin from "../components/FooterCompAdmin";
import { useNavigate } from "react-router-dom";

function Beranda() {
  // const [auth, setAuth] = useState(false);
  // const [name, setName] = useState("");
  // const [message, setMessage] = useState("");

  // axios.defaults.withCredentials = true;
  // useEffect(() => {
  //   axios.get("http://localhost:2024/BerandaAdmin").then((res) => {
  //     if (res.data.Status === "Success") {
  //       setAuth(true);
  //       setName(res.data.name);
  //     } else {
  //       setAuth(false);
  //       setMessage(res.data.Message);
  //     }
  //   });
  // }, []);

  const navigate = useNavigate();
  const handleLogout = () => {
    axios
      .get("http://localhost:8001/Logout")
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/LoginToAdmin");
        } else {
          alert("error");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <NavCompAdmin />

      <Box className="berandaAdmin-page">
        <Box className="berandaAdmin min-vh-99 pt-5">
          <Container>
            <Row className="my-5">
              <Col className="my-5 py-5">
                <Box className="my-5 py-5">
                  {/* {auth ? ( */}
                  <div>
                    <h3>Selamat Datang di Panel TK Islam Al-Manaar - {name}</h3>
                    <button className="btn btn-danger" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                  {/* ) : (
                    <div>
                      <h3>{message}</h3>
                      <Link to="/LoginToAdmin" className="btn btn-primary">
                        Login Now
                      </Link>
                    </div>
                  )} */}
                </Box>
              </Col>
            </Row>
          </Container>
        </Box>
      </Box>

      <FooterCompAdmin />
    </div>
  );
}

export default Beranda;
