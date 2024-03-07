import axios from "axios";

import { Box, FormLabel, Heading, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8001/Login", values)
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/BerandaAdm");
        } else {
          alert(res.data.Message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box className="login-page d-flex vh-100 justify-content-center align-items-center ">
      <Box className="login bg-white p-3 rounded-5 solid black">
        <Box>
          <Heading size="md" textAlign="center" py="5" mb={5}>
            Login to Admin <br /> TK Islam Al-Manaar
          </Heading>
        </Box>
        <form onSubmit={handleSubmit}>
          <Box className="mb-3">
            <FormLabel htmlFor="email">
              <strong>Email</strong>
            </FormLabel>
            <Input
              type="email"
              placeholder="Masukkan Email"
              name="email"
              autoComplete="off"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              className="form-control rounded-3"
            />
          </Box>
          <Box className="mb-3">
            <FormLabel htmlFor="password">
              <strong>Password</strong>
            </FormLabel>
            <Input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              className="form-control rounded-3"
            />
          </Box>
          <button type="submit" className="btn btn-success w-100 rounded-30">
            Login
          </button>
          <Box className="text-center fw-bold" my={5} pt={5}>
            <Link to="/">
              <u>Kembali ke Dashboard</u>
            </Link>
          </Box>
          {/* <p>You are agree to aour terms adn policies</p>
          <button className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"></button> */}
        </form>
      </Box>
    </Box>
  );
}
