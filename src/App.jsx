import StretchesPage from "./pages/StretchesPage/StretchesPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import "./App.scss";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stretches" element={<StretchesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
