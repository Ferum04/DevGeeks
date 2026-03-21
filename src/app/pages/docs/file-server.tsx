import { Terminal, Folder } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function FileServer() {
    const { t } = useLanguage();

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header section */}
            <div>
                <h1 className="text-4xl font-bold mb-4 tracking-tight" style={{ color: '#E6EDF3' }}>
                    <Folder className="inline-block mr-3" size={32} />
                    {t('docs.file.title')}
                </h1>
                <p className="text-xl" style={{ color: '#8B949E' }}>
                    {t('docs.file.subtitle')}
                </p>
                <p className="mt-2 text-sm" style={{ color: '#8B949E' }}>
                    {t('docs.file.desc')}
                </p>
            </div>

            <div className="prose prose-invert max-w-none">

                {/* Step 1 */}
                <section id="step-1" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2" style={{ color: '#58A6FF' }}>
                        {t('docs.file.step1')}
                    </h2>
                    <p className="mb-4 text-sm" style={{ color: '#C9D1D9' }}>
                        {t('docs.file.step1_desc')}
                    </p>

                    <div className="rounded-md overflow-hidden border mb-4" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            <Terminal size={14} /> Bash
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code>pct set 103 -mp0 &lt;your_path_to_media_folder&gt;,mp=/media</code>
                        </pre>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 mb-6 text-sm" style={{ color: '#C9D1D9' }}>
                        <li><strong style={{ color: '#E6EDF3' }}>{t('docs.file.step1_pct')}</strong> {t('docs.file.step1_pct_desc')}</li>
                        <li><strong style={{ color: '#E6EDF3' }}>{t('docs.file.step1_path')}</strong> {t('docs.file.step1_path_desc')}</li>
                        <li><strong style={{ color: '#E6EDF3' }}>{t('docs.file.step1_mp')}</strong> {t('docs.file.step1_mp_desc')}</li>
                    </ul>
                </section>

                <hr style={{ borderColor: '#30363D' }} className="my-8" />

                {/* Step 2 */}
                <section id="step-2" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2" style={{ color: '#58A6FF' }}>
                        {t('docs.file.step2')}
                    </h2>
                    <p className="mb-4 text-sm" style={{ color: '#C9D1D9' }}>
                        {t('docs.file.step2_desc')}
                    </p>

                    <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: '#E6EDF3' }}>{t('docs.file.step2_dl')}</h3>
                    <div className="rounded-md overflow-hidden border mb-4" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            <Terminal size={14} /> Bash
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code>apt update && apt install -y curl{'\n'}curl -fsSL https://raw.githubusercontent.com/filebrowser/get/master/get.sh | bash</code>
                        </pre>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 mb-6 text-sm" style={{ color: '#C9D1D9' }}>
                        <li><strong style={{ color: '#E6EDF3' }}>{t('docs.file.step2_apt')}</strong> {t('docs.file.step2_apt_desc')}</li>
                        <li><strong style={{ color: '#E6EDF3' }}>{t('docs.file.step2_curl')}</strong> {t('docs.file.step2_curl_desc')}</li>
                    </ul>

                    <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: '#E6EDF3' }}>{t('docs.file.step2_create_db')}</h3>
                    <div className="rounded-md overflow-hidden border mb-4" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            <Terminal size={14} /> Bash
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code>mkdir -p /etc/filebrowser{'\n'}filebrowser config init --database.address /etc/filebrowser/filebrowser.db</code>
                        </pre>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 mb-6 text-sm" style={{ color: '#C9D1D9' }}>
                        <li><strong style={{ color: '#E6EDF3' }}>{t('docs.file.step2_mkdir')}</strong> {t('docs.file.step2_mkdir_desc')}</li>
                        <li><strong style={{ color: '#E6EDF3' }}>{t('docs.file.step2_config_init')}</strong> {t('docs.file.step2_config_init_desc')}</li>
                    </ul>

                    <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: '#E6EDF3' }}>{t('docs.file.step2_env')}</h3>
                    <div className="rounded-md overflow-hidden border mb-4" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            <Terminal size={14} /> Bash
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code>filebrowser config set --address 0.0.0.0 --port 8080 --root /media --database.address /etc/filebrowser/filebrowser.db</code>
                        </pre>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 mb-6 text-sm" style={{ color: '#C9D1D9' }}>
                        <li><strong style={{ color: '#E6EDF3' }}>{t('docs.file.step2_addr')}</strong> {t('docs.file.step2_addr_desc')}</li>
                        <li><strong style={{ color: '#E6EDF3' }}>{t('docs.file.step2_port')}</strong> {t('docs.file.step2_port_desc')}</li>
                        <li><strong style={{ color: '#E6EDF3' }}>{t('docs.file.step2_root')}</strong> {t('docs.file.step2_root_desc')}</li>
                    </ul>
                </section>

                <hr style={{ borderColor: '#30363D' }} className="my-8" />

                {/* Step 3 */}
                <section id="step-3" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2" style={{ color: '#58A6FF' }}>
                        {t('docs.file.step3')}
                    </h2>
                    <p className="mb-4 text-sm" style={{ color: '#C9D1D9' }}>
                        {t('docs.file.step3_desc')}
                    </p>

                    <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: '#E6EDF3' }}>{t('docs.file.step3_create')}</h3>
                    <div className="rounded-md overflow-hidden border mb-4" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            <Terminal size={14} /> Bash
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code>nano /etc/systemd/system/filebrowser.service</code>
                        </pre>
                    </div>
                    <p className="mb-2 text-sm" style={{ color: '#C9D1D9' }}>{t('docs.file.step3_paste')}</p>
                    <div className="rounded-md overflow-hidden border mb-4" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            Plaintext
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code>{`[Unit]
Description=File Browser
After=network.target

[Service]
User=root
Group=root
ExecStart=/usr/local/bin/filebrowser -c /etc/filebrowser/filebrowser.db
Restart=on-failure

[Install]
WantedBy=multi-user.target`}</code>
                        </pre>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 mb-6 text-sm" style={{ color: '#C9D1D9' }}>
                        <li><strong style={{ color: '#E6EDF3' }}>{t('docs.file.step3_after')}</strong> {t('docs.file.step3_after_desc')}</li>
                        <li><strong style={{ color: '#E6EDF3' }}>{t('docs.file.step3_exec')}</strong> {t('docs.file.step3_exec_desc')}</li>
                        <li><strong style={{ color: '#E6EDF3' }}>{t('docs.file.step3_restart')}</strong> {t('docs.file.step3_restart_desc')}</li>
                    </ul>

                    <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: '#E6EDF3' }}>{t('docs.file.step3_enable')}</h3>
                    <div className="rounded-md overflow-hidden border mb-4" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            <Terminal size={14} /> Bash
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code>systemctl daemon-reload{'\n'}systemctl enable --now filebrowser</code>
                        </pre>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 mb-6 text-sm" style={{ color: '#C9D1D9' }}>
                        <li><strong style={{ color: '#E6EDF3' }}>{t('docs.file.step3_daemon')}</strong> {t('docs.file.step3_daemon_desc')}</li>
                        <li><strong style={{ color: '#E6EDF3' }}>{t('docs.file.step3_systemctl_enable')}</strong> {t('docs.file.step3_systemctl_enable_desc')}</li>
                    </ul>
                </section>

                <hr style={{ borderColor: '#30363D' }} className="my-8" />

                {/* Step 4 */}
                <section id="step-4" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2" style={{ color: '#58A6FF' }}>
                        {t('docs.file.step4')}
                    </h2>
                    <p className="mb-4 text-sm" style={{ color: '#C9D1D9' }}>
                        {t('docs.file.step4_desc')}
                    </p>

                    <p className="mb-2 text-sm" style={{ color: '#C9D1D9' }}>{t('docs.file.step4_view')}</p>
                    <div className="rounded-md overflow-hidden border mb-4" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            <Terminal size={14} /> Bash
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code>nano /etc/pve/lxc/103.conf</code>
                        </pre>
                    </div>

                    <p className="mb-2 text-sm" style={{ color: '#C9D1D9' }}>{t('docs.file.step4_example')}</p>
                    <div className="rounded-md overflow-hidden border mb-4" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            Plaintext
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code>{`arch: amd64
cores: 1
features: nesting=1
hostname: FileBrowser
memory: 512
mp0: /mnt/hdisk/films,mp=/media
net0: name=eth0,bridge=vmbr0,gw=192.168.1.1,ip=192.168.1.203/24,type=veth
onboot: 1
ostype: debian
rootfs: local-lvm:vm-103-disk-0,size=8G
unprivileged: 1`}</code>
                        </pre>
                    </div>
                </section>

                <hr style={{ borderColor: '#30363D' }} className="my-8" />

                {/* Step 5 */}
                <section id="step-5" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2" style={{ color: '#58A6FF' }}>
                        {t('docs.file.step5')}
                    </h2>
                    <p className="mb-4 text-sm" style={{ color: '#C9D1D9' }}>
                        {t('docs.file.step5_desc')}
                    </p>
                    <ul className="list-disc pl-6 space-y-3 mb-6 text-sm" style={{ color: '#C9D1D9' }}>
                        <li><strong>{t('docs.file.step5_login')}</strong> {t('docs.file.step5_login_val')}</li>
                        <li><strong>{t('docs.file.step5_pass')}</strong> {t('docs.file.step5_pass_val')}</li>
                    </ul>
                    <div className="bg-yellow-900/40 border border-yellow-700/50 rounded-md p-4 mt-6">
                        <p className="text-sm font-medium text-yellow-200">
                            {t('docs.file.step5_important')}
                        </p>
                    </div>
                </section>

            </div>
        </div>
    );
}
