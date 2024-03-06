// import { Box } from "@chakra-ui/react";
// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import NavCompAdmin from "../components/NavCompAdmin";
// import FooterCompAdmin from "../components/FooterCompAdmin";

// const CreatePesdikAdmin = () => {
//   const [values, setValues] = useState({
//     nama: "",
//     kelas: "",
//     alamat: "",
//   });
//   const navigate = useNavigate();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:2024/CreatePesdikAdmin", values)
//       .then((res) => navigate("/PesdikAdmin", res))
//       .catch((err) => console.log(err));
//   };

//   return (
//     <Box>
//       <NavCompAdmin />
//       <div className="d-flex align-items-center flex-column mt-3">
//         <h1>Add a Student</h1>
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

// export default CreatePesdikAdmin;
