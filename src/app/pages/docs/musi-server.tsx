import { Terminal } from "lucide-react";

export function MusiServer() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header section */}
            <div>
                <h1 className="text-4xl font-bold mb-4 tracking-tight" style={{ color: '#E6EDF3' }}>
                    🎵 Music Server
                </h1>
                <p className="text-xl" style={{ color: '#8B949E' }}>
                    Complete Guide: Deploying Navidrome in an LXC Container
                </p>
            </div>

            <div className="prose prose-invert max-w-none">

                {/* Phase 1 */}
                <section id="phase-1" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2" style={{ color: '#58A6FF' }}>
                        Phase 1: Creating the Container with the Necessary Resources
                    </h2>
                    <p className="mb-4 text-sm" style={{ color: '#C9D1D9' }}>
                        On your Proxmox host (via the Web UI or CLI), create the &quot;home&quot; for your music server.
                    </p>

                    <ul className="list-disc pl-6 space-y-2 mb-6 text-sm" style={{ color: '#C9D1D9' }}>
                        <li><strong style={{ color: '#E6EDF3' }}>Template:</strong> It is recommended to choose the latest available Debian version (e.g., Debian 12 &quot;Bookworm&quot;).</li>
                        <li>
                            <strong style={{ color: '#E6EDF3' }}>Resources:</strong>
                            <ul className="list-circle pl-6 mt-2 space-y-1">
                                <li>CPU: 1 Core (sufficient for 1-2 concurrent transcoding streams).</li>
                                <li>RAM: 512 MB (Navidrome is very lightweight).</li>
                                <li>Disk: 8 GB on your SSD (for the OS and the metadata database).</li>
                            </ul>
                        </li>
                        <li><strong style={{ color: '#E6EDF3' }}>Network:</strong> Assign a static IP (e.g., <code style={{ color: '#A371F7' }}>192.168.0.202/24</code>) and set the Gateway to your router&apos;s IP (<code style={{ color: '#A371F7' }}>192.168.0.1</code>).</li>
                    </ul>

                    <div
                        className="p-4 rounded-md border flex gap-3 mb-6"
                        style={{ background: 'rgba(210, 153, 34, 0.1)', borderColor: 'rgba(210, 153, 34, 0.4)' }}
                    >
                        <span style={{ color: '#D29922' }}>⚠️</span>
                        <p className="text-sm m-0" style={{ color: '#E6EDF3' }}>
                            <strong style={{ color: '#D29922' }}>Important:</strong> Enable the Nesting feature under Options -&gt; Features to ensure systemd services run correctly.
                        </p>
                    </div>
                </section>

                <hr style={{ borderColor: '#30363D' }} className="my-8" />

                {/* Phase 2 */}
                <section id="phase-2" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2" style={{ color: '#58A6FF' }}>
                        Phase 2: Connecting the Hard Drive (HDD)
                    </h2>
                    <p className="mb-4 text-sm" style={{ color: '#C9D1D9' }}>
                        Navidrome needs to &quot;see&quot; your music collection stored on your physical HDD. We will &quot;pass through&quot; the folder from the Proxmox host into the container.
                    </p>
                    <p className="mb-2 text-sm" style={{ color: '#C9D1D9' }}>On the Proxmox host shell, run (replace <code style={{ color: '#A371F7' }}>102</code> with your actual LXC container ID):</p>

                    <div className="rounded-md overflow-hidden border mb-6" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            <Terminal size={14} /> Bash
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code><span style={{ color: '#8B949E' }}># mp0 is the mount point ID, /music is the path inside the container</span>{'\n'}pct set 102 -mp0 &lt;your_path_to_music_folder&gt;,mp=/music</code>
                        </pre>
                    </div>
                </section>

                <hr style={{ borderColor: '#30363D' }} className="my-8" />

                {/* Phase 3 */}
                <section id="phase-3" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2" style={{ color: '#58A6FF' }}>
                        Phase 3: Preparing the System and Dependencies
                    </h2>
                    <p className="mb-4 text-sm" style={{ color: '#C9D1D9' }}>
                        Enter the container (<code style={{ color: '#A371F7' }}>pct enter 102</code> - again, using your ID) and build the &quot;foundation&quot;:
                    </p>

                    <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: '#E6EDF3' }}>1. Update package lists:</h3>
                    <div className="rounded-md overflow-hidden border mb-6" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            <Terminal size={14} /> Bash
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code>apt update && apt upgrade -y</code>
                        </pre>
                    </div>

                    <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: '#E6EDF3' }}>2. Install critical dependencies:</h3>
                    <div className="rounded-md overflow-hidden border mb-2" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            <Terminal size={14} /> Bash
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code>apt install -y curl ffmpeg wget nano</code>
                        </pre>
                    </div>
                    <p className="mb-6 text-sm italic" style={{ color: '#8B949E' }}>
                        * FFmpeg is vital for &quot;on-the-fly&quot; transcoding (e.g., converting FLAC to MP3 for your phone).
                    </p>

                    <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: '#E6EDF3' }}>3. Create folders and a dedicated user:</h3>
                    <div className="rounded-md overflow-hidden border mb-6" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            <Terminal size={14} /> Bash
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code>mkdir -p /opt/navidrome /var/lib/navidrome{'\n'}useradd -r -s /usr/sbin/nologin navidrome</code>
                        </pre>
                    </div>
                </section>

                <hr style={{ borderColor: '#30363D' }} className="my-8" />

                {/* Phase 4 */}
                <section id="phase-4" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2" style={{ color: '#58A6FF' }}>
                        Phase 4: Installing Navidrome from GitHub
                    </h2>
                    <p className="mb-4 text-sm" style={{ color: '#C9D1D9' }}>
                        We will download a stable release to ensure a smooth installation.
                    </p>

                    <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: '#E6EDF3' }}>1. Download the archive:</h3>
                    <div className="rounded-md overflow-hidden border mb-6" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            <Terminal size={14} /> Bash
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code>wget https://github.com/navidrome/navidrome/releases/download/v0.53.3/navidrome_0.53.3_linux_amd64.tar.gz -O /tmp/navidrome.tar.gz</code>
                        </pre>
                    </div>

                    <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: '#E6EDF3' }}>2. Extract to the application folder:</h3>
                    <div className="rounded-md overflow-hidden border mb-6" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            <Terminal size={14} /> Bash
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code>tar -xvzf /tmp/navidrome.tar.gz -C /opt/navidrome/{'\n'}chown -R navidrome:navidrome /opt/navidrome /var/lib/navidrome</code>
                        </pre>
                    </div>
                </section>

                <hr style={{ borderColor: '#30363D' }} className="my-8" />

                {/* Phase 5 */}
                <section id="phase-5" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2" style={{ color: '#58A6FF' }}>
                        Phase 5: Configuration and Autostart
                    </h2>
                    <p className="mb-4 text-sm" style={{ color: '#C9D1D9' }}>
                        Now, we teach the system to start Navidrome automatically.
                    </p>

                    <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: '#E6EDF3' }}>1. Create the configuration file:</h3>
                    <p className="mb-2 text-sm" style={{ color: '#C9D1D9' }}><code style={{ color: '#A371F7' }}>nano /var/lib/navidrome/navidrome.toml</code></p>
                    <div className="rounded-md overflow-hidden border mb-6" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            TOML
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code><span style={{ color: '#79C0FF' }}>MusicFolder</span> = <span style={{ color: '#A5D6FF' }}>"/music"</span>{'\n'}<span style={{ color: '#79C0FF' }}>DataFolder</span> = <span style={{ color: '#A5D6FF' }}>"/var/lib/navidrome"</span>{'\n'}<span style={{ color: '#79C0FF' }}>Port</span> = <span style={{ color: '#79C0FF' }}>4533</span></code>
                        </pre>
                    </div>

                    <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: '#E6EDF3' }}>2. Create the Autostart Service:</h3>
                    <p className="mb-2 text-sm" style={{ color: '#C9D1D9' }}><code style={{ color: '#A371F7' }}>nano /etc/systemd/system/navidrome.service</code></p>
                    <div className="rounded-md overflow-hidden border mb-6" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            Systemd Service
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code><span style={{ color: '#8B949E' }}>[Unit]</span>{'\n'}Description=Navidrome Music Server{'\n'}After=network.target{'\n\n'}<span style={{ color: '#8B949E' }}>[Service]</span>{'\n'}User=navidrome{'\n'}Group=navidrome{'\n'}Type=simple{'\n'}WorkingDirectory=/var/lib/navidrome{'\n'}ExecStart=/opt/navidrome/navidrome --configfile "/var/lib/navidrome/navidrome.toml"{'\n'}Restart=on-failure{'\n\n'}<span style={{ color: '#8B949E' }}>[Install]</span>{'\n'}WantedBy=multi-user.target</code>
                        </pre>
                    </div>

                    <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: '#E6EDF3' }}>3. Enable and Start:</h3>
                    <div className="rounded-md overflow-hidden border mb-6" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            <Terminal size={14} /> Bash
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code>systemctl daemon-reload{'\n'}systemctl enable --now navidrome</code>
                        </pre>
                    </div>
                </section>

                <hr style={{ borderColor: '#30363D' }} className="my-8" />

                {/* Phase 6 */}
                <section id="phase-6" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2" style={{ color: '#58A6FF' }}>
                        Phase 6: First Login and Setup
                    </h2>
                    <ul className="list-decimal pl-6 space-y-3 mb-6 text-sm" style={{ color: '#C9D1D9' }}>
                        <li><strong style={{ color: '#E6EDF3' }}>Open your browser:</strong> Go to <a href="#" style={{ color: '#A371F7' }} className="hover:underline">http://192.168.0.202:4533</a>.</li>
                        <li><strong style={{ color: '#E6EDF3' }}>Create an Admin:</strong> Set your username and a strong password.</li>
                        <li><strong style={{ color: '#E6EDF3' }}>Wait:</strong> Navidrome will begin scanning the <code style={{ color: '#A371F7' }}>/music</code> folder. If you have a large FLAC collection, this might take a few minutes.</li>
                    </ul>
                </section>

                {/* Phase 7 */}
                <section id="phase-7" className="mb-2">
                    <div className="p-6 rounded-lg border backdrop-blur-sm" style={{ background: 'rgba(46, 160, 67, 0.05)', borderColor: 'rgba(46, 160, 67, 0.2)' }}>
                        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2" style={{ color: '#2EA043' }}>
                            Phase 7: Mobile Integration (Bonus)
                        </h2>
                        <p className="mb-4 text-sm" style={{ color: '#C9D1D9' }}>
                            To listen to your music on the go:
                        </p>
                        <ul className="list-decimal pl-6 space-y-3 mb-4 text-sm" style={{ color: '#C9D1D9' }}>
                            <li>Download a Subsonic-compatible app like <strong style={{ color: '#E6EDF3' }}>Symfonium</strong> or <strong style={{ color: '#E6EDF3' }}>Substreamer</strong>.</li>
                            <li>Enter your server&apos;s IP address, your username, and your password.</li>
                        </ul>
                        <p className="text-sm italic" style={{ color: '#2EA043' }}>
                            Your collection is now always with you, and thanks to FFmpeg, it won&apos;t drain your mobile data. 🎧
                        </p>
                    </div>
                </section>

            </div>
        </div>
    );
}
