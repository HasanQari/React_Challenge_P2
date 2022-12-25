import { Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import ControlPanel from "./pages/control_panel";
import DataPanel from "./pages/data_panel";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Main />} />
      <Route index path="/control_panel" element={<ControlPanel />} />
      <Route index path="/data_panel" element={<DataPanel />} />
    </Routes>
  );
}

export default App;
