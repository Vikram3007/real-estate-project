import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./reglogin/ Register";
import Home from "./House/Pages/Home";
import About from "./House/Pages/About";
import Contact from "./House/Pages/Contact";
import HomeClick2 from "./House/HomeClickEvent/HomeCliclk2";
import Nav from "./House/Nav";

// Protected Route
const Protected = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/" />;
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

const App = () => {
  return (
    <Routes>
      {/* FIRST PAGE */}
      <Route path="/" element={<Register />} />

      {/* PROTECTED PAGES */}
      <Route path="/home" element={<Protected><Home /></Protected>} />
      <Route path="/about" element={<Protected><About /></Protected>} />
      <Route path="/contact" element={<Protected><Contact /></Protected>} />
      <Route path="/homeclick" element={<Protected><HomeClick2 /></Protected>} />

      {/* FALLBACK */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
