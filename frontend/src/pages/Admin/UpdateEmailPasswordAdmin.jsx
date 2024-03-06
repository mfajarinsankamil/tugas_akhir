// import axios from "axios";

// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { Container, Row, Col } from "react-bootstrap";
// import { Box, FormLabel, Text, Input } from "@chakra-ui/react";

// import NavbarCompAdmin from "../components/NavCompAdmin";
// import FooterCompAdmin from "../components/FooterCompAdmin";

// const UpdateEmailPasswordAdmin = () => {
//   const { id } = useParams();
//   const [values, setValues] = useState({
//     email: "",
//     password: "",
//   });
//   const navigate = useNavigate();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .put("http://localhost:2024/UpdateEmailPasswordAdmin/" + id, values)
//       .then((res) => navigate("/BerandaAdmin", res))
//       .catch((err) => console.log(err));
//   };
//   useEffect(() => {
//     axios
//       .get("http://localhost:2024/GetRecordEmailPasswordAdmin/" + id)
//       .then((res) => {
//         setValues({
//           ...values,
//           email: res.data[0].email,
//           password: res.data[0].password,
//         });
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div>
//       <NavbarCompAdmin />

//       <Box className="updateEmailPasswordAdmin-page pt-3">
//         <Box className="updateEmailPasswordAdmin min-vh-99 pt-5">
//           <Container>
//             <Row className="pb-5 mb-5 pt-5 mt-4">
//               <Col>
//                 <Text as="h1" className="text-center fw-bold mt-5">
//                   Update Email dan Password
//                 </Text>
//               </Col>
//             </Row>

//             <Row>
//               <Col>
//                 <Box className="d-flex align-items-center flex-column mb-5 pb-5">
//                   <form className="w-50" onSubmit={handleSubmit}>
//                     <Box>
//                       <FormLabel htmlFor="email" className="form-label">
//                         Judul :
//                       </FormLabel>
//                       <Input
//                         type="email"
//                         className="form-control"
//                         id="email"
//                         placeholder="Masukkan Email Baru"
//                         name="email"
//                         value={values.email}
//                         onChange={(e) =>
//                           setValues({ ...values, email: e.target.value })
//                         }
//                       />
//                     </Box>
//                     <Box className="mb-3">
//                       <FormLabel htmlFor="password" className="form-label">
//                         Password :
//                       </FormLabel>
//                       <Input
//                         type="password"
//                         className="form-control"
//                         value={values.password}
//                         placeholder="Masukkan Password"
//                         name="password"
//                         onChange={(e) =>
//                           setValues({ ...values, password: e.target.value })
//                         }
//                       />
//                     </Box>
//                     <button type="submit" className="btn btn-primary">
//                       Submit
//                     </button>
//                   </form>
//                 </Box>
//               </Col>
//             </Row>
//           </Container>
//         </Box>
//       </Box>

//       <FooterCompAdmin />
//     </div>
//   );
// };

// export default UpdateEmailPasswordAdmin;
