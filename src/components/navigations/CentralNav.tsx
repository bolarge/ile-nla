import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../../pages/home/Home";
import PrivacyandPolicy from "../../pages/privacy/PrivacyandPolicy";
import TermsOfSupply from "../../pages/terms_of_supply/TermsOfSupply";
import Sustainabilitystatement from "../../pages/sustainability_statement/Sustainabilitystatement";

function CentralNav() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyandPolicy />} />
          <Route path="/terms-of-supply" element={<TermsOfSupply />} />
          <Route path="/sustainability-statement" element={<Sustainabilitystatement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default CentralNav;
