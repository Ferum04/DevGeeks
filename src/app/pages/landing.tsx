import { useNavigate } from "react-router";
import { Terminal } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Header } from "../components/layout/header";
import { Footer } from "../components/layout/footer";

export function Landing() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen relative flex flex-col bg-background text-foreground">
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
            style={{ background: 'linear-gradient(135deg, var(--color-accent), var(--color-primary))' }}
          />
          <div
            className="relative p-6 rounded-2xl bg-card border border-border"
          >
            <Terminal size={48} className="text-primary" />
          </div>
        </div>

        {/* Heading */}
        <h1
          className="text-6xl font-bold text-center mb-6 tracking-tight text-foreground"
        >
          {t('landing.title')}
        </h1>

        {/* Subheading */}
        <p
          className="text-xl text-center mb-12 max-w-2xl text-muted-foreground"
        >
          {t('landing.subtitle')}
        </p>

        {/* CTA Button */}
        <button
          onClick={() => navigate('/docs')}
          className="group relative px-8 py-4 text-lg font-semibold transition-all duration-200 overflow-hidden bg-primary text-primary-foreground rounded-md hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(46,160,67,0.4)]"
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
            style={{ background: '#2EA043' }}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
