// src/App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ServicePage from "./pages/service";
import ContactPage from "./pages/contact";
import HomePage from "./pages/Home";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route index element={<HomePage />} />

            <Route path="/" element={<HomePage />} />

            <Route path="/services" element={<ServicePage />} />

            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}
