import StretchesPage from "./pages/StretchesPage/StretchesPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <StretchesPage />
    </>
  );
};

export default App;
