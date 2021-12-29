import logo from "./logo.svg";
import styles from "./App.module.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Tickets from "./pages/Tickets";

function App() {
  return (
    <Router>
      <Routes path="/">
        <Route index element={<Login />} />

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="tickets" element={<Tickets />} />
      </Routes>
    </Router>
  );
}

export default App;
