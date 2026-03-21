import { Terminal, Download } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function TorrentServer() {
    const { t } = useLanguage();

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header section */}
            <div>
                <h1 className="text-4xl font-bold mb-4 tracking-tight" style={{ color: '#E6EDF3' }}>
                    <Download className="inline-block mr-3" size={32} />
                    {t('docs.torrent.title')}
                </h1>
                <p className="text-xl" style={{ color: '#8B949E' }}>
                    {t('docs.torrent.subtitle')}
                </p>
                <p className="mt-2 text-sm" style={{ color: '#8B949E' }}>
                    {t('docs.torrent.desc')}
                </p>
            </div>

            <div className="prose prose-invert max-w-none">

                {/* Step 1 */}
                <section id="step-1" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2" style={{ color: '#58A6FF' }}>
                        {t('docs.torrent.step1')}
                    </h2>
                    <p className="mb-4 text-sm" style={{ color: '#C9D1D9' }}>
                        {t('docs.torrent.step1_desc')}
                    </p>

                    <div className="rounded-md overflow-hidden border mb-4" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            <Terminal size={14} /> Bash
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code>pct set 103 -mp0 &lt;your_path_to_media_folder&gt;,mp=/downloads</code>
                        </pre>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 mb-6 text-sm" style={{ color: '#C9D1D9' }}>
                        <li><strong style={{ color: '#E6EDF3' }}>{t('docs.torrent.step1_pct')}</strong> {t('docs.torrent.step1_pct_desc')}</li>
                        <li><strong style={{ color: '#E6EDF3' }}>{t('docs.torrent.step1_path')}</strong> {t('docs.torrent.step1_path_desc')}</li>
                        <li><strong style={{ color: '#E6EDF3' }}>{t('docs.torrent.step1_mp')}</strong> {t('docs.torrent.step1_mp_desc')}</li>
                    </ul>
                </section>

                <hr style={{ borderColor: '#30363D' }} className="my-8" />

                {/* Step 2 */}
                <section id="step-2" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2" style={{ color: '#58A6FF' }}>
                        {t('docs.torrent.step2')}
                    </h2>
                    <p className="mb-4 text-sm" style={{ color: '#C9D1D9' }}>
                        {t('docs.torrent.step2_desc')}
                    </p>

                    <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: '#E6EDF3' }}>{t('docs.torrent.step2_install_sw')}</h3>
                    <div className="rounded-md overflow-hidden border mb-4" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            <Terminal size={14} /> Bash
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code>apt update && apt install -y qbittorrent-nox</code>
                        </pre>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 mb-6 text-sm" style={{ color: '#C9D1D9' }}>
                        <li><strong style={{ color: '#E6EDF3' }}>{t('docs.torrent.step2_qb_nox')}</strong> {t('docs.torrent.step2_qb_nox_desc')}</li>
                    </ul>

                    <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: '#E6EDF3' }}>{t('docs.torrent.step2_create_user')}</h3>
                    <p className="mb-2 text-sm" style={{ color: '#C9D1D9' }}>{t('docs.torrent.step2_create_user_note')}</p>
                    <div className="rounded-md overflow-hidden border mb-4" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            <Terminal size={14} /> Bash
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code>adduser --system --group qbittorrent-nox</code>
                        </pre>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 mb-6 text-sm" style={{ color: '#C9D1D9' }}>
                        <li><strong style={{ color: '#E6EDF3' }}>{t('docs.torrent.step2_system')}</strong> {t('docs.torrent.step2_system_desc')}</li>
                        <li><strong style={{ color: '#E6EDF3' }}>{t('docs.torrent.step2_group')}</strong> {t('docs.torrent.step2_group_desc')}</li>
                    </ul>

                    <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: '#E6EDF3' }}>{t('docs.torrent.step2_add_user')}</h3>
                    <div className="rounded-md overflow-hidden border mb-4" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            <Terminal size={14} /> Bash
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code>usermod -a -G qbittorrent-nox root</code>
                        </pre>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 mb-6 text-sm" style={{ color: '#C9D1D9' }}>
                        <li><strong style={{ color: '#E6EDF3' }}>{t('docs.torrent.step2_usermod')}</strong> {t('docs.torrent.step2_usermod_desc')}</li>
                    </ul>
                </section>

                <hr style={{ borderColor: '#30363D' }} className="my-8" />

                {/* Step 3 */}
                <section id="step-3" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2" style={{ color: '#58A6FF' }}>
                        {t('docs.torrent.step3')}
                    </h2>
                    <p className="mb-4 text-sm" style={{ color: '#C9D1D9' }}>
                        {t('docs.torrent.step3_desc')}
                    </p>

                    <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: '#E6EDF3' }}>{t('docs.torrent.step3_create')}</h3>
                    <div className="rounded-md overflow-hidden border mb-4" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            <Terminal size={14} /> Bash
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code>nano /etc/systemd/system/qbittorrent-nox.service</code>
                        </pre>
                    </div>
                    <p className="mb-2 text-sm" style={{ color: '#C9D1D9' }}>{t('docs.torrent.step3_paste')}</p>
                    <div className="rounded-md overflow-hidden border mb-4" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            Plaintext
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code>{`[Unit]
Description=qBittorrent-nox service
After=network.target

[Service]
Type=forking
User=qbittorrent-nox
Group=qbittorrent-nox
UMask=002
ExecStart=/usr/bin/qbittorrent-nox -d --webui-port=8080
Restart=on-failure

[Install]
WantedBy=multi-user.target`}</code>
                        </pre>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 mb-6 text-sm" style={{ color: '#C9D1D9' }}>
                        <li><strong style={{ color: '#E6EDF3' }}>{t('docs.torrent.step3_type')}</strong> {t('docs.torrent.step3_type_desc')}</li>
                        <li><strong style={{ color: '#E6EDF3' }}>{t('docs.torrent.step3_umask')}</strong> {t('docs.torrent.step3_umask_desc')}</li>
                        <li><strong style={{ color: '#E6EDF3' }}>{t('docs.torrent.step3_port')}</strong> {t('docs.torrent.step3_port_desc')}</li>
                    </ul>

                    <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: '#E6EDF3' }}>{t('docs.torrent.step3_enable')}</h3>
                    <div className="rounded-md overflow-hidden border mb-4" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            <Terminal size={14} /> Bash
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code>systemctl daemon-reload{'\n'}systemctl enable --now qbittorrent-nox</code>
                        </pre>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 mb-6 text-sm" style={{ color: '#C9D1D9' }}>
                        <li><strong style={{ color: '#E6EDF3' }}>{t('docs.torrent.step3_enable_now')}</strong> {t('docs.torrent.step3_enable_now_desc')}</li>
                    </ul>
                </section>

                <hr style={{ borderColor: '#30363D' }} className="my-8" />

                {/* Step 4 */}
                <section id="step-4" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2" style={{ color: '#58A6FF' }}>
                        {t('docs.torrent.step4')}
                    </h2>
                    <p className="mb-4 text-sm" style={{ color: '#C9D1D9' }}>
                        {t('docs.torrent.step4_desc')}
                    </p>

                    <p className="mb-2 text-sm" style={{ color: '#C9D1D9' }}>{t('docs.torrent.step4_view')}</p>
                    <div className="rounded-md overflow-hidden border mb-4" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            <Terminal size={14} /> Bash
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code>nano /etc/pve/lxc/103.conf</code>
                        </pre>
                    </div>

                    <p className="mb-2 text-sm" style={{ color: '#C9D1D9' }}>{t('docs.torrent.step4_example')}</p>
                    <div className="rounded-md overflow-hidden border mb-4" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            Plaintext
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code>{`arch: amd64
cores: 2
features: nesting=1
hostname: qBittorrent
memory: 1024
mp0: /mnt/hdisk/films,mp=/downloads
net0: name=eth0,bridge=vmbr0,gw=192.168.1.1,ip=192.168.1.203/24,type=veth
onboot: 1
ostype: debian
rootfs: local-lvm:vm-103-disk-0,size=10G
unprivileged: 1`}</code>
                        </pre>
                    </div>
                </section>

                <hr style={{ borderColor: '#30363D' }} className="my-8" />

                {/* Step 5 */}
                <section id="step-5" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2" style={{ color: '#58A6FF' }}>
                        {t('docs.torrent.step5')}
                    </h2>
                    <p className="mb-4 text-sm" style={{ color: '#C9D1D9' }}>
                        {t('docs.torrent.step5_desc')}
                    </p>
                    <ul className="list-disc pl-6 space-y-3 mb-6 text-sm" style={{ color: '#C9D1D9' }}>
                        <li><strong>{t('docs.torrent.step5_login')}</strong> {t('docs.torrent.step5_login_val')}</li>
                        <li><strong>{t('docs.torrent.step5_pass')}</strong> {t('docs.torrent.step5_pass_val')}</li>
                    </ul>

                    <p className="mb-4 text-sm mt-6 font-medium text-[#E6EDF3]">
                        {t('docs.torrent.step5_post_install')}
                    </p>
                    <ul className="list-disc pl-6 space-y-3 mb-6 text-sm" style={{ color: '#C9D1D9' }}>
                        <li><strong>{t('docs.torrent.step5_change_cred')}</strong> {t('docs.torrent.step5_change_cred_desc')}</li>
                        <li><strong>{t('docs.torrent.step5_set_path')}</strong> {t('docs.torrent.step5_set_path_desc')}</li>
                    </ul>

                </section>

            </div>
        </div>
    );
}
