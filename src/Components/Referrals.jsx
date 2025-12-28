import { useState } from "react";
import { Users, Link2, DollarSign, Copy } from "lucide-react";

const referralHistory = [
  {
    id: 1,
    user: "user123@gmail.com",
    date: "2025-01-12",
    earnings: "$1.50",
  },
  {
    id: 2,
    user: "demoUser@gmail.com",
    date: "2025-01-15",
    earnings: "$1.50",
  },
];

export default function Referrals() {
  const [copied, setCopied] = useState(false);

  const referralLink = "https://viewbox.com/ref/yourUserId";

  const copyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full h-full px-4 sm:px-6 lg:px-10 text-white space-y-8">
      {/* PAGE HEADER */}
      <h1 className="text-2xl font-semibold flex items-center gap-2">
        👥 Referrals
      </h1>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg text-black">
          <Users className="text-blue-600 mb-2" size={28} />
          <h3 className="text-sm text-gray-500">Total Referrals</h3>
          <p className="text-3xl font-bold">2</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg text-black">
          <DollarSign className="text-green-600 mb-2" size={28} />
          <h3 className="text-sm text-gray-500">Referral Earnings</h3>
          <p className="text-3xl font-bold">$3.00</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg text-black">
          <Link2 className="text-purple-600 mb-2" size={28} />
          <h3 className="text-sm text-gray-500">Your Referral Code</h3>
          <p className="font-semibold">yourUserId</p>
        </div>
      </div>

      {/* REFERRAL LINK */}
      <div className="bg-white rounded-2xl p-6 shadow-lg text-black">
        <h2 className="text-lg font-semibold mb-2">
          Your Referral Link
        </h2>
        <div className="h-[2px] bg-blue-500 mb-4" />

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            readOnly
            value={referralLink}
            className="flex-1 border rounded-lg px-4 py-2 bg-gray-100"
          />

          <button
            onClick={copyLink}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg"
          >
            <Copy size={18} />
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <p className="text-sm text-gray-500 mt-3">
          Share this link and earn money when users sign up and upload videos.
        </p>
      </div>

      {/* REFERRAL HISTORY */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h2 className="text-lg font-semibold text-black mb-2">
          Referral History
        </h2>
        <div className="h-[2px] bg-blue-500 mb-4" />

        <div className="overflow-x-auto">
          <table className="w-full border text-black">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border text-left">User</th>
                <th className="p-3 border text-left">Joined At</th>
                <th className="p-3 border text-left">Earnings</th>
              </tr>
            </thead>
            <tbody>
              {referralHistory.map((item) => (
                <tr key={item.id}>
                  <td className="p-3 border">{item.user}</td>
                  <td className="p-3 border">{item.date}</td>
                  <td className="p-3 border text-green-600 font-medium">
                    {item.earnings}
                  </td>
                </tr>
              ))}

              {referralHistory.length === 0 && (
                <tr>
                  <td colSpan="3" className="p-6 text-center text-gray-500">
                    No referrals yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
