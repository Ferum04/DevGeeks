import { useNavigate } from "react-router";
import { Terminal } from "lucide-react";
import { Header } from "../components/layout/header";
import { Footer } from "../components/layout/footer";
import { useLanguage } from "../context/LanguageContext";

export function Landing() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen relative flex flex-col" style={{ background: '#0D1117' }}>
      <Header />

      {/* Cosmic Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #A371F7 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #58A6FF 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(circle, #39C5CF 0%, transparent 70%)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-70px)] py-20 px-6">
        {/* Logo Icon */}
        <div className="mb-8 relative">
          <div
            className="absolute inset-0 blur-xl opacity-50"
            style={{ background: 'linear-gradient(135deg, #A371F7, #39C5CF)' }}
          />
          <div
            className="relative p-6 rounded-2xl"
            style={{ background: '#161B22', border: '1px solid #30363D' }}
          >
            <Terminal size={48} style={{ color: '#E6EDF3' }} />
          </div>
        </div>

        {/* Heading */}
        <h1
          className="text-4xl md:text-6xl font-bold text-center mb-6 tracking-tight px-4"
          style={{ color: '#FFFFFF' }}
        >
          {t('landing.welcome')}
        </h1>

        {/* Subheading */}
        <p
          className="text-lg md:text-xl text-center mb-12 max-w-2xl px-4"
          style={{ color: '#8B949E' }}
        >
          {t('landing.subtitle')}
        </p>

        {/* CTA Button */}
        <button
          onClick={() => navigate('/docs')}
          className="group relative px-8 py-4 text-lg font-semibold transition-all duration-200 overflow-hidden"
          style={{
            background: '#E6EDF3',
            color: '#010409',
            borderRadius: '6px',
            border: 'none',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#FFFFFF';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(230, 237, 243, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#E6EDF3';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <span className="relative z-10">{t('landing.getStarted')}</span>
        </button>

        {/* Decorative Elements */}
        <div className="mt-16 flex gap-8 opacity-50">
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: '#A371F7' }}
          />
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: '#39C5CF' }}
          />
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: '#58A6FF' }}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
