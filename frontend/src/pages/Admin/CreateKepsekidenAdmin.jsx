// import { Box, Select, Text } from "@chakra-ui/react";
// import NavbarCompAdmin from "../components/NavCompAdmin";
// import { Container, Row, Col } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";

// const CreateKepsekidenAdmin = () => {
//   const [values, setValues] = useState({
//     nama: "",
//     jenis_kelamin: "",
//     nip: "",
//     tmpt_lahir: "",
//     tgl_lahir: "",
//     alamat: "",
//     agama: "",
//     kwn: "",
//     bb: "",
//     tinggi: "",
//     gol_darah: "",
//   });
//   const navigate = useNavigate();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:2024/CreateKepsekidenAdmin", values)
//       .then((res) => navigate("/KepsekAdmin", res))
//       .catch((err) => console.log(err));
//   };
//   return (
//     <div>
//       <NavbarCompAdmin />

//       <Box className="kepsekiden-page pt-3">
//         <Box className="kepsekiden min-vh-100 pt-5">
//           <Container>
//             <Row className="pb-5 mb-5 pt-5 mt-4">
//               <Col>
//                 <Text as="h1" className="text-center fw-bold mt-5">
//                   Create Identitas Kepala Sekolah
//                 </Text>
//                 <Text className="text-center ">
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                 </Text>
//               </Col>
//             </Row>

//             <Row>
//               <Col>
//                 <div className="d-flex align-items-center flex-column mt-3">
//                   <form className="w-50" onSubmit={handleSubmit}>
//                     <div>
//                       <label htmlFor="nama" className="form-label">
//                         Nama :
//                       </label>
//                       <input
//                         type="nama"
//                         className="form-control"
//                         id="nama"
//                         placeholder="Enter Nama"
//                         name="nama"
//                         value={values.nama}
//                         onChange={(e) =>
//                           setValues({ ...values, nama: e.target.value })
//                         }
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="jenis_kelamin" className="form-label">
//                         Jenis Kelamin:
//                       </label>
//                       <Select
//                         type="jenis_kelamin"
//                         className="form-control"
//                         id="jenis_kelamin"
//                         placeholder="Pilih Jenis Kelamin"
//                         name="jenis_kelamin"
//                         value={values.jenis_kelamin}
//                         onChange={(e) =>
//                           setValues({
//                             ...values,
//                             jenis_kelamin: e.target.value,
//                           })
//                         }
//                       >
//                         <option>Laki-laki</option>
//                         <option>Perempuan</option>
//                       </Select>
//                     </div>
//                     <div>
//                       <label htmlFor="nip" className="form-label">
//                         NIP :
//                       </label>
//                       <input
//                         type="nip"
//                         className="form-control"
//                         id="nip"
//                         placeholder="Enter NIP"
//                         name="nip"
//                         value={values.nip}
//                         onChange={(e) =>
//                           setValues({ ...values, nip: e.target.value })
//                         }
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="tmpt_lahir" className="form-label">
//                         Tempat Lahir:
//                       </label>
//                       <input
//                         type="tmpt_lahir"
//                         className="form-control"
//                         id="tmpt_lahir"
//                         placeholder="Enter Tempat Lahir"
//                         name="tmpt_lahir"
//                         value={values.tmpt_lahir}
//                         onChange={(e) =>
//                           setValues({ ...values, tmpt_lahir: e.target.value })
//                         }
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="tgl_lahir" className="form-label">
//                         Tanggal Lahir:
//                       </label>
//                       <input
//                         type="date"
//                         className="form-control"
//                         id="tgl_lahir"
//                         placeholder="Enter Tanggal Lahir"
//                         name="tgl_lahir"
//                         value={values.tgl_lahir}
//                         onChange={(e) =>
//                           setValues({ ...values, tgl_lahir: e.target.value })
//                         }
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="alamat" className="form-label">
//                         Alamat:
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="alamat"
//                         placeholder="Enter Alamat"
//                         name="alamat"
//                         value={values.alamat}
//                         onChange={(e) =>
//                           setValues({ ...values, alamat: e.target.value })
//                         }
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="agama" className="form-label">
//                         Agama:
//                       </label>
//                       <Select
//                         type="agama"
//                         className="form-control"
//                         id="tgl_lahir"
//                         placeholder="Enter Agama"
//                         name="tgl_lahir"
//                         value={values.tgl_lahir}
//                         onChange={(e) =>
//                           setValues({ ...values, tgl_lahir: e.target.value })
//                         }
//                       >
//                         <option>Islam</option>
//                         <option>Kristen Protestan</option>
//                         <option>Kristen Katolik</option>
//                         <option>Hindu</option>
//                         <option>Buddha</option>
//                         <option>Konghucu</option>
//                       </Select>
//                     </div>
//                     <div>
//                       <label htmlFor="kwn" className="form-label">
//                         Kewarganegaraan:
//                       </label>
//                       <input
//                         type="kwn"
//                         className="form-control"
//                         id="kwn"
//                         placeholder="Enter Kewarganegaraan"
//                         name="kwn"
//                         value={values.kwn}
//                         onChange={(e) =>
//                           setValues({ ...values, kwn: e.target.value })
//                         }
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="bb" className="form-label">
//                         Berat Badan:
//                       </label>
//                       <input
//                         type="bb"
//                         className="form-control"
//                         id="bb"
//                         placeholder="Enter Berat Badan"
//                         name="bb"
//                         value={values.bb}
//                         onChange={(e) =>
//                           setValues({ ...values, bb: e.target.value })
//                         }
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="tinggi" className="form-label">
//                         Tinggi Badan:
//                       </label>
//                       <input
//                         type="tinggi"
//                         className="form-control"
//                         id="tinggi"
//                         placeholder="Enter Tinggi Badan"
//                         name="tinggi"
//                         value={values.tinggi}
//                         onChange={(e) =>
//                           setValues({ ...values, tinggi: e.target.value })
//                         }
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="gol_darah" className="form-label">
//                         Golongan Darah:
//                       </label>
//                       <Select
//                         type="gol_darah"
//                         className="form-control"
//                         id="gol_darah"
//                         placeholder="Enter Berat Badan"
//                         name="gol_darah"
//                         value={values.gol_darah}
//                         onChange={(e) =>
//                           setValues({ ...values, gol_darah: e.target.value })
//                         }
//                       >
//                         <option>Golongan O</option>
//                         <option>Golongan A</option>
//                         <option>Golongan B</option>
//                         <option>Golongan AB</option>
//                       </Select>
//                     </div>

//                     <button type="submit" className="btn btn-primary">
//                       Submit
//                     </button>
//                   </form>
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </Box>
//       </Box>
//     </div>
//   );
// };

// export default CreateKepsekidenAdmin;
