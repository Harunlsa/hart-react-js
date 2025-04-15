import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BabySetsPage from "./pages/products/BabysetsPage";
import BasinsPage from "./pages/products/BasinsPage";
import BasketsPage from "./pages/products/BasketsPage";
import BowlsPage from "./pages/products/BowlsPage";
import BucketsPage from "./pages/products/BucketsPage";
import ColandersAndPlatesPage from "./pages/products/ColandersAndPlatesPage";
import CoolersPage from "./pages/products/CoolersPage";
import DrumsPage from "./pages/products/DrumsPage";
import IceCreamContainersPage from "./pages/products/IceCreamContainersPage";
import JerryCansPage from "./pages/products/JerryCansPage";
import MugsandcupsPage from "./pages/products/MugsAndCupsPage";
import RacksPage from "./pages/products/RacksPage";
import TakeAwayContainersPage from "./pages/products/TakeAwayContainersPage";
import ToysPage from "./pages/products/ToysPage";

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
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>

        <Route path="/products/:category" element={<ProductPageLayout />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        {/* <Route
          path="*"
          element={<Navigate to="/products/bowls" replace />}
        /> */}
        {/* Product pages */}
        {/* <Route path="/products/babySetsPage" element={<BabySetsPage />}></Route>
        <Route path="/products/basinsPage" element={<BasinsPage />}></Route>
        <Route path="/products/basketsPage" element={<BasketsPage />}></Route>
        <Route path="/products/BowlsPage" element={<BowlsPage />}></Route>
        <Route path="/products/bucketsPage" element={<BucketsPage />}></Route>
        <Route
          path="/products/colandersAndPlatesPage"
          element={<ColandersAndPlatesPage />}
        ></Route>
        <Route path="/products/coolersPage" element={<CoolersPage />}></Route>
        <Route path="/products/drumsPage" element={<DrumsPage />}></Route>
        <Route
          path="/products/iceCreamContainersPage"
          element={<IceCreamContainersPage />}
        ></Route>
        <Route
          path="/products/jerryCansPage"
          element={<JerryCansPage />}
        ></Route>
        <Route
          path="/products/mugsAndCupsPage"
          element={<MugsandcupsPage />}
        ></Route>
        <Route path="/products/racksPage" element={<RacksPage />}></Route>
        <Route
          path="/products/takeAwayContainersPage"
          element={<TakeAwayContainersPage />}
        ></Route>
        <Route path="/products/toysPage" element={<ToysPage />}></Route> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
