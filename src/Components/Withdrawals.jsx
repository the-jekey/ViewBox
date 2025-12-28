import { useState } from "react";
import { CreditCard, ClipboardList } from "lucide-react";

export default function Withdrawals() {
  const [form, setForm] = useState({
    name: "",
    method: "IN UPI",
    upi: "",
    confirmUpi: "",
  });

  const [error, setError] = useState("Error loading data.");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (form.upi !== form.confirmUpi) {
      setError("UPI ID does not match.");
      return;
    }
    setError("");
    console.log("Saved payment details:", form);
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 text-white space-y-10">
      {/* PAGE TITLE */}
      <h1 className="text-2xl font-semibold flex items-center gap-2">
        💳 Payment Details & Withdrawals
      </h1>

      {/* ADD PAYMENT METHOD */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
        <div className="bg-gradient-to-r from-cyan-200 via-slate-200 to-orange-200 rounded-xl p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-black mb-2">
            Add Payment Method
          </h2>
          <div className="h-[2px] bg-blue-500 mb-6" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
            {/* Full Name */}
            <div>
              <label className="block font-medium mb-1">Full Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none"
              />
            </div>

            {/* Payment Method */}
            <div>
              <label className="block font-medium mb-1">
                Payment Method
              </label>
              <select
                name="method"
                value={form.method}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              >
                <option>UPI</option>
                <option>Bank Transfer</option>
                <option>Paypal</option>
                <option>Payoneer</option>
              </select>
            </div>

            {/* UPI */}
            <div>
              <label className="block font-medium mb-1">UPI ID</label>
              <input
                name="{options.method === 'UPI' ? 'upi' : 'paymentId'}"
                value={form.upi}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            {/* Confirm UPI */}
            <div>
              <label className="block font-medium mb-1">
                Confirm UPI ID
              </label>
              <input
                name="confirmUpi"
                value={form.confirmUpi}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>
          </div>

          {/* ACTIONS */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 items-start">
            <button
              onClick={handleSubmit}
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg font-medium"
            >
              Save Details
            </button>

            {error && (
              <p className="text-red-600 font-medium flex items-center gap-1">
                ❌ {error}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* WITHDRAWAL HISTORY */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
        <h2 className="text-xl font-semibold text-black flex items-center gap-2">
          📋 Withdrawal History
        </h2>
        <div className="h-[2px] bg-blue-500 my-4" />

        <div className="overflow-x-auto">
          <table className="w-full border text-black">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border text-left">Amount</th>
                <th className="p-3 border text-left">Status</th>
                <th className="p-3 border text-left">Requested At</th>
                <th className="p-3 border text-left">Paid At</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border">$0.00</td>
                <td className="p-3 border text-yellow-600">Pending</td>
                <td className="p-3 border">—</td>
                <td className="p-3 border">—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
