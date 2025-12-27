import {
       Home,
       Upload,
       Video,
       Users,
       CreditCard,
       Wallet,
       HelpCircle,
       LogOut,
       X,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menu = [
       { name: "Home", icon: Home, path: "/" },
       { name: "Upload Video", icon: Upload, path: "/upload" },
       { name: "Uploaded Videos", icon: Video, path: "/videos" },
       { name: "Referrals", icon: Users, path: "/referrals" },
       { name: "Payments", icon: CreditCard, path: "/payments" },
       { name: "Withdrawals", icon: Wallet, path: "/withdrawals" },
       { name: "Support", icon: HelpCircle, path: "/support" },
];

export default function Sidebar({ isOpen, setIsOpen }) {
       return (
              <>
                     {/* Overlay */}
                     {isOpen && (
                            <div
                                   className="fixed inset-0 bg-black/90 z-40 lg:hidden"
                                   onClick={() => setIsOpen(false)}
                            />
                     )}

                     <aside
                            className={`fixed lg:static top-0 left-0 h-full w-64 z-50 text-black
        bg-[#FCF9EA]
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
                     >
                            {/* Header */}
                            <div className="p-6 border-b border-white/10 flex justify-between items-center">
                                   <div>
                                          <h1 className="text-2xl font-bold text-black">ViewBox</h1>
                                          <p className="text-sm text-black/60">Admin Panel</p>
                                   </div>

                                   <button className="lg:hidden" onClick={() => setIsOpen(false)}>
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
                                                        `flex items-center gap-3 px-4 py-3 rounded-lg transition
                 ${isActive
                                                               ? "bg-white/20 text-black"
                                                               : "hover:bg-gray-700 text-black"
                                                        }`
                                                 }
                                          >
                                                 <item.icon size={18} />
                                                 {item.name}
                                          </NavLink>
                                   ))}
                            </nav>

                            {/* Logout */}
                            <div className="p-4 border-t border-white/10">
                                   <button className="flex items-center gap-3  px-8 rounded-full  py-2 text-red-900 hover:text-red-800">
                                          <LogOut size={18} />
                                          Logout
                                   </button>
                            </div>
                     </aside>
              </>
       );
}
