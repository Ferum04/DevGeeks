import { Cpu, DollarSign, Zap } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function HardwareSelection() {
  const { t } = useLanguage();

  return (
    <div>
      <div className="mb-8">
        <h1
          className="text-4xl font-bold mb-4 pb-4 border-b"
          style={{ color: '#FFFFFF', borderColor: '#30363D' }}
        >
          {t('docs.hardware.title')}
        </h1>
        <p
          className="text-lg"
          style={{ color: '#8B949E' }}
        >
          {t('docs.hardware.subtitle')}
        </p>
      </div>

      <section className="mb-8">
        <h2 id="min-req"
          className="text-2xl font-bold mb-4 pb-2 border-b"
          style={{ color: '#FFFFFF', borderColor: '#30363D' }}
        >
          {t('docs.hardware.minReq')}
        </h2>
        <div
          className="p-4 rounded border mb-4"
          style={{
            background: '#161B22',
            borderColor: '#30363D'
          }}
        >
          <ul className="space-y-2" style={{ color: '#8B949E' }}>
            <li className="flex items-start gap-2">
              <span style={{ color: '#2EA043' }}>•</span>
              <span>{t('docs.hardware.cpu')}</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#2EA043' }}>•</span>
              <span>{t('docs.hardware.ram')}</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#2EA043' }}>•</span>
              <span>{t('docs.hardware.storage')}</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#2EA043' }}>•</span>
              <span>{t('docs.hardware.network')}</span>
            </li>
          </ul>
        </div>
      </section>

      <div
        className="p-4 rounded mb-6 border-l-4"
        style={{
          background: '#161B22',
          borderColor: '#A371F7'
        }}
      >
        <div className="flex gap-3">
          <Zap size={20} style={{ color: '#A371F7', flexShrink: 0 }} />
          <div>
            <p className="font-semibold mb-1" style={{ color: '#A371F7' }}>
              {t('docs.introduction.proTipTitle')}
            </p>
            <p className="text-sm" style={{ color: '#8B949E' }}>
              {t('docs.hardware.proTipText')}
            </p>
          </div>
        </div>
      </div>

      <section className="mb-8">
        <h2 id="budget-options"
          className="text-2xl font-bold mb-4 pb-2 border-b"
          style={{ color: '#FFFFFF', borderColor: '#30363D' }}
        >
          {t('docs.hardware.budgetOptions')}
        </h2>
        <div className="grid gap-4">
          <div
            className="p-5 rounded border"
            style={{
              background: '#161B22',
              borderColor: '#30363D'
            }}
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold" style={{ color: '#FFFFFF' }}>
                <Cpu className="inline mr-2" size={20} style={{ color: '#39C5CF' }} />
                {t('docs.hardware.rpi')}
              </h3>
              <span
                className="px-3 py-1 rounded text-sm font-semibold"
                style={{ background: '#238636', color: '#FFFFFF' }}
              >
                $75-120
              </span>
            </div>
            <p className="text-sm mb-3" style={{ color: '#8B949E' }}>
              {t('docs.hardware.rpiDesc')}
            </p>
            <div className="flex gap-2">
              <span
                className="px-2 py-1 rounded text-xs"
                style={{ background: '#0D1117', color: '#8B949E', border: '1px solid #30363D' }}
              >
                ARM64
              </span>
              <span
                className="px-2 py-1 rounded text-xs"
                style={{ background: '#0D1117', color: '#8B949E', border: '1px solid #30363D' }}
              >
                4-8GB RAM
              </span>
            </div>
          </div>

          <div
            className="p-5 rounded border"
            style={{
              background: '#161B22',
              borderColor: '#30363D'
            }}
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold" style={{ color: '#FFFFFF' }}>
                <Cpu className="inline mr-2" size={20} style={{ color: '#A371F7' }} />
                {t('docs.hardware.nuc')}
              </h3>
              <span
                className="px-3 py-1 rounded text-sm font-semibold"
                style={{ background: '#238636', color: '#FFFFFF' }}
              >
                $300-500
              </span>
            </div>
            <p className="text-sm mb-3" style={{ color: '#8B949E' }}>
              {t('docs.hardware.nucDesc')}
            </p>
            <div className="flex gap-2">
              <span
                className="px-2 py-1 rounded text-xs"
                style={{ background: '#0D1117', color: '#8B949E', border: '1px solid #30363D' }}
              >
                x86_64
              </span>
              <span
                className="px-2 py-1 rounded text-xs"
                style={{ background: '#0D1117', color: '#8B949E', border: '1px solid #30363D' }}
              >
                16-32GB RAM
              </span>
            </div>
          </div>

          <div
            className="p-5 rounded border"
            style={{
              background: '#161B22',
              borderColor: '#30363D'
            }}
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold" style={{ color: '#FFFFFF' }}>
                <Cpu className="inline mr-2" size={20} style={{ color: '#2EA043' }} />
                {t('docs.hardware.workstation')}
              </h3>
              <span
                className="px-3 py-1 rounded text-sm font-semibold"
                style={{ background: '#238636', color: '#FFFFFF' }}
              >
                $200-400
              </span>
            </div>
            <p className="text-sm mb-3" style={{ color: '#8B949E' }}>
              {t('docs.hardware.workstationDesc')}
            </p>
            <div className="flex gap-2">
              <span
                className="px-2 py-1 rounded text-xs"
                style={{ background: '#0D1117', color: '#8B949E', border: '1px solid #30363D' }}
              >
                x86_64
              </span>
              <span
                className="px-2 py-1 rounded text-xs"
                style={{ background: '#0D1117', color: '#8B949E', border: '1px solid #30363D' }}
              >
                32-64GB RAM
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 id="performance-comparison"
          className="text-2xl font-bold mb-4 pb-2 border-b"
          style={{ color: '#FFFFFF', borderColor: '#30363D' }}
        >
          {t('docs.hardware.compare')}
        </h2>
        <pre
          className="p-4 rounded overflow-x-auto"
          style={{ background: '#000000' }}
        >
          <code style={{ color: '#C9D1D9', fontFamily: 'var(--font-family-mono)', fontSize: '14px' }}>
            <span style={{ color: '#8B949E' }}>Device           CPU Cores    RAM      Power Usage</span>{'\n'}
            <span style={{ color: '#8B949E' }}>───────────────────────────────────────────────────</span>{'\n'}
            <span style={{ color: '#79C0FF' }}>Raspberry Pi 4</span>   <span style={{ color: '#A5D6FF' }}>4</span>           <span style={{ color: '#A5D6FF' }}>8GB</span>     <span style={{ color: '#2EA043' }}>15W</span>{'\n'}
            <span style={{ color: '#79C0FF' }}>Intel NUC</span>        <span style={{ color: '#A5D6FF' }}>8</span>           <span style={{ color: '#A5D6FF' }}>32GB</span>    <span style={{ color: '#F0883E' }}>45W</span>{'\n'}
            <span style={{ color: '#79C0FF' }}>Used Server</span>      <span style={{ color: '#A5D6FF' }}>16</span>          <span style={{ color: '#A5D6FF' }}>64GB</span>    <span style={{ color: '#FF7B72' }}>150W</span>
          </code>
        </pre>
      </section>
    </div>
  );
}
