import { Server, Download, AlertCircle } from "lucide-react";

export function ProxmoxInstallation() {
  return (
    <div>
      <div className="mb-8">
        <h1 
          className="text-4xl font-bold mb-4 pb-4 border-b"
          style={{ color: '#FFFFFF', borderColor: '#30363D' }}
        >
          Proxmox Installation
        </h1>
        <p 
          className="text-lg"
          style={{ color: '#8B949E' }}
        >
          Proxmox VE is a powerful open-source virtualization platform. Let's install and configure it 
          for your homelab.
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
              Note
            </p>
            <p className="text-sm" style={{ color: '#8B949E' }}>
              This installation will wipe all data on your target machine. Make sure to back up any 
              important data before proceeding.
            </p>
          </div>
        </div>
      </div>

      <section className="mb-8">
        <h2 
          className="text-2xl font-bold mb-4 pb-2 border-b"
          style={{ color: '#FFFFFF', borderColor: '#30363D' }}
        >
          Step 1: Download Proxmox ISO
        </h2>
        <p className="mb-4" style={{ color: '#8B949E' }}>
          Visit the official Proxmox website and download the latest ISO image:
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
          <button
            className="flex items-center gap-2 px-4 py-2 rounded transition-colors"
            style={{
              background: '#238636',
              color: '#FFFFFF',
              border: 'none'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#2EA043'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#238636'}
          >
            <Download size={16} />
            <span className="text-sm">Download</span>
          </button>
        </div>
      </section>

      <section className="mb-8">
        <h2 
          className="text-2xl font-bold mb-4 pb-2 border-b"
          style={{ color: '#FFFFFF', borderColor: '#30363D' }}
        >
          Step 2: Create Bootable USB
        </h2>
        <p className="mb-4" style={{ color: '#8B949E' }}>
          Use a tool like Rufus (Windows) or dd (Linux) to create a bootable USB drive:
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
        <h2 
          className="text-2xl font-bold mb-4 pb-2 border-b"
          style={{ color: '#FFFFFF', borderColor: '#30363D' }}
        >
          Step 3: Boot and Install
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
                Insert the USB drive and boot your machine. Press F12/DEL to enter boot menu.
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
                Select "Install Proxmox VE" from the boot menu.
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
                Follow the graphical installer:
              </p>
              <ul className="ml-4 space-y-1 text-sm">
                <li>• Accept the EULA</li>
                <li>• Select target disk</li>
                <li>• Configure network (static IP recommended)</li>
                <li>• Set root password</li>
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
                Wait for installation to complete and reboot.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 
          className="text-2xl font-bold mb-4 pb-2 border-b"
          style={{ color: '#FFFFFF', borderColor: '#30363D' }}
        >
          Step 4: Access Web Interface
        </h2>
        <p className="mb-4" style={{ color: '#8B949E' }}>
          After installation, access the Proxmox web interface:
        </p>
        <div 
          className="p-4 rounded border"
          style={{ 
            background: '#161B22',
            borderColor: '#30363D'
          }}
        >
          <p className="text-sm mb-2" style={{ color: '#8B949E' }}>
            Open your browser and navigate to:
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
            Login with username <strong style={{ color: '#FFFFFF' }}>root</strong> and the password you set during installation.
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
              Success!
            </p>
            <p className="text-sm" style={{ color: '#8B949E' }}>
              You now have a fully functional Proxmox VE server. Next, we'll learn how to create 
              and manage virtual machines and containers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
