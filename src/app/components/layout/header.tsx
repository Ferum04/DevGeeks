import { Link, useLocation, useNavigate } from "react-router";
import { useState, useRef, useEffect } from "react";
import { Box, Search, LogOut, Globe, FileText } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useLanguage } from "../../context/LanguageContext";

const RAW_SEARCH_OPTIONS = [
  { path: "/docs/introduction", labelKey: "docs.nav.introduction" },
  { path: "/docs/introduction#getting-started", labelKey: "docs.layout.gettingStarted" },
  { path: "/docs/introduction#key-concepts", labelKey: "docs.layout.keyConcepts" },
  { path: "/docs/hardware-selection", labelKey: "docs.nav.hardwareSelection" },
  { path: "/docs/hardware-selection#min-req", labelKey: "docs.hardware.minReq" },
  { path: "/docs/hardware-selection#budget-options", labelKey: "docs.hardware.budgetOptions" },
  { path: "/docs/hardware-selection#performance-comparison", labelKey: "docs.hardware.compare" },
  { path: "/docs/proxmox-installation", labelKey: "docs.nav.proxmoxInstallation" },
  { path: "/docs/proxmox-installation#step1", labelKey: "docs.proxmox.step1" },
  { path: "/docs/proxmox-installation#step2", labelKey: "docs.proxmox.step2" },
  { path: "/docs/proxmox-installation#step3", labelKey: "docs.proxmox.step3" },
  { path: "/docs/proxmox-installation#step4", labelKey: "docs.proxmox.step4" },
  { path: "/docs/musi-server", labelKey: "docs.nav.musicServer" },
  { path: "/docs/musi-server#phase-1", labelKey: "docs.musi.phase1" },
  { path: "/docs/musi-server#phase-2", labelKey: "docs.musi.phase2" },
  { path: "/docs/musi-server#phase-3", labelKey: "docs.musi.phase3" },
  { path: "/docs/musi-server#phase-4", labelKey: "docs.musi.phase4" },
  { path: "/docs/musi-server#phase-5", labelKey: "docs.musi.phase5" },
  { path: "/docs/musi-server#phase-6", labelKey: "docs.musi.phase6" },
  { path: "/docs/musi-server#phase-7", labelKey: "docs.musi.phase7" },
];

const HighlightMatch = ({ text, highlight }: { text: string; highlight: string }) => {
  if (!highlight.trim()) return <span>{text}</span>;
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  return (
    <span>
      {parts.map((part, i) =>
        part.toLowerCase() === highlight.toLowerCase() ?
          <span key={i} className="bg-[#F85149]/30 text-[#FF7B72] rounded px-0.5">{part}</span> : <span key={i}>{part}</span>
      )}
    </span>
  );
};

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { language, setLanguage, t } = useLanguage();

  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef<HTMLFormElement>(null);

  const filteredSearchOptions = RAW_SEARCH_OPTIONS
    .map(opt => ({ ...opt, label: t(opt.labelKey) }))
    .filter(opt => opt.label.toLowerCase().includes(searchTerm.toLowerCase()));

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim() && filteredSearchOptions.length > 0) {
      navigate(filteredSearchOptions[0].path);
      setSearchTerm('');
      setIsSearchFocused(false);
    }
  };

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
              {t("header.title")}
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
            {t("header.documentation")}
          </Link>
        </nav>
      </div>

      {location.pathname !== '/' && (
        <>
          {/* Centered Search Bar */}
          <div className="flex-1 flex justify-center px-4 relative z-50">
            <form
              ref={searchRef}
              onSubmit={handleSearch}
              className="hidden md:flex relative items-center gap-2 px-3 py-1.5 rounded-md border w-full max-w-md transition-colors focus-within:border-[#58A6FF]"
              style={{
                borderColor: '#30363D',
                background: '#0D1117',
              }}
            >
              <Search size={16} style={{ color: '#8B949E' }} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                placeholder={t("header.documentation") + "..."}
                className="flex-1 text-sm bg-transparent border-none outline-none focus:ring-0 text-[#E6EDF3] placeholder-[#8B949E]"
              />
              <kbd className="hidden lg:block border border-gray-700 rounded px-1.5 text-xs text-[#8B949E]">/</kbd>

              {/* Autocomplete Dropdown */}
              {isSearchFocused && searchTerm.trim() !== '' && (
                <div
                  className="absolute top-full left-0 right-0 mt-2 py-2 rounded-md shadow-lg border overflow-hidden max-h-80 overflow-y-auto"
                  style={{ background: '#161B22', borderColor: '#30363D' }}
                >
                  {filteredSearchOptions.length > 0 ? (
                    filteredSearchOptions.map((opt) => (
                      <button
                        key={opt.path}
                        type="button"
                        onClick={() => {
                          setSearchTerm('');
                          setIsSearchFocused(false);
                          navigate(opt.path);
                        }}
                        className="w-full flex items-center gap-3 text-left px-4 py-2 hover:bg-[#21262D] transition-colors group"
                      >
                        <FileText size={16} className="text-[#8B949E] group-hover:text-[#58A6FF] transition-colors" />
                        <span className="text-sm text-[#E6EDF3] font-medium tracking-wide">
                          <HighlightMatch text={opt.label} highlight={searchTerm} />
                        </span>
                      </button>
                    ))
                  ) : (
                    <div className="px-4 py-3 text-sm text-[#8B949E] text-center italic">No guides found for "{searchTerm}"</div>
                  )}
                </div>
              )}
            </form>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-3 ml-auto" style={{ color: '#8B949E' }}>
            {/* Language Switcher Dropdown */}
            <div className="relative" ref={langMenuRef}>
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-1 hover:text-white transition-colors"
                title="Select language"
              >
                <Globe size={20} />
                <span className="text-xs uppercase font-bold">{language}</span>
              </button>

              {isLangMenuOpen && (
                <div
                  className="absolute top-full right-0 mt-3 py-2 w-max min-w-[160px] rounded-md shadow-lg border z-50 text-sm whitespace-nowrap"
                  style={{
                    background: '#161B22',
                    borderColor: '#30363D'
                  }}
                >
                  <button
                    onClick={() => { setLanguage('en'); setIsLangMenuOpen(false); }}
                    className="w-full text-left px-4 py-2 transition-colors flex items-center justify-between gap-2"
                    style={{
                      color: language === 'en' ? '#FFFFFF' : '#8B949E',
                      background: language === 'en' ? 'rgba(56, 139, 253, 0.1)' : 'transparent',
                      borderLeft: language === 'en' ? '2px solid #58A6FF' : '2px solid transparent'
                    }}
                    onMouseEnter={(e) => {
                      if (language !== 'en') {
                        e.currentTarget.style.background = '#21262D';
                        e.currentTarget.style.color = '#FFFFFF';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (language !== 'en') {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = '#8B949E';
                      }
                    }}
                  >
                    <span>English</span>
                    <span className="text-xs opacity-70">(EN)</span>
                  </button>
                  <button
                    onClick={() => { setLanguage('uk'); setIsLangMenuOpen(false); }}
                    className="w-full text-left px-4 py-2 transition-colors flex items-center justify-between gap-2"
                    style={{
                      color: language === 'uk' ? '#FFFFFF' : '#8B949E',
                      background: language === 'uk' ? 'rgba(56, 139, 253, 0.1)' : 'transparent',
                      borderLeft: language === 'uk' ? '2px solid #58A6FF' : '2px solid transparent'
                    }}
                    onMouseEnter={(e) => {
                      if (language !== 'uk') {
                        e.currentTarget.style.background = '#21262D';
                        e.currentTarget.style.color = '#FFFFFF';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (language !== 'uk') {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = '#8B949E';
                      }
                    }}
                  >
                    <span>Українська</span>
                    <span className="text-xs opacity-70">(UK)</span>
                  </button>
                </div>
              )}
            </div>

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
        </>
      )}
    </header>
  );
}
