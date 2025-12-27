import { BarChart2, Menu } from "lucide-react";

export default function Topbar({ setIsOpen }) {
       return (
              <div className="flex items-center gap-4 mb-8">
                     {/* Mobile Menu Button */}
                     <button
                            className="lg:hidden"
                            onClick={() => setIsOpen(true)}
                     >
                            <Menu />
                     </button>

                     <BarChart2 className="text-green-400" />
                     <h1 className="text-xl sm:text-2xl font-semibold">
                            Dashboard Overview
                     </h1>
              </div>
       );
}
