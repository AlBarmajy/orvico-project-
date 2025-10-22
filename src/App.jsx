import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ServicePage from "./pages/service";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            
            <Route path="/home" element={<h2>Home Page Placeholder</h2>} />

            <Route path="/services" element={<ServicePage />} />

            <Route path="/contact" element={<ContactPage />} />

          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}
