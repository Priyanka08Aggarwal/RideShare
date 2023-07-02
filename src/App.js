import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import Register from "./components/pages/Register";
import DashboardPage from "./components/pages/DashboardPage";
import RideOption from "./components/pages/RideOptions";
import EditRating from "./components/pages/editRating";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="loginpage" element={<LoginPage />} />
        <Route path="registerpage" element={<Register />} />
        <Route path="dashboardpage" element={<DashboardPage />} />
        <Route path="rideOptions" element={<RideOption />} />
        <Route path="/editRating" element={<EditRating />} />
      </Routes>
      {/* <ToastContainer theme="dark" /> */}
    </>
  );
}

export default App;
