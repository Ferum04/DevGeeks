import { Cpu, Zap, Info, Server, Layers } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function HardwareSelection() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1
          className="text-4xl font-bold mb-4 tracking-tight"
          style={{ color: '#E6EDF3' }}
        >
          {t('docs.hardware.title')}
        </h1>
        <p
          className="text-xl"
          style={{ color: '#8B949E' }}
        >
          {t('docs.hardware.subtitle')}
        </p>
      </div>

      <div className="prose prose-invert max-w-none">
        {/* Spectrum Section */}
        <section id="spectrum" className="mb-12 mt-8">
          <p className="mb-6 text-base" style={{ color: '#C9D1D9' }}>
            {t('docs.hardware.intro')}
          </p>

          <div className="grid gap-6">
            <div className="p-5 rounded-lg border" style={{ background: '#161B22', borderColor: '#30363D' }}>
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2" style={{ color: '#58A6FF' }}>
                <Layers size={22} style={{ color: '#58A6FF' }} />
                {t('docs.hardware.sbcs')}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#8B949E' }}>
                {t('docs.hardware.sbcsDesc')}
              </p>
            </div>

            <div className="p-5 rounded-lg border" style={{ background: '#161B22', borderColor: '#30363D' }}>
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2" style={{ color: '#39C5CF' }}>
                <Cpu size={22} style={{ color: '#39C5CF' }} />
                {t('docs.hardware.usff')}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#8B949E' }}>
                {t('docs.hardware.usffDesc')}
              </p>
            </div>

            <div className="p-5 rounded-lg border" style={{ background: '#161B22', borderColor: '#30363D' }}>
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2" style={{ color: '#A371F7' }}>
                <Server size={22} style={{ color: '#A371F7' }} />
                {t('docs.hardware.fullDesk')}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#8B949E' }}>
                {t('docs.hardware.fullDeskDesc')}
              </p>
            </div>
          </div>
        </section>

        <hr style={{ borderColor: '#30363D' }} className="my-10" />

        {/* My Setup Section */}
        <section id="my-setup" className="mb-12">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#E6EDF3' }}>
            {t('docs.hardware.mySetup')}
          </h2>
          <p className="mb-6 text-base" style={{ color: '#C9D1D9' }}>
            {t('docs.hardware.mySetupIntro')}
          </p>

          <h3 className="text-lg font-semibold mb-3" style={{ color: '#E6EDF3' }}>{t('docs.hardware.specs')}</h3>
          <div className="p-6 rounded-lg border mb-8" style={{ background: '#0D1117', borderColor: '#30363D' }}>
            <ul className="space-y-3" style={{ color: '#C9D1D9' }}>
              <li className="flex items-center gap-3">
                <span style={{ color: '#2EA043' }}>•</span>
                <span>{t('docs.hardware.specCpu')}</span>
              </li>
              <li className="flex items-center gap-3">
                <span style={{ color: '#2EA043' }}>•</span>
                <span>{t('docs.hardware.specTdp')}</span>
              </li>
              <li className="flex items-center gap-3">
                <span style={{ color: '#2EA043' }}>•</span>
                <span>{t('docs.hardware.specRam')}</span>
              </li>
              <li className="flex items-center gap-3">
                <span style={{ color: '#2EA043' }}>•</span>
                <span>{t('docs.hardware.specForm')}</span>
              </li>
            </ul>
          </div>

          <h3 className="text-lg font-semibold mb-3" style={{ color: '#E6EDF3' }}>{t('docs.hardware.why')}</h3>
          <div className="space-y-4 text-base leading-relaxed" style={{ color: '#C9D1D9' }}>
            <p>{t('docs.hardware.whyDesc1')}</p>
            <p>{t('docs.hardware.whyDesc2')}</p>
          </div>
        </section>

        <hr style={{ borderColor: '#30363D' }} className="my-10" />

        {/* What Should You Choose Section */}
        <section id="what-to-choose" className="mb-12">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#E6EDF3' }}>
            {t('docs.hardware.what')}
          </h2>
          <p className="mb-6 text-base" style={{ color: '#C9D1D9' }}>
            {t('docs.hardware.whatIntro')}
          </p>

          <ul className="space-y-4 mb-8" style={{ color: '#C9D1D9' }}>
            <li className="flex items-start gap-3">
              <Zap className="mt-1" size={18} style={{ color: '#F0883E', flexShrink: 0 }} />
              <span>{t('docs.hardware.whatElec')}</span>
            </li>
            <li className="flex items-start gap-3">
              <Cpu className="mt-1" size={18} style={{ color: '#58A6FF', flexShrink: 0 }} />
              <span>{t('docs.hardware.whatMedia')}</span>
            </li>
            <li className="flex items-start gap-3">
              <Server className="mt-1" size={18} style={{ color: '#A371F7', flexShrink: 0 }} />
              <span>{t('docs.hardware.whatIt')}</span>
            </li>
          </ul>

          <div className="bg-yellow-900/40 border border-yellow-700/50 rounded-lg p-5">
            <div className="flex gap-3">
              <Info size={20} className="text-yellow-400 mt-0.5 flex-shrink-0" />
              <p className="text-sm font-medium text-yellow-200 leading-relaxed">
                {t('docs.hardware.golden')}
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
