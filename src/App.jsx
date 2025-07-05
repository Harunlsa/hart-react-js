import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "bootstrap-icons/font/bootstrap-icons.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import ProductPageLayout from "./components/ProductPageLayout";

function App() {
  return (
    <>
      <Topbar />
      <Header />
      <Routes>
        {/* Main pages */}
        <Route
          path="/"
          element={
            <Home
              style={{
                width: "100%",
                overflowX: "hidden",
                position: "relative",
              }}
            />
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>

        <Route path="/products/:category" element={<ProductPageLayout />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        {/* <Route
          path="*"
          element={<Navigate to="/products/bowls" replace />}
        /> */}
      </Routes>
      <Footer />
    </>
  );
}
// width: 100%;
// overflow-x: hidden; // scoped only here
// position: relative;
export default App;
