import { useNavigate } from "react-router";
import { Terminal, Sparkles } from "lucide-react";

export function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: '#0D1117' }}>
      {/* Cosmic Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
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
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
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
            <Terminal size={48} style={{ color: '#2EA043' }} />
            <Sparkles 
              size={20} 
              className="absolute -top-1 -right-1"
              style={{ color: '#A371F7' }}
            />
          </div>
        </div>

        {/* Heading */}
        <h1 
          className="text-6xl font-bold text-center mb-6 tracking-tight"
          style={{ color: '#FFFFFF' }}
        >
          Welcome to DevGeeks
        </h1>

        {/* Subheading */}
        <p 
          className="text-xl text-center mb-12 max-w-2xl"
          style={{ color: '#8B949E' }}
        >
          Here you can learn how to organize your own homelab
        </p>

        {/* CTA Button */}
        <button
          onClick={() => navigate('/docs')}
          className="group relative px-8 py-4 text-lg font-semibold transition-all duration-200 overflow-hidden"
          style={{ 
            background: '#238636',
            color: '#FFFFFF',
            borderRadius: '6px',
            border: 'none',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#2EA043';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(46, 160, 67, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#238636';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <span className="relative z-10">Get Started</span>
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
    </div>
  );
}
