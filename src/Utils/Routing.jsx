import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

// Pages
import Dashboard from "../Components/Dashboard";
import UploadVideo from "../Components/UploadVideo";
import UploadedVideos from "../Components/UploadedVideos";
import Referrals from "../Components/Referrals";
import Paymentsinfo from "../Components/PaymentsInfo";
import Withdrawals from "../Components/Withdrawals";
import Support from "../Components/Support";
import DashboardLayout from "../Components/DashboardLayout";
import Login from "../Components/Login";

const Routing = () => {
  return (
    <Routes>
      {/* PUBLIC ROUTE */}
      <Route path="/login" element={<Login />} />

      {/* PROTECTED ROUTES */}
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="upload" element={<UploadVideo />} />
        <Route path="uploaded-videos" element={<UploadedVideos />} />
        <Route path="referrals" element={<Referrals />} />
        <Route path="payments" element={<Paymentsinfo />} />
        <Route path="withdrawals" element={<Withdrawals />} />
        <Route path="support" element={<Support />} />
      </Route>
    </Routes>
  );
};

export default Routing;
