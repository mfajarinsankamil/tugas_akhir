import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sekolah from "./pages/Sekolah";
import KepalaSekolah from "./pages/KepalaSekolah";
import Guru from "./pages/Guru";
import Kontak from "./pages/Kontak";
import Beranda from "./pages/Beranda";
import Pesdik from "./pages/Pesdik";
import Informasi from "./pages/Informasi";
import Program from "./pages/Program";

import LoginAdm from "./pages/Login";
import BerandaAdm from "./pages/BerandaAdmin";
import InformasiAdm from "./pages/InformasiAdmin";
import ProgramAdm from "./pages/ProgramAdmin";
import CreateInfomasiAdm from "./pages/CreateInformasiAdmin";
import UpdateInformasiAdm from "./pages/UpdateInformasiAdmin";
import PesdikAdm from "./pages/PesdikAdmin";
import CreatePesdikAdm from "./pages/CreatePesdikAdmin";
import UpdatePesdikAdm from "./pages/UpdatePesdikAdmin";
import KepsekAdm from "./pages/KepsekAdmin";
import UpdateKepsekidenAdm from "./pages/UpdateKepsekidenAdmin";
import UpdateSekolahAdm from "./pages/UpdateSekolahAdmin";
import SekolahAdm from "./pages/SekolahAdmin";
import CreateKepsekripenAdm from "./pages/CreateKepsekripenAdmin";
import UpdateKepsekripenAdm from "./pages/UpdateKepsekripen";
import CreateKepsekripangAdm from "./pages/CreateKepsekripangAdmin";
import UpdateKepsekripangAdm from "./pages/UpdateKepsekripangAdmin";
import GuruAdm from "./pages/GuruAdmin";
import CreateGuruAdm from "./pages/CreateGuruAdmin";
import UpdateGuruAdm from "./pages/UpdateGuruAdmin";
import KontakAdm from "./pages/KontakAdmin";
import UpdateKontakAdm from "./pages/UpdateKontakAdmin";
import CreateVisiAdm from "./pages/CreateVisiAdmin";
import UpdateVisiAdm from "./pages/UpdateVisiAdmin";
import CreateMisiAdm from "./pages/CreateMisiAdmin";
import UpdateTujuanAdm from "./pages/UpdateTujuanAdmin";
import UpdateMisiAdm from "./pages/UpdateMisiAdmin";
import CreateTujuanAdm from "./pages/CreateTujuanAdmin";
import NavbarComp from "./components/NavComp";
import UpdateSarpasAdm from "./pages/UpdateSarpasAdmin";
import CreateSarpasAdm from "./pages/CreateSarpasAdmin";
// import UpdateEmailPasswordAdmin from "./pages/Admin/UpdateEmailPasswordAdmin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/LoginToAdmin" element={<LoginAdm />}></Route>
        {/* <Route
          path="/UpdateEmailPasswordAdmin/:id"
          element={<UpdateEmailPasswordAdmin />}
        ></Route> */}
        <Route path="/BerandaAdm" element={<BerandaAdm />}></Route>
        <Route path="/InformasiAdm" element={<InformasiAdm />}></Route>
        <Route path="/ProgramAdm" element={<ProgramAdm />}></Route>
        <Route
          path="/CreateInformasiAdm"
          element={<CreateInfomasiAdm />}
        ></Route>
        <Route
          path="/UpdateInformasiAdm/:id"
          element={<UpdateInformasiAdm />}
        ></Route>
        <Route path="/PesdikAdm" element={<PesdikAdm />}></Route>
        <Route path="/CreatePesdikAdm" element={<CreatePesdikAdm />}></Route>
        <Route
          path="/UpdatePesdikAdm/:id"
          element={<UpdatePesdikAdm />}
        ></Route>
        <Route path="/SekolahAdm" element={<SekolahAdm />}></Route>
        <Route
          path="/UpdateSekolahAdm/:id"
          element={<UpdateSekolahAdm />}
        ></Route>
        <Route
          path="/UpdateSarpasAdm/:id"
          element={<UpdateSarpasAdm />}
        ></Route>
        <Route path="/CreateSarpasAdm" element={<CreateSarpasAdm />}></Route>
        <Route path="/CreateVisiAdm" element={<CreateVisiAdm />}></Route>
        <Route path="/UpdateVisiAdm/:id" element={<UpdateVisiAdm />}></Route>
        <Route path="/CreateMisiAdm" element={<CreateMisiAdm />}></Route>
        <Route path="/UpdateMisiAdm/:id" element={<UpdateMisiAdm />}></Route>
        <Route path="/CreateTujuanAdm" element={<CreateTujuanAdm />}></Route>
        <Route
          path="/UpdateTujuanAdm/:id"
          element={<UpdateTujuanAdm />}
        ></Route>
        <Route path="/KepsekAdm" element={<KepsekAdm />}></Route>
        <Route
          path="/UpdateKepsekidenAdm/:id"
          element={<UpdateKepsekidenAdm />}
        ></Route>
        <Route
          path="/CreateKepsekripenAdm"
          element={<CreateKepsekripenAdm />}
        ></Route>
        <Route
          path="/UpdateKepsekripenAdm/:id"
          element={<UpdateKepsekripenAdm />}
        ></Route>
        <Route
          path="/CreateKepsekripangAdm"
          element={<CreateKepsekripangAdm />}
        ></Route>
        <Route
          path="/UpdateKepsekripangAdm/:id"
          element={<UpdateKepsekripangAdm />}
        ></Route>
        <Route path="/GuruAdm" element={<GuruAdm />}></Route>
        <Route path="/CreateGuruAdm" element={<CreateGuruAdm />}></Route>
        <Route path="/UpdateGuruAdm/:id" element={<UpdateGuruAdm />}></Route>
        <Route path="/KontakAdm" element={<KontakAdm />}></Route>
        <Route
          path="/UpdateKontakAdm/:id"
          element={<UpdateKontakAdm />}
        ></Route>
      </Routes>

      <NavbarComp />
      <Routes>
        <Route path="/" element={<Beranda />}></Route>
        <Route path="/Informasi" element={<Informasi />}></Route>
        <Route path="/Program" element={<Program />}></Route>
        <Route path="/Pesdik" element={<Pesdik />}></Route>
        <Route path="/Sekolah" element={<Sekolah />}></Route>
        <Route path="/Kepsek" element={<KepalaSekolah />}></Route>
        <Route path="/Guru" element={<Guru />}></Route>
        <Route path="/Kontak" element={<Kontak />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
