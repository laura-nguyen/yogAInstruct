import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import PosesPage from "./pages/PosesPage/PosesPage";
import PoseCamPage from "./pages/PoseCamPage/PoseCamPage";
import InstructionsPage from "./pages/InstructionsPage/InstructionsPage";
import "./App.scss";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/poses" element={<PosesPage />} />
          <Route path="/instructions" element={<InstructionsPage />} />
          <Route path="/practice/:poseId" element={<PoseCamPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
