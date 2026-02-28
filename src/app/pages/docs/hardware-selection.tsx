import { Cpu, DollarSign, Zap } from "lucide-react";

export function HardwareSelection() {
  return (
    <div>
      <div className="mb-8">
        <h1 
          className="text-4xl font-bold mb-4 pb-4 border-b"
          style={{ color: '#FFFFFF', borderColor: '#30363D' }}
        >
          Hardware Selection
        </h1>
        <p 
          className="text-lg"
          style={{ color: '#8B949E' }}
        >
          Choosing the right hardware is crucial for your homelab. Let's explore different options 
          based on your budget and requirements.
        </p>
      </div>

      <section className="mb-8">
        <h2 
          className="text-2xl font-bold mb-4 pb-2 border-b"
          style={{ color: '#FFFFFF', borderColor: '#30363D' }}
        >
          Minimum Requirements
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
              <span><strong style={{ color: '#FFFFFF' }}>CPU:</strong> Dual-core processor (Intel i3 or AMD Ryzen 3)</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#2EA043' }}>•</span>
              <span><strong style={{ color: '#FFFFFF' }}>RAM:</strong> 8GB minimum, 16GB recommended</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#2EA043' }}>•</span>
              <span><strong style={{ color: '#FFFFFF' }}>Storage:</strong> 256GB SSD minimum</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#2EA043' }}>•</span>
              <span><strong style={{ color: '#FFFFFF' }}>Network:</strong> Gigabit Ethernet (1Gbps)</span>
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
              Pro Tip
            </p>
            <p className="text-sm" style={{ color: '#8B949E' }}>
              Look for used enterprise hardware on eBay. Dell PowerEdge R710 or HP ProLiant servers 
              offer great value for money!
            </p>
          </div>
        </div>
      </div>

      <section className="mb-8">
        <h2 
          className="text-2xl font-bold mb-4 pb-2 border-b"
          style={{ color: '#FFFFFF', borderColor: '#30363D' }}
        >
          Budget Options
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
                Raspberry Pi 4
              </h3>
              <span 
                className="px-3 py-1 rounded text-sm font-semibold"
                style={{ background: '#238636', color: '#FFFFFF' }}
              >
                $75-120
              </span>
            </div>
            <p className="text-sm mb-3" style={{ color: '#8B949E' }}>
              Perfect for beginners. Low power consumption and great for learning Docker and basic services.
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
                Intel NUC
              </h3>
              <span 
                className="px-3 py-1 rounded text-sm font-semibold"
                style={{ background: '#238636', color: '#FFFFFF' }}
              >
                $300-500
              </span>
            </div>
            <p className="text-sm mb-3" style={{ color: '#8B949E' }}>
              Small form factor with excellent performance. Can run multiple VMs and containers efficiently.
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
                Used Workstation
              </h3>
              <span 
                className="px-3 py-1 rounded text-sm font-semibold"
                style={{ background: '#238636', color: '#FFFFFF' }}
              >
                $200-400
              </span>
            </div>
            <p className="text-sm mb-3" style={{ color: '#8B949E' }}>
              Best bang for buck. Dell Optiplex or HP EliteDesk with expandable RAM and storage.
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
        <h2 
          className="text-2xl font-bold mb-4 pb-2 border-b"
          style={{ color: '#FFFFFF', borderColor: '#30363D' }}
        >
          Performance Comparison
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
