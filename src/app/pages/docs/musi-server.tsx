import { Terminal } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function MusiServer() {
    const { t } = useLanguage();

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header section */}
            <div>
                <h1 className="text-4xl font-bold mb-4 tracking-tight" style={{ color: '#E6EDF3' }}>
                    {t('docs.musi.title')}
                </h1>
                <p className="text-xl" style={{ color: '#8B949E' }}>
                    {t('docs.musi.subtitle')}
                </p>
            </div>

            <div className="prose prose-invert max-w-none">

                {/* Phase 1 */}
                <section id="phase-1" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2" style={{ color: '#58A6FF' }}>
                        {t('docs.musi.phase1')}
                    </h2>
                    <p className="mb-4 text-sm" style={{ color: '#C9D1D9' }}>
                        {t('docs.musi.phase1_1')}
                    </p>

                    <ul className="list-disc pl-6 space-y-2 mb-6 text-sm" style={{ color: '#C9D1D9' }}>
                        <li>{t('docs.musi.template')}</li>
                        <li>
                            <strong style={{ color: '#E6EDF3' }}>{t('docs.musi.resources')}</strong>
                            <ul className="list-circle pl-6 mt-2 space-y-1">
                                <li>{t('docs.musi.cpu')}</li>
                                <li>{t('docs.musi.ram')}</li>
                                <li>{t('docs.musi.disk')}</li>
                            </ul>
                        </li>
                        <li>{t('docs.musi.network')}</li>
                    </ul>

                    <div
                        className="p-4 rounded-md border flex gap-3 mb-6"
                        style={{ background: 'rgba(210, 153, 34, 0.1)', borderColor: 'rgba(210, 153, 34, 0.4)' }}
                    >
                        <span style={{ color: '#D29922' }}>⚠️</span>
                        <p className="text-sm m-0" style={{ color: '#E6EDF3' }}>
                            {t('docs.musi.important')}
                        </p>
                    </div>
                </section>

                <hr style={{ borderColor: '#30363D' }} className="my-8" />

                {/* Phase 2 */}
                <section id="phase-2" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2" style={{ color: '#58A6FF' }}>
                        {t('docs.musi.phase2')}
                    </h2>
                    <p className="mb-4 text-sm" style={{ color: '#C9D1D9' }}>
                        {t('docs.musi.phase2_1')}
                    </p>
                    <p className="mb-2 text-sm" style={{ color: '#C9D1D9' }}>{t('docs.musi.phase2_2')}</p>

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
                        {t('docs.musi.phase3')}
                    </h2>
                    <p className="mb-4 text-sm" style={{ color: '#C9D1D9' }}>
                        {t('docs.musi.phase3_1')}
                    </p>

                    <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: '#E6EDF3' }}>{t('docs.musi.phase3_step1')}</h3>
                    <div className="rounded-md overflow-hidden border mb-6" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            <Terminal size={14} /> Bash
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code>apt update && apt upgrade -y</code>
                        </pre>
                    </div>

                    <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: '#E6EDF3' }}>{t('docs.musi.phase3_step2')}</h3>
                    <div className="rounded-md overflow-hidden border mb-2" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            <Terminal size={14} /> Bash
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code>apt install -y curl ffmpeg wget nano</code>
                        </pre>
                    </div>
                    <p className="mb-6 text-sm italic" style={{ color: '#8B949E' }}>
                        {t('docs.musi.phase3_step2_note')}
                    </p>

                    <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: '#E6EDF3' }}>{t('docs.musi.phase3_step3')}</h3>
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
                        {t('docs.musi.phase4')}
                    </h2>
                    <p className="mb-4 text-sm" style={{ color: '#C9D1D9' }}>
                        {t('docs.musi.phase4_1')}
                    </p>

                    <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: '#E6EDF3' }}>{t('docs.musi.phase4_step1')}</h3>
                    <div className="rounded-md overflow-hidden border mb-6" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            <Terminal size={14} /> Bash
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code>wget https://github.com/navidrome/navidrome/releases/download/v0.53.3/navidrome_0.53.3_linux_amd64.tar.gz -O /tmp/navidrome.tar.gz</code>
                        </pre>
                    </div>

                    <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: '#E6EDF3' }}>{t('docs.musi.phase4_step2')}</h3>
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
                        {t('docs.musi.phase5')}
                    </h2>
                    <p className="mb-4 text-sm" style={{ color: '#C9D1D9' }}>
                        {t('docs.musi.phase5_1')}
                    </p>

                    <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: '#E6EDF3' }}>{t('docs.musi.phase5_step1')}</h3>
                    <p className="mb-2 text-sm" style={{ color: '#C9D1D9' }}><code style={{ color: '#A371F7' }}>nano /var/lib/navidrome/navidrome.toml</code></p>
                    <div className="rounded-md overflow-hidden border mb-6" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            TOML
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code><span style={{ color: '#79C0FF' }}>MusicFolder</span> = <span style={{ color: '#A5D6FF' }}>"/music"</span>{'\n'}<span style={{ color: '#79C0FF' }}>DataFolder</span> = <span style={{ color: '#A5D6FF' }}>"/var/lib/navidrome"</span>{'\n'}<span style={{ color: '#79C0FF' }}>Port</span> = <span style={{ color: '#79C0FF' }}>4533</span></code>
                        </pre>
                    </div>

                    <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: '#E6EDF3' }}>{t('docs.musi.phase5_step2')}</h3>
                    <p className="mb-2 text-sm" style={{ color: '#C9D1D9' }}><code style={{ color: '#A371F7' }}>nano /etc/systemd/system/navidrome.service</code></p>
                    <div className="rounded-md overflow-hidden border mb-6" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            Systemd Service
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code><span style={{ color: '#8B949E' }}>[Unit]</span>{'\n'}Description=Navidrome Music Server{'\n'}After=network.target{'\n\n'}<span style={{ color: '#8B949E' }}>[Service]</span>{'\n'}User=navidrome{'\n'}Group=navidrome{'\n'}Type=simple{'\n'}WorkingDirectory=/var/lib/navidrome{'\n'}ExecStart=/opt/navidrome/navidrome --configfile "/var/lib/navidrome/navidrome.toml"{'\n'}Restart=on-failure{'\n\n'}<span style={{ color: '#8B949E' }}>[Install]</span>{'\n'}WantedBy=multi-user.target</code>
                        </pre>
                    </div>

                    <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: '#E6EDF3' }}>{t('docs.musi.phase5_step3')}</h3>
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
                        {t('docs.musi.phase6')}
                    </h2>
                    <ul className="list-decimal pl-6 space-y-3 mb-6 text-sm" style={{ color: '#C9D1D9' }}>
                        <li>{t('docs.musi.phase6_1')}</li>
                        <li>{t('docs.musi.phase6_2')}</li>
                        <li>{t('docs.musi.phase6_3')}</li>
                    </ul>
                </section>

                {/* Phase 7 */}
                <section id="phase-7" className="mb-2">
                    <div className="p-6 rounded-lg border backdrop-blur-sm" style={{ background: 'rgba(46, 160, 67, 0.05)', borderColor: 'rgba(46, 160, 67, 0.2)' }}>
                        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2" style={{ color: '#2EA043' }}>
                            {t('docs.musi.phase7')}
                        </h2>
                        <p className="mb-4 text-sm" style={{ color: '#C9D1D9' }}>
                            {t('docs.musi.phase7_1')}
                        </p>
                        <ul className="list-decimal pl-6 space-y-3 mb-4 text-sm" style={{ color: '#C9D1D9' }}>
                            <li>{t('docs.musi.phase7_2')}</li>
                            <li>{t('docs.musi.phase7_3')}</li>
                        </ul>
                        <p className="text-sm italic" style={{ color: '#2EA043' }}>
                            {t('docs.musi.phase7_4')}
                        </p>
                    </div>
                </section>

            </div>
        </div>
    );
}
