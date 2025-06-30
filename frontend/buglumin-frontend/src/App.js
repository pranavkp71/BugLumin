import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import ViewSnapshot from "./pages/ViewSnapshot";
import SharePublic from "./pages/SharePublic";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/snapshot/:id" element={<ViewSnapshot/>} />
        <Route path="/public/:shareID" element={<SharePublic />} />
      </Routes>
    </Router>
  );
}