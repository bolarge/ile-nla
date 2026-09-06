import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../../pages/home/Home";
import PrivacyandPolicy from "../../pages/privacy/PrivacyandPolicy";

function CentralNav() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyandPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default CentralNav;
