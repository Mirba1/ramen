import './assets/styles/main.css'
import MainPage from "./pages/main/MainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PalatineMain from "./pages/PalatinePage/PalatineMain";
import GlenviewMain from "./pages/Glenview/GlenviewMain";
import VernonHillsMain from "./pages/VernonHills/VernonHillsMain";
import InfoPage from "./pages/PalatinePage/InfoPage";
import MenuPage from "./pages/PalatinePage/MenuPage";
import AboutUsPage from "./pages/PalatinePage/AboutUsPage";
import NavBar from "./components/layout/NavBar";


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<MainPage />} />
          <Route path="/palatine" element={<PalatineMain />} />
          <Route path="/palatine/info" element={<InfoPage />} />
          <Route path="/palatine/menu" element={<MenuPage />} />
          <Route path="/palatine/about-us" element={<AboutUsPage />} />
          <Route path="/glenview" element={<GlenviewMain />} />
          <Route path="/vernon-hills" element={<VernonHillsMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
