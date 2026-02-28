import { Lightbulb, Thermometer, Lock, Zap, AlertCircle } from "lucide-react";

export function HomeAssistant() {
  return (
    <div>
      <div className="mb-8">
        <h1 
          className="text-4xl font-bold mb-4 pb-4 border-b"
          style={{ color: '#FFFFFF', borderColor: '#30363D' }}
        >
          Home Assistant
        </h1>
        <p 
          className="text-lg"
          style={{ color: '#8B949E' }}
        >
          Home Assistant is an open-source home automation platform that puts local control and 
          privacy first. Let's set it up in your homelab.
        </p>
      </div>

      <section className="mb-8">
        <h2 
          className="text-2xl font-bold mb-4 pb-2 border-b"
          style={{ color: '#FFFFFF', borderColor: '#30363D' }}
        >
          Why Home Assistant?
        </h2>
        <div className="grid gap-4 mb-6">
          <div 
            className="p-4 rounded border"
            style={{ 
              background: '#161B22',
              borderColor: '#30363D'
            }}
          >
            <h3 className="font-semibold mb-2" style={{ color: '#FFFFFF' }}>
              <Lock className="inline mr-2" size={18} style={{ color: '#2EA043' }} />
              Privacy & Local Control
            </h3>
            <p className="text-sm" style={{ color: '#8B949E' }}>
              All your smart home data stays local. No cloud dependencies or data mining.
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
              <Zap className="inline mr-2" size={18} style={{ color: '#A371F7' }} />
              Powerful Automations
            </h3>
            <p className="text-sm" style={{ color: '#8B949E' }}>
              Create complex automations with an easy-to-use interface. No coding required!
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
              <Lightbulb className="inline mr-2" size={18} style={{ color: '#39C5CF' }} />
              2000+ Integrations
            </h3>
            <p className="text-sm" style={{ color: '#8B949E' }}>
              Support for almost every smart device and service imaginable.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 
          className="text-2xl font-bold mb-4 pb-2 border-b"
          style={{ color: '#FFFFFF', borderColor: '#30363D' }}
        >
          Installation with Docker
        </h2>
        <p className="mb-4" style={{ color: '#8B949E' }}>
          The easiest way to run Home Assistant is using Docker Compose:
        </p>
        <pre 
          className="p-4 rounded overflow-x-auto mb-4"
          style={{ background: '#000000' }}
        >
          <code style={{ color: '#C9D1D9', fontFamily: 'var(--font-family-mono)', fontSize: '14px' }}>
            <span style={{ color: '#8B949E' }}># Create directory for Home Assistant</span>{'\n'}
            <span style={{ color: '#79C0FF' }}>$</span> <span style={{ color: '#FF7B72' }}>mkdir</span> -p ~/homeassistant{'\n'}
            <span style={{ color: '#79C0FF' }}>$</span> <span style={{ color: '#FF7B72' }}>cd</span> ~/homeassistant{'\n'}
            {'\n'}
            <span style={{ color: '#8B949E' }}># Create docker-compose.yml</span>{'\n'}
            <span style={{ color: '#79C0FF' }}>$</span> <span style={{ color: '#FF7B72' }}>nano</span> docker-compose.yml
          </code>
        </pre>

        <p className="mb-4" style={{ color: '#8B949E' }}>
          Add the following configuration:
        </p>
        <pre 
          className="p-4 rounded overflow-x-auto mb-4"
          style={{ background: '#000000' }}
        >
          <code style={{ color: '#C9D1D9', fontFamily: 'var(--font-family-mono)', fontSize: '14px' }}>
            <span style={{ color: '#FF7B72' }}>version:</span> <span style={{ color: '#A5D6FF' }}>'3'</span>{'\n'}
            <span style={{ color: '#FF7B72' }}>services:</span>{'\n'}
            {'  '}<span style={{ color: '#79C0FF' }}>homeassistant:</span>{'\n'}
            {'    '}<span style={{ color: '#FF7B72' }}>container_name:</span> homeassistant{'\n'}
            {'    '}<span style={{ color: '#FF7B72' }}>image:</span> homeassistant/home-assistant:stable{'\n'}
            {'    '}<span style={{ color: '#FF7B72' }}>network_mode:</span> host{'\n'}
            {'    '}<span style={{ color: '#FF7B72' }}>volumes:</span>{'\n'}
            {'      '}- <span style={{ color: '#A5D6FF' }}>./config:/config</span>{'\n'}
            {'      '}- <span style={{ color: '#A5D6FF' }}>/etc/localtime:/etc/localtime:ro</span>{'\n'}
            {'    '}<span style={{ color: '#FF7B72' }}>environment:</span>{'\n'}
            {'      '}- <span style={{ color: '#79C0FF' }}>TZ</span>=<span style={{ color: '#A5D6FF' }}>America/New_York</span>{'\n'}
            {'    '}<span style={{ color: '#FF7B72' }}>restart:</span> unless-stopped
          </code>
        </pre>

        <p className="mb-4" style={{ color: '#8B949E' }}>
          Start Home Assistant:
        </p>
        <pre 
          className="p-4 rounded overflow-x-auto"
          style={{ background: '#000000' }}
        >
          <code style={{ color: '#C9D1D9', fontFamily: 'var(--font-family-mono)', fontSize: '14px' }}>
            <span style={{ color: '#79C0FF' }}>$</span> <span style={{ color: '#FF7B72' }}>docker-compose</span> up -d{'\n'}
            <span style={{ color: '#2EA043' }}>✓ Container homeassistant  Started</span>
          </code>
        </pre>
      </section>

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
              Home Assistant uses port 8123 by default. Make sure this port is available and not 
              blocked by your firewall.
            </p>
          </div>
        </div>
      </div>

      <section className="mb-8">
        <h2 
          className="text-2xl font-bold mb-4 pb-2 border-b"
          style={{ color: '#FFFFFF', borderColor: '#30363D' }}
        >
          First-Time Setup
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
                Open your browser and navigate to <code style={{ background: '#000000', padding: '2px 6px', borderRadius: '3px', fontFamily: 'var(--font-family-mono)' }}>http://your-server-ip:8123</code>
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
                Create your admin account with a username and password.
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
                Configure your location and timezone. This helps with automations based on sunrise/sunset.
              </p>
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
                Home Assistant will automatically discover devices on your network. Add your smart devices!
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
          Example Automation
        </h2>
        <p className="mb-4" style={{ color: '#8B949E' }}>
          Here's a simple automation that turns on lights when you arrive home:
        </p>
        <pre 
          className="p-4 rounded overflow-x-auto"
          style={{ background: '#000000' }}
        >
          <code style={{ color: '#C9D1D9', fontFamily: 'var(--font-family-mono)', fontSize: '14px' }}>
            <span style={{ color: '#FF7B72' }}>automation:</span>{'\n'}
            {'  '}- <span style={{ color: '#FF7B72' }}>alias:</span> <span style={{ color: '#A5D6FF' }}>"Welcome Home"</span>{'\n'}
            {'    '}<span style={{ color: '#FF7B72' }}>trigger:</span>{'\n'}
            {'      '}- <span style={{ color: '#FF7B72' }}>platform:</span> state{'\n'}
            {'        '}<span style={{ color: '#FF7B72' }}>entity_id:</span> person.john{'\n'}
            {'        '}<span style={{ color: '#FF7B72' }}>to:</span> <span style={{ color: '#A5D6FF' }}>"home"</span>{'\n'}
            {'    '}<span style={{ color: '#FF7B72' }}>condition:</span>{'\n'}
            {'      '}- <span style={{ color: '#FF7B72' }}>condition:</span> sun{'\n'}
            {'        '}<span style={{ color: '#FF7B72' }}>after:</span> sunset{'\n'}
            {'    '}<span style={{ color: '#FF7B72' }}>action:</span>{'\n'}
            {'      '}- <span style={{ color: '#FF7B72' }}>service:</span> light.turn_on{'\n'}
            {'        '}<span style={{ color: '#FF7B72' }}>target:</span>{'\n'}
            {'          '}<span style={{ color: '#FF7B72' }}>entity_id:</span> light.living_room
          </code>
        </pre>
      </section>

      <div 
        className="p-4 rounded border-l-4"
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
              Explore the Home Assistant Community Add-ons repository for additional integrations 
              like Node-RED, ESPHome, and more advanced automation tools!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
