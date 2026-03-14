import { Outlet, Link, useLocation } from "react-router";
import { Home, ChevronRight, ChevronLeft, Server, HardDrive, Box, Music, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Header } from "../components/layout/header";
import { Footer } from "../components/layout/footer";
import { useLanguage } from "../context/LanguageContext";

const navItems = [
  {
    path: "/docs/introduction",
    labelKey: "docs.nav.introduction",
    icon: Home,
    subItems: [
      { labelKey: "docs.layout.gettingStarted", href: "#getting-started" },
      { labelKey: "docs.layout.keyConcepts", href: "#key-concepts" },
    ]
  },
  {
    path: "/docs/hardware-selection",
    labelKey: "docs.nav.hardwareSelection",
    icon: HardDrive,
    subItems: [
      { labelKey: "docs.hardware.minReq", href: "#min-req" },
      { labelKey: "docs.hardware.budgetOptions", href: "#budget-options" },
      { labelKey: "docs.hardware.compare", href: "#performance-comparison" },
    ]
  },
  {
    path: "/docs/proxmox-installation",
    labelKey: "docs.nav.proxmoxInstallation",
    icon: Server,
    subItems: [
      { labelKey: "docs.proxmox.step1", href: "#step1" },
      { labelKey: "docs.proxmox.step2", href: "#step2" },
      { labelKey: "docs.proxmox.step3", href: "#step3" },
      { labelKey: "docs.proxmox.step4", href: "#step4" },
    ]
  },
  {
    path: "/docs/musi-server",
    labelKey: "docs.nav.musicServer",
    icon: Music,
    subItems: [
      { labelKey: "docs.musi.phase1", href: "#phase-1" },
      { labelKey: "docs.musi.phase2", href: "#phase-2" },
      { labelKey: "docs.musi.phase3", href: "#phase-3" },
      { labelKey: "docs.musi.phase4", href: "#phase-4" },
      { labelKey: "docs.musi.phase5", href: "#phase-5" },
      { labelKey: "docs.musi.phase6", href: "#phase-6" },
      { labelKey: "docs.musi.phase7", href: "#phase-7" },
    ]
  },
];

export function DocsLayout() {
  const location = useLocation();
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const index = navItems.findIndex(item => item.path === location.pathname);
    if (index !== -1) {
      setCurrentIndex(index);
    } else if (location.pathname === "/docs") {
      setCurrentIndex(0);
    }
    // Close mobile menu on route change
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const prevItem = currentIndex > 0 ? navItems[currentIndex - 1] : null;
  const nextItem = currentIndex < navItems.length - 1 ? navItems[currentIndex + 1] : null;

  return (
    <div className="flex flex-col h-screen overflow-hidden" style={{ background: '#0D1117' }}>
      <Header />

      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center px-4 py-3 border-b border-[#30363D]" style={{ background: '#010409' }}>
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="flex items-center gap-2"
          style={{ color: '#E6EDF3' }}
        >
          <Menu size={24} />
          <span className="font-semibold text-sm">{t("header.documentation")}</span>
        </button>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Mobile Backdrop */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Left Sidebar */}
        <aside
          className={`w-64 flex-shrink-0 border-r overflow-y-auto z-50 ${isMobileMenuOpen ? 'fixed inset-y-0 left-0 h-full shadow-2xl' : 'hidden md:block relative'}`}
          style={{
            background: '#010409',
            borderColor: '#30363D'
          }}
        >
          <div className="p-6">
            {/* Mobile Sidebar Header */}
            <div className="flex items-center justify-between mb-6 md:hidden">
              <span className="font-bold text-lg" style={{ color: '#E6EDF3' }}>{t("header.documentation")}</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 rounded hover:bg-[#161B22] transition-colors"
                style={{ color: '#8B949E' }}
              >
                <X size={20} />
              </button>
            </div>

            <nav className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path ||
                  (location.pathname === "/docs" && item.path === "/docs/introduction");

                return (
                  <div key={item.path}>
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
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
                      <span className="text-sm">{t(item.labelKey)}</span>
                    </Link>

                    {/* Sub-items (collapsible) */}
                    {isActive && item.subItems && (
                      <div className="pl-9 pr-3 py-1 space-y-1 mt-1 transition-all">
                        {item.subItems.map(subItem => (
                          <a
                            href={subItem.href}
                            key={subItem.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-2 text-sm py-1 transition-colors group"
                            style={{ color: '#8B949E' }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                            onMouseLeave={(e) => e.currentTarget.style.color = '#8B949E'}
                          >
                            <span className="w-1 h-1 rounded-full bg-current opacity-50 group-hover:opacity-100 transition-opacity" />
                            {t(subItem.labelKey)}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
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
                    <span className="text-sm">{t(prevItem.labelKey)}</span>
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
                    <span className="text-sm">{t(nextItem.labelKey)}</span>
                    <ChevronRight size={18} />
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </article>
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}
