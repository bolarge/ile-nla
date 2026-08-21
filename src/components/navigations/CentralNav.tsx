import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../../pages/home/Home";

function CentralNav() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default CentralNav;