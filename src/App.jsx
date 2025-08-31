import "@fontsource/ubuntu"; // Defaults to weight 400

import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Transaction from "./pages/transaction/Transaction";
import Support from "./pages/support/Support";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transaction/>}/>
          <Route path="/support" element={<Support/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
