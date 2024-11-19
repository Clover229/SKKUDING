import DetailPage from "./components/DetailPage";
import Header from "./components/header";
import PoketmonDetail from "./components/PoketmonDetail";
import MainPage from "./components/MainPage";
import data from "./dataAxios";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/DatailPage/:index" element={<DetailPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
