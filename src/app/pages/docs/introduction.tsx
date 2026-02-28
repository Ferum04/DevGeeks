import { Book, AlertCircle, Zap } from "lucide-react";

export function Introduction() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 
          className="text-4xl font-bold mb-4 pb-4 border-b"
          style={{ color: '#FFFFFF', borderColor: '#30363D' }}
          id="overview"
        >
          Introduction
        </h1>
        <p 
          className="text-lg"
          style={{ color: '#8B949E' }}
        >
          Welcome to the DevGeeks Homelab Guide. This comprehensive tutorial will walk you through 
          building your own homelab from scratch.
        </p>
      </div>

      {/* Callout - Note */}
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
              This guide assumes you have basic knowledge of Linux commands and networking concepts.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="mb-8" id="getting-started">
        <h2 
          className="text-2xl font-bold mb-4 pb-2 border-b"
          style={{ color: '#FFFFFF', borderColor: '#30363D' }}
        >
          What is a Homelab?
        </h2>
        <p className="mb-4" style={{ color: '#8B949E' }}>
          A homelab is a personal environment where you can experiment with various technologies, 
          learn new skills, and host services for your home network. It's an excellent way to gain 
          hands-on experience with enterprise technologies without the enterprise price tag.
        </p>
      </section>

      {/* Code Block Example */}
      <section className="mb-8">
        <h2 
          className="text-2xl font-bold mb-4 pb-2 border-b"
          style={{ color: '#FFFFFF', borderColor: '#30363D' }}
        >
          Quick Start
        </h2>
        <p className="mb-4" style={{ color: '#8B949E' }}>
          Before we dive into the details, let's verify your system requirements:
        </p>
        <pre 
          className="p-4 rounded overflow-x-auto mb-4"
          style={{ background: '#000000' }}
        >
          <code style={{ color: '#C9D1D9', fontFamily: 'var(--font-family-mono)', fontSize: '14px' }}>
            <span style={{ color: '#79C0FF' }}>$</span> <span style={{ color: '#FF7B72' }}>uname</span> <span style={{ color: '#A5D6FF' }}>-a</span>{'\n'}
            <span style={{ color: '#8B949E' }}>Linux homelab 5.15.0-89-generic</span>{'\n'}
            {'\n'}
            <span style={{ color: '#79C0FF' }}>$</span> <span style={{ color: '#FF7B72' }}>free</span> <span style={{ color: '#A5D6FF' }}>-h</span>{'\n'}
            <span style={{ color: '#8B949E' }}>              total        used        free</span>{'\n'}
            <span style={{ color: '#8B949E' }}>Mem:           16Gi       2.3Gi        12Gi</span>
          </code>
        </pre>
      </section>

      {/* Pro Tip Callout */}
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
              Start with a simple setup and gradually add complexity. You don't need expensive 
              hardware to begin your homelab journey—an old laptop or a Raspberry Pi will work great!
            </p>
          </div>
        </div>
      </div>

      {/* Key Concepts */}
      <section className="mb-8" id="key-concepts">
        <h2 
          className="text-2xl font-bold mb-4 pb-2 border-b"
          style={{ color: '#FFFFFF', borderColor: '#30363D' }}
        >
          Key Concepts
        </h2>
        <div className="grid gap-4">
          <div 
            className="p-4 rounded border"
            style={{ 
              background: '#161B22',
              borderColor: '#30363D'
            }}
          >
            <h3 className="font-semibold mb-2" style={{ color: '#FFFFFF' }}>
              <Book className="inline mr-2" size={18} style={{ color: '#2EA043' }} />
              Virtualization
            </h3>
            <p className="text-sm" style={{ color: '#8B949E' }}>
              Run multiple operating systems on a single physical machine, maximizing hardware utilization.
            </p>
          </div>

          <div 
            className="p-4 rounded border"
            style={{ 
              background: '#161B22',
              borderColor: '#30363D'
            }}
          >
            <h3 className="font-semibold mb-2" style={{ color: '#FFFFFF' }}>
              <Book className="inline mr-2" size={18} style={{ color: '#39C5CF' }} />
              Containerization
            </h3>
            <p className="text-sm" style={{ color: '#8B949E' }}>
              Package applications with their dependencies for consistent deployment across environments.
            </p>
          </div>

          <div 
            className="p-4 rounded border"
            style={{ 
              background: '#161B22',
              borderColor: '#30363D'
            }}
          >
            <h3 className="font-semibold mb-2" style={{ color: '#FFFFFF' }}>
              <Book className="inline mr-2" size={18} style={{ color: '#A371F7' }} />
              Home Automation
            </h3>
            <p className="text-sm" style={{ color: '#8B949E' }}>
              Control smart devices and automate tasks in your home using open-source software.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
