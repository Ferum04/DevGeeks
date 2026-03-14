import { Link, useLocation } from "react-router";
import { Box, Search, Plus, Bell, LogOut } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export function Header() {
  const location = useLocation();
  const { user, logout } = useAuth();

  return (
    <header
      className="flex items-center justify-between px-4 py-3 border-b text-sm"
      style={{
        background: '#010409', // GitHub very dark header bg
        borderColor: '#30363D', // GitHub border color
        color: '#E6EDF3' // GitHub text color
      }}
    >
      <div className="flex items-center gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 group mr-2">
          <Link to="/" className="flex items-center gap-2">
            <Box
              size={32}
              className="transition-colors"
              style={{ color: '#E6EDF3' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#8B949E'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#E6EDF3'}
            />
            <span className="text-lg font-bold tracking-tight" style={{ color: '#E6EDF3' }}>
              DevGeeks
            </span>
          </Link>
          <span className="hidden md:block text-lg font-medium mx-3" style={{ color: '#E6EDF3', opacity: 0.5 }}>|</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-4 font-semibold">
          <Link
            to="/"
            className="transition-colors hover:text-gray-400"
            style={{ color: location.pathname === '/' ? '#FFFFFF' : '#E6EDF3' }}
          >
            Home
          </Link>
          <Link
            to="/docs"
            className="transition-colors hover:text-gray-400"
            style={{ color: location.pathname.startsWith('/docs') ? '#FFFFFF' : '#E6EDF3' }}
          >
            Documentation
          </Link>
        </nav>
      </div>

      {location.pathname !== '/' && (
        <div className="flex items-center gap-4">
          {/* Search Bar (Visual Only) */}
          <div
            className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-md border"
            style={{
              borderColor: '#30363D',
              background: '#0D1117',
              width: '280px'
            }}
          >
            <Search size={16} style={{ color: '#8B949E' }} />
            <span style={{ color: '#8B949E' }} className="flex-1 text-xs">Type <kbd className="border border-gray-700 rounded px-1 ml-1 mr-1">/</kbd> to search</span>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-3" style={{ color: '#8B949E' }}>
            <button className="hover:text-white transition-colors">
              <Plus size={20} />
            </button>
            <button className="hover:text-white transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 rounded-full" style={{ background: '#2F81F7' }}></span>
            </button>
            {/* Avatar Placeholder */}
            {/* Avatar / Logout */}
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-xs" style={{ color: '#8B949E' }}>
                  {user.email.split('@')[0]}
                </span>
                <button
                  onClick={logout}
                  className="hover:text-red-400 transition-colors"
                  title="Log out"
                >
                  <LogOut size={16} />
                </button>
                <div
                  className="w-8 h-8 rounded-full border"
                  style={{
                    background: 'linear-gradient(135deg, #A371F7, #58A6FF)',
                    borderColor: '#30363D'
                  }}
                />
              </div>
            ) : (
              <Link to="/register">
                <div
                  className="w-8 h-8 rounded-full border cursor-pointer hover:border-gray-400 transition-colors"
                  style={{
                    background: 'linear-gradient(135deg, #2EA043, #A371F7)',
                    borderColor: '#30363D'
                  }}
                />
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
