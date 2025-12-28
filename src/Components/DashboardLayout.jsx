import Sidebar from "../Components/Sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />

      <main className="flex-1 p-4 sm:p-6 lg:p-10">
        <Outlet />
      </main>
    </div>
  );
}
