import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Testimonials from "../pages/Testimonials";

function Layout() {
  return (
    <>
      <Header />

      <main>
        <Outlet /> 
      </main>

      <Footer />
    </>
  );
}

export default Layout;