import { Link } from "react-router";
import { Box, Github, Twitter, Linkedin } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      className="border-t py-12 px-6 mt-auto text-xs"
      style={{
        background: '#0D1117', // GitHub main background
        borderColor: '#30363D',
        color: '#8B949E' // Subdued text color
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-8">

        {/* Logo and Brand */}
        <div className="flex flex-col gap-4 max-w-xs">
          <Link to="/" className="flex items-center gap-2">
            <Box size={24} style={{ color: '#8B949E' }} />
            <span className="text-lg font-semibold" style={{ color: '#E6EDF3' }}>
              DevGeeks
            </span>
          </Link>
          <p>
            {t('footer.description')}
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-white transition-colors"><Twitter size={18} /></a>
            <a href="#" className="hover:text-white transition-colors"><Github size={18} /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={18} /></a>
          </div>
        </div>

        {/* Link Columns */}
        <div className="flex flex-wrap gap-12 md:gap-24">
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold mb-1" style={{ color: '#E6EDF3' }}>{t('footer.product')}</h3>
            <Link to="/docs" className="hover:text-blue-400 hover:underline transition-all">{t('footer.features')}</Link>
            <Link to="/docs" className="hover:text-blue-400 hover:underline transition-all">{t('footer.docLink')}</Link>
            <Link to="/docs" className="hover:text-blue-400 hover:underline transition-all">{t('footer.hardware')}</Link>
            <Link to="/docs" className="hover:text-blue-400 hover:underline transition-all">{t('footer.software')}</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-semibold mb-1" style={{ color: '#E6EDF3' }}>{t('footer.platform')}</h3>
            <Link to="/docs" className="hover:text-blue-400 hover:underline transition-all">{t('footer.proxmox')}</Link>
            <Link to="/docs" className="hover:text-blue-400 hover:underline transition-all">{t('footer.docker')}</Link>
            <Link to="/docs" className="hover:text-blue-400 hover:underline transition-all">{t('footer.homeAssistant')}</Link>
            <Link to="/docs" className="hover:text-blue-400 hover:underline transition-all">{t('footer.networking')}</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-semibold mb-1" style={{ color: '#E6EDF3' }}>{t('footer.communityHeader')}</h3>
            <a href="#" className="hover:text-blue-400 hover:underline transition-all">{t('footer.discussions')}</a>
            <a href="#" className="hover:text-blue-400 hover:underline transition-all">{t('footer.blog')}</a>
            <a href="#" className="hover:text-blue-400 hover:underline transition-all">{t('footer.openSource')}</a>
            <a href="#" className="hover:text-blue-400 hover:underline transition-all">{t('footer.support')}</a>
          </div>
        </div>
      </div>

      {/* Bottom Legal Section */}
      <div
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t gap-4"
        style={{ borderColor: '#21262D' }}
      >
        <div className="flex items-center gap-4">
          <span>{t('footer.copyright')}</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-blue-400 hover:underline transition-all">{t('footer.terms')}</a>
          <a href="#" className="hover:text-blue-400 hover:underline transition-all">{t('footer.privacy')}</a>
          <a href="#" className="hover:text-blue-400 hover:underline transition-all">{t('footer.status')}</a>
          <a href="#" className="hover:text-blue-400 hover:underline transition-all">{t('footer.docs')}</a>
        </div>
      </div>
    </footer>
  );
}
