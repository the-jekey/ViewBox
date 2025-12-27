import React, { useState } from 'react';
import { Home, Upload, Video, Users, DollarSign, CreditCard, LogOut, Menu, X } from 'lucide-react';

export default function VidBunkerDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'upload', icon: Upload, label: 'Upload Video' },
    { id: 'videos', icon: Video, label: 'Uploaded Videos' },
    { id: 'referrals', icon: Users, label: 'Referrals' },
    { id: 'payments', icon: DollarSign, label: 'Payments' },
    { id: 'withdrawals', icon: CreditCard, label: 'Withdrawals' },
  ];

  const stats = [
    {
      icon: '📹',
      value: '0',
      label: 'Total Videos',
      subtitle: 'Updated every 24 hours',
      gradient: 'from-indigo-600 via-purple-600 to-pink-500'
    },
    {
      icon: '👀',
      value: '0',
      label: 'Total Views',
      subtitle: 'Updated every 24 hours',
      gradient: 'from-pink-500 via-red-500 to-orange-500',
      warning: true
    },
    {
      icon: '💰',
      value: '$0.00',
      label: 'Total Earnings',
      subtitle: '(eCPM: $1.5)',
      gradient: 'from-orange-500 via-amber-500 to-yellow-500'
    }
  ];

  return (
    <div className="flex h-screen bg-gray-900 text-white overflow-hidden">
      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-gray-800 to-gray-900 border-r border-gray-700 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        {/* Logo Section */}
        <div className="p-6 border-b border-gray-700">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            VidBunker
          </h1>
          <p className="text-gray-400 text-sm mt-1">Admin Panel</p>
        </div>

        {/* Menu Items */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setIsSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${activeSection === item.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg shadow-blue-500/50'
                  : 'hover:bg-gray-700/50'
                }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Support & Logout */}
        <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2 border-t border-gray-700">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-700/50 transition-all duration-200">
            <span className="text-lg">📞</span>
            <span className="font-medium">Support</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-600/20 text-red-400 transition-all duration-200">
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 p-4 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 hover:bg-gray-700 rounded-lg transition-colors"
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <h2 className="text-2xl font-bold">Dashboard Overview</h2>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-4 md:p-6 lg:p-8 space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-90`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-4xl">
                      {stat.icon}
                    </div>
                  </div>

                  {/* Value */}
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2 drop-shadow-lg">
                      {stat.value}
                    </div>
                    <div className="text-lg font-semibold mb-1">
                      {stat.label}
                    </div>
                    <div className="flex items-center justify-center gap-1 text-sm opacity-90">
                      {stat.warning && <span className="text-yellow-300">⚠️</span>}
                      <span>{stat.subtitle}</span>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-black/10 rounded-full blur-3xl" />
              </div>
            ))}
          </div>

          {/* Additional Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            {/* Quick Actions */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                Quick Actions
              </h3>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg p-4 font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg">
                  Upload New Video
                </button>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg p-4 font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg">
                  View Analytics
                </button>
                <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 rounded-lg p-4 font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg">
                  Request Withdrawal
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">📈</span>
                Recent Activity
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-gray-700/50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                    👤
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Welcome to VidBunker!</p>
                    <p className="text-sm text-gray-400">Get started by uploading your first video</p>
                  </div>
                </div>
                <div className="text-center text-gray-400 py-8">
                  No recent activity yet
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}