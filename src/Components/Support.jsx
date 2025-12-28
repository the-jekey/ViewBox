import { MessageCircle, Send, Mail, Megaphone } from "lucide-react";

export default function Support() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 text-white">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold flex items-center gap-2">
          <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
            SOS
          </span>
          Support
        </h1>
        <p className="text-white/70 mt-1">
          Reach us via your preferred channel below.
        </p>
      </div>

      {/* Contact Buttons */}
      <div className="flex flex-wrap gap-3 mb-10">
        <a
          href="#"
          className="flex items-center gap-2 px-5 py-2 rounded-full
          bg-[#0F2854] hover:bg-[#1C4D8D] transition"
        >
          <MessageCircle className="text-green-400" size={18} />
          WhatsApp
        </a>

        <a
          href="#"
          className="flex items-center gap-2 px-5 py-2 rounded-full
          bg-[#0F2854] hover:bg-[#1C4D8D] transition"
        >
          <Send className="text-cyan-400" size={18} />
          Telegram
        </a>

        <a
          href="#"
          className="flex items-center gap-2 px-5 py-2 rounded-full
          bg-[#0F2854] hover:bg-[#1C4D8D] transition"
        >
          <Mail className="text-orange-400" size={18} />
          Email
        </a>
      </div>

      {/* Official Channel Card */}
      <div
        className="rounded-2xl p-8 sm:p-10 text-center
        bg-gradient-to-r from-[#4988C4] to-[#1C4D8D]
        shadow-xl"
      >
        <div className="flex justify-center mb-4">
          <Megaphone className="text-white" size={40} />
        </div>

        <h2 className="text-2xl font-semibold mb-2">
          Official Channels
        </h2>

        <p className="text-white/90 max-w-2xl mx-auto mb-6">
          Join our official channel for quick updates, announcements,
          and priority support from the ViewBox team.
        </p>

        <a
          href="#"
          className="inline-flex items-center gap-2
          bg-cyan-500 hover:bg-cyan-400
          text-white font-medium
          px-6 py-3 rounded-lg transition"
        >
          <Send size={18} />
          Join Telegram Channel
        </a>
      </div>
    </div>
  );
}
