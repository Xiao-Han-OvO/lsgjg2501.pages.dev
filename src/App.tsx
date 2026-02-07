import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Members } from "./pages/Members";
import { Throwback } from "./pages/Throwback";

export function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/members" element={<Members />} />
        <Route path="/lookback" element={<Throwback />} />
      </Routes>
    </Layout>
  );
}
