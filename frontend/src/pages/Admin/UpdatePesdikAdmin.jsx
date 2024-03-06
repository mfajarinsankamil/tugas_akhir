// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { Box } from "@chakra-ui/react";

// import NavCompAdmin from "../components/NavCompAdmin";
// import FooterCompAdmin from "../components/FooterCompAdmin";

// const UpdatePesdikAdmin = () => {
//   const { id } = useParams();
//   const [values, setValues] = useState({
//     nama: "",
//     kelas: "",
//     alamat: "",
//   });
//   const navigate = useNavigate();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .put("http://localhost:2024/UpdatePesdikAdmin/" + id, values)
//       .then((res) => navigate("/PesdikAdmin", res))
//       .catch((err) => console.log(err));
// //   };
//   useEffect(() => {
//     axios
//       .get("http://localhost:2024/GetRecordPesdikAdmin/" + id)
//       .then((res) => {
//         setValues({
//           ...values,
//           nama: res.data[0].nama,
//           kelas: res.data[0].kelas,
//           alamat: res.data[0].alamat,
//         });
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <Box>
//       <NavCompAdmin />
//       <div className="d-flex align-items-center flex-column mt-3">
//         <h1>Update Student</h1>
//         <form className="w-50" onSubmit={handleSubmit}>
//           <div className="mb-3 mt-3">
//             <label htmlFor="nama" className="form-label">
//               Nama:
//             </label>
//             <input
//               type="nama"
//               className="form-control"
//               id="nama"
//               placeholder="Enter Nama"
//               name="nama"
//               value={values.nama}
//               onChange={(e) => setValues({ ...values, nama: e.target.value })}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="kelas" className="form-label">
//               Kelas:
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               value={values.kelas}
//               placeholder="Enter Kelas"
//               name="kelas"
//               onChange={(e) => setValues({ ...values, kelas: e.target.value })}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="alamat" className="form-label">
//               Alamat:
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Enter Alamat"
//               name="alamat"
//               value={values.alamat}
//               onChange={(e) => setValues({ ...values, alamat: e.target.value })}
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </form>
//       </div>
//       <FooterCompAdmin />
//     </Box>
//   );
// };

// export default UpdatePesdikAdmin;
