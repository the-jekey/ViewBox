import { Home, Upload, Video, Users, CreditCard, Wallet, HelpCircle, LogOut, X, } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../Utils/auth";

export default function Sidebar({ isOpen, setIsOpen }) {
  
  const navigate = useNavigate();
  const menu = [
    { name: "Home", icon: Home, path: "/" },
    { name: "Upload Video", icon: Upload, path: "/upload" },
    { name: "Uploaded Videos", icon: Video, path: "/uploaded-videos" },
    { name: "Referrals", icon: Users, path: "/referrals" },
    { name: "Payments", icon: CreditCard, path: "/payments" },
    { name: "Withdrawals", icon: Wallet, path: "/withdrawals" },
    { name: "Support", icon: HelpCircle, path: "/support" },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed lg:static top-0 left-0 min-h-screen w-64 z-50
        bg-[#FCF9EA] text-[#0F2854]
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#1C4D8D]/20 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-[#0F2854]">NovaX</h1>
            <p className="text-sm text-[#1C4D8D]">Admin Panel</p>
          </div>

          <button
            className="lg:hidden text-[#0F2854]"
            onClick={() => setIsOpen(false)}
          >
            <X />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4 space-y-2">
          {menu.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition font-medium
                ${isActive
                  ? "bg-[#4988C4] text-white"
                  : "hover:bg-[#1C4D8D]/10 text-[#0F2854]"
                }`
              }
            >
              <item.icon
                size={18}
                className="shrink-0"
              />
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-[#1C4D8D]/20">
          <button onClick={handleLogout} className="flex items-center gap-3 px-6 py-2 rounded-full
            text-red-700 hover:bg-red-100 transition">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}
