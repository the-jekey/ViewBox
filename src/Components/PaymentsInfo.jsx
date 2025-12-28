import { DollarSign, Upload, Scale } from "lucide-react";

const Card = ({ icon: Icon, value, label }) => {
  return (
    <div
      className="rounded-2xl p-8 sm:p-10 text-center text-white
       bg-gradient-to-br from-[#4988C4] via-[#1C4D8D] to-[#0F2854]
      shadow-lg"
    >
      <div className="flex justify-center mb-4">
        <Icon size={42} />
      </div>

      <h2 className="text-3xl sm:text-4xl font-bold">{value}</h2>
      <p className="mt-1 text-lg text-yellow-200">{label}</p>
    </div>
  );
};

export default function Paymentsinfo() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 text-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold flex items-center gap-2">
          💰 Payments
        </h1>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-8">
        <Card
          icon={DollarSign}
          value="$0.00"
          label="Total Earnings"
        />

        <Card
          icon={Upload}
          value="$0.00"
          label="Total Withdrawals"
        />

        <Card
          icon={Scale}
          value="$0.00"
          label="Available Balance"
        />
      </div>
    </div>
  );
}
