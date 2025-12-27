import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import StatCard from "./StatCard";

export default function Dashboard() {
       const [isOpen, setIsOpen] = useState(false);

       return (
              <div className="flex h-screen">
                     <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

                     <main className="flex-1 p-4 sm:p-6 lg:p-10">
                            <Topbar setIsOpen={setIsOpen} />

                            {/* Responsive Cards */}
                            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                                   <StatCard
                                          icon="📼"
                                          value="0"
                                          title="Total Videos"
                                          subtitle="Updated every 24 hours"
                                   />

                                   <StatCard
                                          icon="👀"
                                          value="0"
                                          title="Total Views"
                                          subtitle="Updated every 24 hours"
                                   />

                                   <StatCard
                                          icon="💰"
                                          value="$0.00"
                                          title="Total Earnings"
                                          subtitle="eCPM: $1.5"
                                   />
                            </div>
                     </main>
              </div>
       );
}
