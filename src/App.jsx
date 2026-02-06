import { Routes, Route } from "react-router-dom";
import Header from "../Header";
import MainFile from "./MainFile";
import DuplicateFile from "./DuplicateFile";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/MainFile" element={<MainFile />} />
        <Route path="/DuplicateFile" element={<DuplicateFile />} />
      </Routes>
    </>
  );
}

export default App;
