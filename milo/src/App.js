import Sidebar from "./components/Sidebar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Transactions from "./pages/Transactions"

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/"/>
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Transactions" element={<Transactions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
