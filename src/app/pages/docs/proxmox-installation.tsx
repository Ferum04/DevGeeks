import { Server, Download, AlertCircle } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function ProxmoxInstallation() {
  const { t } = useLanguage();

  return (
    <div>
      <div className="mb-8">
        <h1
          className="text-4xl font-bold mb-4 pb-4 border-b"
          style={{ color: '#FFFFFF', borderColor: '#30363D' }}
        >
          {t('docs.proxmox.title')}
        </h1>
        <p
          className="text-lg"
          style={{ color: '#8B949E' }}
        >
          {t('docs.proxmox.subtitle')}
        </p>
      </div>

      <div
        className="p-4 rounded mb-6 border-l-4"
        style={{
          background: '#161B22',
          borderColor: '#58A6FF'
        }}
      >
        <div className="flex gap-3">
          <AlertCircle size={20} style={{ color: '#58A6FF', flexShrink: 0 }} />
          <div>
            <p className="font-semibold mb-1" style={{ color: '#58A6FF' }}>
              {t('docs.introduction.noteTitle')}
            </p>
            <p className="text-sm" style={{ color: '#8B949E' }}>
              {t('docs.proxmox.noteText')}
            </p>
          </div>
        </div>
      </div>

      <section className="mb-8">
        <h2 id="step1"
          className="text-2xl font-bold mb-4 pb-2 border-b"
          style={{ color: '#FFFFFF', borderColor: '#30363D' }}
        >
          {t('docs.proxmox.step1')}
        </h2>
        <p className="mb-4" style={{ color: '#8B949E' }}>
          {t('docs.proxmox.step1Text')}
        </p>
        <div
          className="p-4 rounded border mb-4 flex items-center justify-between"
          style={{
            background: '#161B22',
            borderColor: '#30363D'
          }}
        >
          <div>
            <p className="font-semibold mb-1" style={{ color: '#FFFFFF' }}>
              Proxmox VE 8.1 ISO Installer
            </p>
            <p className="text-sm" style={{ color: '#8B949E' }}>
              Size: 1.2 GB | SHA256: verified
            </p>
          </div>
          <a
            href="https://www.proxmox.com/en/products/proxmox-virtual-environment/get-started"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded transition-colors no-underline"
            style={{
              background: '#238636',
              color: '#FFFFFF',
              border: 'none',
              display: 'inline-flex'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#2EA043'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#238636'}
          >
            <Download size={16} />
            <span className="text-sm">{t('docs.proxmox.download')}</span>
          </a>
        </div>
      </section>

      <section className="mb-8">
        <h2 id="step2"
          className="text-2xl font-bold mb-4 pb-2 border-b"
          style={{ color: '#FFFFFF', borderColor: '#30363D' }}
        >
          {t('docs.proxmox.step2')}
        </h2>
        <p className="mb-4" style={{ color: '#8B949E' }}>
          {t('docs.proxmox.step2Text')}
        </p>
        <pre
          className="p-4 rounded overflow-x-auto mb-4"
          style={{ background: '#000000' }}
        >
          <code style={{ color: '#C9D1D9', fontFamily: 'var(--font-family-mono)', fontSize: '14px' }}>
            <span style={{ color: '#8B949E' }}># Linux/macOS</span>{'\n'}
            <span style={{ color: '#79C0FF' }}>$</span> <span style={{ color: '#FF7B72' }}>sudo</span> <span style={{ color: '#A5D6FF' }}>dd</span> if=proxmox-ve_8.1.iso of=/dev/sdX bs=4M status=progress{'\n'}
            {'\n'}
            <span style={{ color: '#8B949E' }}># Verify the USB drive</span>{'\n'}
            <span style={{ color: '#79C0FF' }}>$</span> <span style={{ color: '#FF7B72' }}>lsblk</span>
          </code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 id="step3"
          className="text-2xl font-bold mb-4 pb-2 border-b"
          style={{ color: '#FFFFFF', borderColor: '#30363D' }}
        >
          {t('docs.proxmox.step3')}
        </h2>
        <ol className="space-y-4" style={{ color: '#8B949E' }}>
          <li className="flex gap-3">
            <span
              className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold"
              style={{ background: '#238636', color: '#FFFFFF' }}
            >
              1
            </span>
            <div>
              <p className="mb-2">
                {t('docs.proxmox.step3_1')}
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span
              className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold"
              style={{ background: '#238636', color: '#FFFFFF' }}
            >
              2
            </span>
            <div>
              <p className="mb-2">
                {t('docs.proxmox.step3_2')}
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span
              className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold"
              style={{ background: '#238636', color: '#FFFFFF' }}
            >
              3
            </span>
            <div>
              <p className="mb-2">
                {t('docs.proxmox.step3_3')}
              </p>
              <ul className="ml-4 space-y-1 text-sm">
                <li>• {t('docs.proxmox.step3_3_1')}</li>
                <li>• {t('docs.proxmox.step3_3_2')}</li>
                <li>• {t('docs.proxmox.step3_3_3')}</li>
                <li>• {t('docs.proxmox.step3_3_4')}</li>
              </ul>
            </div>
          </li>
          <li className="flex gap-3">
            <span
              className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold"
              style={{ background: '#238636', color: '#FFFFFF' }}
            >
              4
            </span>
            <div>
              <p>
                {t('docs.proxmox.step3_4')}
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 id="step4"
          className="text-2xl font-bold mb-4 pb-2 border-b"
          style={{ color: '#FFFFFF', borderColor: '#30363D' }}
        >
          {t('docs.proxmox.step4')}
        </h2>
        <p className="mb-4" style={{ color: '#8B949E' }}>
          {t('docs.proxmox.step4Text')}
        </p>
        <div
          className="p-4 rounded border"
          style={{
            background: '#161B22',
            borderColor: '#30363D'
          }}
        >
          <p className="text-sm mb-2" style={{ color: '#8B949E' }}>
            {t('docs.proxmox.step4Text2')}
          </p>
          <code
            className="block p-3 rounded text-sm"
            style={{
              background: '#000000',
              color: '#39C5CF',
              fontFamily: 'var(--font-family-mono)'
            }}
          >
            https://your-server-ip:8006
          </code>
          <p className="text-sm mt-2" style={{ color: '#8B949E' }}>
            {t('docs.proxmox.step4Text3')}
          </p>
        </div>
      </section>

      <div
        className="p-4 rounded border-l-4"
        style={{
          background: '#161B22',
          borderColor: '#2EA043'
        }}
      >
        <div className="flex gap-3">
          <Server size={20} style={{ color: '#2EA043', flexShrink: 0 }} />
          <div>
            <p className="font-semibold mb-1" style={{ color: '#2EA043' }}>
              {t('docs.proxmox.success')}
            </p>
            <p className="text-sm" style={{ color: '#8B949E' }}>
              {t('docs.proxmox.successText')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
