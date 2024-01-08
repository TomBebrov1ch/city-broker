import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

// Routes
import { ROUTE_CONSTANTS } from "@shared/config/routes";
import { HomePage } from "./Home/ui";

export const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/index.html" element={<Navigate replace to="/home" />} />
        <Route path="/index.shtml" element={<Navigate replace to="/home" />} />
        <Route path={ROUTE_CONSTANTS.HOME} element={<HomePage />} />
      </Routes>
    </Router>
  );
};
