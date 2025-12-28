import { Video, Eye, DollarSign } from "lucide-react";

const Card = ({ icon: Icon, value, label, subtitle }) => {
       return (
              <div
                     className="rounded-2xl p-6 sm:p-8 text-white shadow-lg
      bg-gradient-to-br from-[#4988C4] via-[#1C4D8D] to-[#0F2854]"
              >
                     <div className="flex items-center justify-between">
                            <Icon size={36} />
                            <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                                   Today
                            </span>
                     </div>

                     <h2 className="text-3xl sm:text-4xl font-bold mt-6">{value}</h2>
                     <p className="text-lg mt-1">{label}</p>
                     <p className="text-sm text-white/70 mt-1">{subtitle}</p>
              </div>
       );
};

export default function Dashboard() {
       return (
              <div className="space-y-8">
                     {/* PAGE TITLE */}
                     <div>
                            <h1 className="text-2xl font-semibold text-[#5b81c3]">
                                   Dashboard
                            </h1>
                            <p className="text-sm text-gray-500">
                                   Overview of your account performance
                            </p>
                     </div>

                     {/* CARDS */}
                     <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                            <Card
                                   icon={Video}
                                   value="0"
                                   label="Total Videos"
                                   subtitle="Uploaded videos"
                            />

                            <Card
                                   icon={Eye}
                                   value="0"
                                   label="Total Views"
                                   subtitle="Across all videos"
                            />

                            <Card
                                   icon={DollarSign}
                                   value="$0.00"
                                   label="Total Earnings"
                                   subtitle="Estimated revenue"
                            />
                     </div>
              </div>
       );
}
