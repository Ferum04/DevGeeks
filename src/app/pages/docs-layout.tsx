import { Outlet, Link, useLocation } from "react-router";
import { Home, ChevronRight, ChevronLeft, Server, HardDrive, Box, Container, Lightbulb } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { path: "/docs/introduction", label: "Introduction", icon: Home },
  { path: "/docs/hardware-selection", label: "Hardware Selection", icon: HardDrive },
  { path: "/docs/proxmox-installation", label: "Proxmox Installation", icon: Server },
  { path: "/docs/docker-basics", label: "Docker Basics", icon: Container },
  { path: "/docs/home-assistant", label: "Home Assistant", icon: Lightbulb },
];

export function DocsLayout() {
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const index = navItems.findIndex(item => item.path === location.pathname);
    if (index !== -1) {
      setCurrentIndex(index);
    } else if (location.pathname === "/docs") {
      setCurrentIndex(0);
    }
  }, [location.pathname]);

  const prevItem = currentIndex > 0 ? navItems[currentIndex - 1] : null;
  const nextItem = currentIndex < navItems.length - 1 ? navItems[currentIndex + 1] : null;

  return (
    <div className="min-h-screen flex" style={{ background: '#0D1117' }}>
      {/* Left Sidebar */}
      <aside 
        className="w-64 flex-shrink-0 border-r overflow-y-auto"
        style={{ 
          background: '#010409',
          borderColor: '#30363D'
        }}
      >
        <div className="p-6">
          <Link to="/" className="flex items-center gap-2 mb-8 group">
            <Box size={24} style={{ color: '#2EA043' }} />
            <span 
              className="text-lg font-semibold"
              style={{ color: '#FFFFFF' }}
            >
              DevGeeks
            </span>
          </Link>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path || 
                              (location.pathname === "/docs" && item.path === "/docs/introduction");
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex items-center gap-3 px-3 py-2 rounded transition-colors"
                  style={{
                    background: isActive ? '#161B22' : 'transparent',
                    color: isActive ? '#FFFFFF' : '#8B949E',
                    borderLeft: isActive ? '2px solid #A371F7' : '2px solid transparent',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = '#161B22';
                      e.currentTarget.style.color = '#FFFFFF';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = '#8B949E';
                    }
                  }}
                >
                  <Icon size={18} />
                  <span className="text-sm">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex">
        {/* Central Content */}
        <div className="flex-1 overflow-y-auto">
          <article className="max-w-4xl mx-auto px-8 py-12">
            <Outlet />

            {/* Navigation Footer */}
            <div 
              className="flex justify-between items-center mt-16 pt-8 border-t"
              style={{ borderColor: '#30363D' }}
            >
              {prevItem ? (
                <Link
                  to={prevItem.path}
                  className="flex items-center gap-2 px-4 py-2 rounded transition-colors"
                  style={{
                    background: '#161B22',
                    color: '#8B949E',
                    border: '1px solid #30363D'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#21262D';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.borderColor = '#A371F7';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#161B22';
                    e.currentTarget.style.color = '#8B949E';
                    e.currentTarget.style.borderColor = '#30363D';
                  }}
                >
                  <ChevronLeft size={18} />
                  <span className="text-sm">{prevItem.label}</span>
                </Link>
              ) : (
                <div />
              )}

              {nextItem ? (
                <Link
                  to={nextItem.path}
                  className="flex items-center gap-2 px-4 py-2 rounded transition-colors"
                  style={{
                    background: '#161B22',
                    color: '#8B949E',
                    border: '1px solid #30363D'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#21262D';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.borderColor = '#A371F7';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#161B22';
                    e.currentTarget.style.color = '#8B949E';
                    e.currentTarget.style.borderColor = '#30363D';
                  }}
                >
                  <span className="text-sm">{nextItem.label}</span>
                  <ChevronRight size={18} />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </article>
        </div>

        {/* Right Sidebar - Table of Contents */}
        <aside 
          className="w-64 flex-shrink-0 border-l overflow-y-auto hidden xl:block"
          style={{ 
            background: '#0D1117',
            borderColor: '#30363D'
          }}
        >
          <div className="p-6 sticky top-0">
            <h3 
              className="text-sm font-semibold mb-4"
              style={{ color: '#8B949E' }}
            >
              ON THIS PAGE
            </h3>
            <div className="space-y-2">
              <a 
                href="#overview"
                className="block text-sm py-1 transition-colors"
                style={{ color: '#8B949E' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#8B949E'}
              >
                Overview
              </a>
              <a 
                href="#getting-started"
                className="block text-sm py-1 transition-colors"
                style={{ color: '#8B949E' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#8B949E'}
              >
                Getting Started
              </a>
              <a 
                href="#key-concepts"
                className="block text-sm py-1 transition-colors"
                style={{ color: '#8B949E' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#8B949E'}
              >
                Key Concepts
              </a>
            </div>

            {nextItem && (
              <div 
                className="mt-8 p-4 rounded"
                style={{ 
                  background: '#161B22',
                  border: '1px solid #30363D'
                }}
              >
                <p 
                  className="text-xs font-semibold mb-2"
                  style={{ color: '#8B949E' }}
                >
                  NEXT LESSON
                </p>
                <Link
                  to={nextItem.path}
                  className="text-sm font-medium transition-colors"
                  style={{ color: '#A371F7' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#C99EFF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#A371F7'}
                >
                  {nextItem.label} →
                </Link>
              </div>
            )}
          </div>
        </aside>
      </main>
    </div>
  );
}
