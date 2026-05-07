import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import RoomDetails from "./pages/RoomDetails";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Booking from "./pages/Booking";
import About from "./pages/About";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        

        {/* ========== PAGES PUBLIQUES ========== */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="rooms/:id" element={<RoomDetails />} />
          <Route path="services" element={<Services />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="booking" element={<Booking />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* ========== ADMIN LOGIN (sans Layout) ========== */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* ========== ADMIN DASHBOARD (protégé, sans Layout) ========== */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}