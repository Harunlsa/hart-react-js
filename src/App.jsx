import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Navigate, Route, Routes } from "react-router-dom";

import Topbar from "./components/Topbar";
import Header from "./components/Header";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Catalogue from "./pages/Catalogue";
// import ProductPageLayout from "./components/ProductPageLayout";

import Footer from "./components/Footer";

import { Bounce, ToastContainer } from "react-toastify";
import { lazy, Suspense } from "react";
import { Spinner } from "react-bootstrap";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Catalogue = lazy(() => import("./pages/Catalogue"));
const ProductPageLayout = lazy(() => import("./components/ProductPageLayout"));

function App() {
  return (
    <>
      <Topbar />
      <Header />
      <main>
        <Suspense
          fallback={
            <div
              style={{
                height: "60vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Spinner animation="border" variant="primary" />
            </div>
          }
        >
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

            <Route path="/catalogue" element={<Catalogue />}></Route>

            <Route
              path="/products/:category"
              element={<ProductPageLayout key={location.pathname} />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />

      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        newestOnTop
        closeOnClick
        pauseOnHover
        pauseOnFocusLoss
        draggable
        theme="light"
        transition={Bounce}
      />
    </>
  );
}
// width: 100%;
// overflow-x: hidden; // scoped only here
// position: relative;
export default App;
