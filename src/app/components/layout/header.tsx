import { Link, useLocation } from "react-router";
import { Box, Search, Plus, Bell, LogOut } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { ThemeToggle } from "../ui/theme-toggle";
import { LanguageSwitcher } from "../ui/language-switcher";
import { useTranslation } from "react-i18next";

export function Header() {
  const location = useLocation();
  const { user, logout } = useAuth();
  const { t } = useTranslation();

  return (
    <header
      className="flex items-center justify-between px-4 py-3 border-b text-sm bg-background border-border text-foreground"
    >
      <div className="flex items-center gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 group mr-2">
          <Link to="/" className="flex items-center gap-2">
            <Box
              size={32}
              className="transition-colors text-foreground hover:text-muted-foreground"
            />
            <span className="text-lg font-bold tracking-tight text-foreground">
              DevGeeks
            </span>
          </Link>
          <span className="hidden md:block text-lg font-medium mx-3 text-muted-foreground">|</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-4 font-semibold">
          <Link
            to="/"
            className={`transition-colors hover:text-muted-foreground ${location.pathname === '/' ? 'text-foreground' : 'text-muted-foreground'}`}
          >
            {t('header.home')}
          </Link>
          <Link
            to="/docs"
            className={`transition-colors hover:text-muted-foreground ${location.pathname.startsWith('/docs') ? 'text-foreground' : 'text-muted-foreground'}`}
          >
            {t('header.docs')}
          </Link>
        </nav>
      </div>

      {location.pathname !== '/' && (
        <div className="flex items-center gap-4">
          {/* Search Bar (Visual Only) */}
          <div
            className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-md border border-border bg-muted/50 w-[280px]"
          >
            <Search size={16} className="text-muted-foreground" />
            <span className="flex-1 text-xs text-muted-foreground">{t('header.searchPlaceholder')}</span>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-3 text-muted-foreground">
            <LanguageSwitcher />
            <ThemeToggle />
            <button className="hover:text-foreground transition-colors">
              <Plus size={20} />
            </button>
            <button className="hover:text-foreground transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-blue-500"></span>
            </button>
            {/* Avatar Placeholder */}
            {/* Avatar / Logout */}
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-xs text-muted-foreground">
                  {user.email.split('@')[0]}
                </span>
                <button
                  onClick={logout}
                  className="hover:text-destructive transition-colors"
                  title="Log out"
                >
                  <LogOut size={16} />
                </button>
                <div
                  className="w-8 h-8 rounded-full border border-border"
                  style={{
                    background: 'linear-gradient(135deg, #A371F7, #58A6FF)',
                  }}
                />
              </div>
            ) : (
              <Link to="/register">
                <div
                  className="w-8 h-8 rounded-full border border-border cursor-pointer hover:border-muted-foreground transition-colors"
                  style={{
                    background: 'linear-gradient(135deg, #2EA043, #A371F7)',
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
