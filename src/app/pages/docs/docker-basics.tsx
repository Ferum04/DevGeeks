import { Container, Layers, AlertCircle, Zap } from "lucide-react";

export function DockerBasics() {
  return (
    <div>
      <div className="mb-8">
        <h1 
          className="text-4xl font-bold mb-4 pb-4 border-b"
          style={{ color: '#FFFFFF', borderColor: '#30363D' }}
        >
          Docker Basics
        </h1>
        <p 
          className="text-lg"
          style={{ color: '#8B949E' }}
        >
          Docker is a containerization platform that packages applications and their dependencies 
          into lightweight, portable containers.
        </p>
      </div>

      <section className="mb-8">
        <h2 
          className="text-2xl font-bold mb-4 pb-2 border-b"
          style={{ color: '#FFFFFF', borderColor: '#30363D' }}
        >
          What is Docker?
        </h2>
        <p className="mb-4" style={{ color: '#8B949E' }}>
          Docker allows you to run applications in isolated environments called containers. 
          Unlike virtual machines, containers share the host OS kernel, making them much more 
          efficient and faster to start.
        </p>
        <div 
          className="p-4 rounded border"
          style={{ 
            background: '#161B22',
            borderColor: '#30363D'
          }}
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold mb-2" style={{ color: '#39C5CF' }}>
                <Container className="inline mr-2" size={18} />
                Containers
              </p>
              <ul className="space-y-1 text-sm" style={{ color: '#8B949E' }}>
                <li>• Lightweight</li>
                <li>• Fast startup (&lt;1s)</li>
                <li>• Shares host kernel</li>
                <li>• Application-level isolation</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2" style={{ color: '#A371F7' }}>
                <Layers className="inline mr-2" size={18} />
                Virtual Machines
              </p>
              <ul className="space-y-1 text-sm" style={{ color: '#8B949E' }}>
                <li>• Heavyweight</li>
                <li>• Slow startup (~1min)</li>
                <li>• Full OS per VM</li>
                <li>• Hardware-level isolation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 
          className="text-2xl font-bold mb-4 pb-2 border-b"
          style={{ color: '#FFFFFF', borderColor: '#30363D' }}
        >
          Installing Docker
        </h2>
        <p className="mb-4" style={{ color: '#8B949E' }}>
          Install Docker on your Proxmox VM or directly on your host machine:
        </p>
        <pre 
          className="p-4 rounded overflow-x-auto mb-4"
          style={{ background: '#000000' }}
        >
          <code style={{ color: '#C9D1D9', fontFamily: 'var(--font-family-mono)', fontSize: '14px' }}>
            <span style={{ color: '#8B949E' }}># Update package index</span>{'\n'}
            <span style={{ color: '#79C0FF' }}>$</span> <span style={{ color: '#FF7B72' }}>sudo</span> apt update{'\n'}
            {'\n'}
            <span style={{ color: '#8B949E' }}># Install Docker</span>{'\n'}
            <span style={{ color: '#79C0FF' }}>$</span> <span style={{ color: '#FF7B72' }}>curl</span> -fsSL https://get.docker.com | sh{'\n'}
            {'\n'}
            <span style={{ color: '#8B949E' }}># Add your user to docker group</span>{'\n'}
            <span style={{ color: '#79C0FF' }}>$</span> <span style={{ color: '#FF7B72' }}>sudo</span> usermod -aG docker <span style={{ color: '#A5D6FF' }}>$USER</span>{'\n'}
            {'\n'}
            <span style={{ color: '#8B949E' }}># Verify installation</span>{'\n'}
            <span style={{ color: '#79C0FF' }}>$</span> <span style={{ color: '#FF7B72' }}>docker</span> --version{'\n'}
            <span style={{ color: '#2EA043' }}>Docker version 24.0.7, build afdd53b</span>
          </code>
        </pre>
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
              Use Docker Compose to manage multi-container applications. It makes configuration 
              portable and easy to version control!
            </p>
          </div>
        </div>
      </div>

      <section className="mb-8">
        <h2 
          className="text-2xl font-bold mb-4 pb-2 border-b"
          style={{ color: '#FFFFFF', borderColor: '#30363D' }}
        >
          Basic Docker Commands
        </h2>
        <pre 
          className="p-4 rounded overflow-x-auto mb-4"
          style={{ background: '#000000' }}
        >
          <code style={{ color: '#C9D1D9', fontFamily: 'var(--font-family-mono)', fontSize: '14px' }}>
            <span style={{ color: '#8B949E' }}># Pull an image from Docker Hub</span>{'\n'}
            <span style={{ color: '#79C0FF' }}>$</span> <span style={{ color: '#FF7B72' }}>docker</span> pull nginx:latest{'\n'}
            {'\n'}
            <span style={{ color: '#8B949E' }}># Run a container</span>{'\n'}
            <span style={{ color: '#79C0FF' }}>$</span> <span style={{ color: '#FF7B72' }}>docker</span> run -d -p <span style={{ color: '#A5D6FF' }}>80:80</span> --name webserver nginx{'\n'}
            {'\n'}
            <span style={{ color: '#8B949E' }}># List running containers</span>{'\n'}
            <span style={{ color: '#79C0FF' }}>$</span> <span style={{ color: '#FF7B72' }}>docker</span> ps{'\n'}
            {'\n'}
            <span style={{ color: '#8B949E' }}># View container logs</span>{'\n'}
            <span style={{ color: '#79C0FF' }}>$</span> <span style={{ color: '#FF7B72' }}>docker</span> logs webserver{'\n'}
            {'\n'}
            <span style={{ color: '#8B949E' }}># Stop a container</span>{'\n'}
            <span style={{ color: '#79C0FF' }}>$</span> <span style={{ color: '#FF7B72' }}>docker</span> stop webserver{'\n'}
            {'\n'}
            <span style={{ color: '#8B949E' }}># Remove a container</span>{'\n'}
            <span style={{ color: '#79C0FF' }}>$</span> <span style={{ color: '#FF7B72' }}>docker</span> rm webserver
          </code>
        </pre>
      </section>

      <section className="mb-8">
        <h2 
          className="text-2xl font-bold mb-4 pb-2 border-b"
          style={{ color: '#FFFFFF', borderColor: '#30363D' }}
        >
          Docker Compose Example
        </h2>
        <p className="mb-4" style={{ color: '#8B949E' }}>
          Create a <code style={{ background: '#000000', padding: '2px 6px', borderRadius: '3px', fontFamily: 'var(--font-family-mono)' }}>docker-compose.yml</code> file:
        </p>
        <pre 
          className="p-4 rounded overflow-x-auto"
          style={{ background: '#000000' }}
        >
          <code style={{ color: '#C9D1D9', fontFamily: 'var(--font-family-mono)', fontSize: '14px' }}>
            <span style={{ color: '#FF7B72' }}>version:</span> <span style={{ color: '#A5D6FF' }}>'3.8'</span>{'\n'}
            {'\n'}
            <span style={{ color: '#FF7B72' }}>services:</span>{'\n'}
            {'  '}<span style={{ color: '#79C0FF' }}>web:</span>{'\n'}
            {'    '}<span style={{ color: '#FF7B72' }}>image:</span> nginx:latest{'\n'}
            {'    '}<span style={{ color: '#FF7B72' }}>ports:</span>{'\n'}
            {'      '}- <span style={{ color: '#A5D6FF' }}>"80:80"</span>{'\n'}
            {'    '}<span style={{ color: '#FF7B72' }}>volumes:</span>{'\n'}
            {'      '}- <span style={{ color: '#A5D6FF' }}>./html:/usr/share/nginx/html</span>{'\n'}
            {'    '}<span style={{ color: '#FF7B72' }}>restart:</span> unless-stopped{'\n'}
            {'\n'}
            {'  '}<span style={{ color: '#79C0FF' }}>db:</span>{'\n'}
            {'    '}<span style={{ color: '#FF7B72' }}>image:</span> postgres:15{'\n'}
            {'    '}<span style={{ color: '#FF7B72' }}>environment:</span>{'\n'}
            {'      '}<span style={{ color: '#FF7B72' }}>POSTGRES_PASSWORD:</span> <span style={{ color: '#A5D6FF' }}>secretpassword</span>{'\n'}
            {'    '}<span style={{ color: '#FF7B72' }}>volumes:</span>{'\n'}
            {'      '}- <span style={{ color: '#A5D6FF' }}>db-data:/var/lib/postgresql/data</span>{'\n'}
            {'\n'}
            <span style={{ color: '#FF7B72' }}>volumes:</span>{'\n'}
            {'  '}<span style={{ color: '#79C0FF' }}>db-data:</span>
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
              Always use volumes for persistent data. Containers are ephemeral—data stored 
              inside them will be lost when the container is removed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
