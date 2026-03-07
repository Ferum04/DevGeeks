import { Outlet, Link, useLocation } from "react-router";
import { Home, ChevronRight, ChevronLeft, Server, HardDrive, Box, Music } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Header } from "../components/layout/header";
import { Footer } from "../components/layout/footer";
const navItems = [
  { path: "/docs/introduction", label: "Introduction", icon: Home },
  { path: "/docs/hardware-selection", label: "Hardware Selection", icon: HardDrive },
  { path: "/docs/proxmox-installation", label: "Proxmox Installation", icon: Server },
  { path: "/docs/musi-server", label: "Music Server", icon: Music },
];

export function DocsLayout() {
  const location = useLocation();
  const { t } = useTranslation();
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
    <div className="flex flex-col h-screen overflow-hidden bg-background">
      <Header />
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar */}
        <aside
          className="hidden md:block w-64 flex-shrink-0 border-r border-border overflow-y-auto bg-muted/30 text-foreground"
        >
          <div className="p-6">
            <nav className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path ||
                  (location.pathname === "/docs" && item.path === "/docs/introduction");

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-3 px-3 py-2 rounded transition-colors border-l-2 ${isActive
                      ? 'bg-card text-foreground border-primary'
                      : 'bg-transparent text-muted-foreground border-transparent hover:bg-card hover:text-foreground'
                      }`}
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
                className="flex flex-col sm:flex-row gap-4 justify-between items-center mt-16 pt-8 border-t border-border"
              >
                {prevItem ? (
                  <Link
                    to={prevItem.path}
                    className="flex w-full sm:w-auto items-center justify-center sm:justify-start gap-2 px-4 py-2 rounded transition-colors border border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground hover:border-primary"
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
                    className="flex w-full sm:w-auto items-center justify-center sm:justify-end gap-2 px-4 py-2 rounded transition-colors border border-border bg-card text-muted-foreground hover:bg-muted hover:text-foreground hover:border-primary"
                  >
                    <span className="text-sm">{nextItem.label}</span>
                    <ChevronRight size={18} />
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </article>
            <Footer />
          </div>

          {/* Right Sidebar - Table of Contents */}
          <aside
            className="w-64 flex-shrink-0 border-l border-border overflow-y-auto hidden xl:block bg-background text-foreground"
          >
            <div className="p-6 sticky top-0">
              <h3
                className="text-sm font-semibold mb-4 text-muted-foreground"
              >
                {t('docs.onThisPage')}
              </h3>
              <div className="space-y-2">
                <a
                  href="#overview"
                  className="block text-sm py-1 transition-colors text-muted-foreground hover:text-foreground"
                >
                  {t('docs.overview')}
                </a>
                <a
                  href="#getting-started"
                  className="block text-sm py-1 transition-colors text-muted-foreground hover:text-foreground"
                >
                  {t('docs.gettingStarted')}
                </a>
                <a
                  href="#key-concepts"
                  className="block text-sm py-1 transition-colors text-muted-foreground hover:text-foreground"
                >
                  {t('docs.keyConcepts')}
                </a>
              </div>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}
