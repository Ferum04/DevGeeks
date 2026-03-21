import { Terminal, Film } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function MovieServer() {
    const { t } = useLanguage();

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header section */}
            <div>
                <h1 className="text-4xl font-bold mb-4 tracking-tight" style={{ color: '#E6EDF3' }}>
                    <Film className="inline-block mr-3" size={32} />
                    {t('docs.movie.title')}
                </h1>
                <p className="text-xl" style={{ color: '#8B949E' }}>
                    {t('docs.movie.subtitle')}
                </p>
                <p className="mt-2 text-sm" style={{ color: '#8B949E' }}>
                    {t('docs.movie.desc')}
                </p>
            </div>

            <div className="prose prose-invert max-w-none">

                {/* Step 1 */}
                <section id="step-1" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2" style={{ color: '#58A6FF' }}>
                        {t('docs.movie.step1')}
                    </h2>
                    <p className="mb-4 text-sm" style={{ color: '#C9D1D9' }}>
                        {t('docs.movie.step1_desc')}
                    </p>

                    <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: '#E6EDF3' }}>{t('docs.movie.step1_grant')}</h3>
                    <p className="mb-2 text-sm" style={{ color: '#C9D1D9' }}>{t('docs.movie.step1_run_host')}</p>
                    <div className="rounded-md overflow-hidden border mb-4" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            <Terminal size={14} /> Bash
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code>chmod 666 /dev/dri/renderD128</code>
                        </pre>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 mb-6 text-sm" style={{ color: '#C9D1D9' }}>
                        <li><strong style={{ color: '#E6EDF3' }}>{t('docs.movie.step1_chmod')}</strong> {t('docs.movie.step1_chmod_desc')}</li>
                        <li><strong style={{ color: '#E6EDF3' }}>{t('docs.movie.step1_dev')}</strong> {t('docs.movie.step1_dev_desc')}</li>
                    </ul>

                    <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: '#E6EDF3' }}>{t('docs.movie.step1_finalize')}</h3>
                    <p className="mb-2 text-sm" style={{ color: '#C9D1D9' }}>{t('docs.movie.step1_edit_conf')}</p>
                    <div className="rounded-md overflow-hidden border mb-4" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            <Terminal size={14} /> Bash
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code>nano /etc/pve/lxc/100.conf</code>
                        </pre>
                    </div>

                    <p className="mb-2 text-sm" style={{ color: '#C9D1D9' }}>{t('docs.movie.step1_after_adj')}</p>
                    <div className="rounded-md overflow-hidden border mb-4" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            Plaintext
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code>{`arch: amd64
cores: 4
features: nesting=1
hostname: Jellyfin
memory: 3072
mp0: /mnt/hdisk/films,mp=/media/library
nameserver: 192.168.1.1
net0: name=eth0,bridge=vmbr0,gw=192.168.1.1,hwaddr=BC:24:11:1D:5C:5B,ip=192.168.1.200/24,type=veth
onboot: 1
ostype: debian
rootfs: local-lvm:vm-100-disk-0,size=20G
swap: 512
unprivileged: 1
lxc.cgroup2.devices.allow: c 226:0 rwm
lxc.cgroup2.devices.allow: c 226:128 rwm
lxc.mount.entry: /dev/dri dev/dri none bind,optional,create=dir
lxc.idmap: u 0 100000 65536
lxc.idmap: g 0 100000 993
lxc.idmap: g 993 993 1
lxc.idmap: g 994 100994 64542`}</code>
                        </pre>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 mb-6 text-sm" style={{ color: '#C9D1D9' }}>
                        <li><strong style={{ color: '#E6EDF3' }}>{t('docs.movie.step1_lxc_cgroup')}</strong> {t('docs.movie.step1_lxc_cgroup_desc')}</li>
                        <li><strong style={{ color: '#E6EDF3' }}>{t('docs.movie.step1_lxc_mount')}</strong> {t('docs.movie.step1_lxc_mount_desc')}</li>
                        <li><strong style={{ color: '#E6EDF3' }}>{t('docs.movie.step1_lxc_idmap')}</strong> {t('docs.movie.step1_lxc_idmap_desc')}</li>
                    </ul>
                </section>

                <hr style={{ borderColor: '#30363D' }} className="my-8" />

                {/* Step 2 */}
                <section id="step-2" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2" style={{ color: '#58A6FF' }}>
                        {t('docs.movie.step2')}
                    </h2>
                    <p className="mb-4 text-sm" style={{ color: '#C9D1D9' }}>
                        {t('docs.movie.step2_desc')}
                    </p>

                    <div className="rounded-md overflow-hidden border mb-4" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            <Terminal size={14} /> Bash
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code>pct set 100 -mp0 &lt;your_path_to_movies_folder&gt;,mp=/movies</code>
                        </pre>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 mb-6 text-sm" style={{ color: '#C9D1D9' }}>
                        <li><strong style={{ color: '#E6EDF3' }}>{t('docs.movie.step2_pct')}</strong> {t('docs.movie.step2_pct_desc')}</li>
                        <li><strong style={{ color: '#E6EDF3' }}>{t('docs.movie.step2_path')}</strong> {t('docs.movie.step2_path_desc')}</li>
                        <li><strong style={{ color: '#E6EDF3' }}>{t('docs.movie.step2_mp')}</strong> {t('docs.movie.step2_mp_desc')}</li>
                    </ul>
                </section>

                <hr style={{ borderColor: '#30363D' }} className="my-8" />

                {/* Step 3 */}
                <section id="step-3" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2" style={{ color: '#58A6FF' }}>
                        {t('docs.movie.step3')}
                    </h2>
                    <p className="mb-4 text-sm" style={{ color: '#C9D1D9' }}>
                        {t('docs.movie.step3_desc')}
                    </p>

                    <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: '#E6EDF3' }}>{t('docs.movie.step3_install')}</h3>
                    <div className="rounded-md overflow-hidden border mb-4" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            <Terminal size={14} /> Bash
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code>apt update && apt install -y curl gnupg2 apt-transport-https lsb-release</code>
                        </pre>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 mb-6 text-sm" style={{ color: '#C9D1D9' }}>
                        <li><strong style={{ color: '#E6EDF3' }}>{t('docs.movie.step3_apt_update')}</strong> {t('docs.movie.step3_apt_update_desc')}</li>
                        <li><strong style={{ color: '#E6EDF3' }}>{t('docs.movie.step3_gnupg')}</strong> {t('docs.movie.step3_gnupg_desc')}</li>
                    </ul>

                    <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: '#E6EDF3' }}>{t('docs.movie.step3_add_key')}</h3>
                    <div className="rounded-md overflow-hidden border mb-4" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            <Terminal size={14} /> Bash
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code>mkdir -p /etc/apt/keyrings{'\n'}curl -fsSL https://repo.jellyfin.org/jellyfin_team.gpg.key | gpg --dearmor -o /etc/apt/keyrings/jellyfin.gpg</code>
                        </pre>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 mb-6 text-sm" style={{ color: '#C9D1D9' }}>
                        <li><strong style={{ color: '#E6EDF3' }}>{t('docs.movie.step3_gpg')}</strong> {t('docs.movie.step3_gpg_desc')}</li>
                    </ul>

                    <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: '#E6EDF3' }}>{t('docs.movie.step3_config_repo')}</h3>
                    <div className="rounded-md overflow-hidden border mb-4" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            <Terminal size={14} /> Bash
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code>echo "deb [arch=$( dpkg --print-architecture ) signed-by=/etc/apt/keyrings/jellyfin.gpg] https://repo.jellyfin.org/debian $( lsb_release -c -s ) main" | tee /etc/apt/sources.list.d/jellyfin.list</code>
                        </pre>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 mb-6 text-sm" style={{ color: '#C9D1D9' }}>
                        <li><strong style={{ color: '#E6EDF3' }}>{t('docs.movie.step3_tee')}</strong> {t('docs.movie.step3_tee_desc')}</li>
                    </ul>

                    <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: '#E6EDF3' }}>{t('docs.movie.step3_install_sw')}</h3>
                    <div className="rounded-md overflow-hidden border mb-4" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            <Terminal size={14} /> Bash
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code>apt update && apt install -y jellyfin</code>
                        </pre>
                    </div>
                    <p className="mb-6 text-sm" style={{ color: '#C9D1D9' }}>
                        {t('docs.movie.step3_install_desc')}
                    </p>
                </section>

                <hr style={{ borderColor: '#30363D' }} className="my-8" />

                {/* Step 4 */}
                <section id="step-4" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2" style={{ color: '#58A6FF' }}>
                        {t('docs.movie.step4')}
                    </h2>
                    <p className="mb-4 text-sm" style={{ color: '#C9D1D9' }}>
                        {t('docs.movie.step4_desc')}
                    </p>

                    <div className="rounded-md overflow-hidden border mb-4" style={{ borderColor: '#30363D' }}>
                        <div className="px-4 py-2 flex items-center gap-2 font-mono text-xs border-b" style={{ background: '#161B22', borderColor: '#30363D', color: '#8B949E' }}>
                            <Terminal size={14} /> Bash
                        </div>
                        <pre className="p-4 overflow-x-auto text-sm" style={{ background: '#0D1117', color: '#E6EDF3' }}>
                            <code>usermod -aG render jellyfin{'\n'}systemctl restart jellyfin</code>
                        </pre>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 mb-6 text-sm" style={{ color: '#C9D1D9' }}>
                        <li><strong style={{ color: '#E6EDF3' }}>{t('docs.movie.step4_usermod')}</strong> {t('docs.movie.step4_usermod_desc')}</li>
                        <li><strong style={{ color: '#E6EDF3' }}>{t('docs.movie.step4_restart')}</strong> {t('docs.movie.step4_restart_desc')}</li>
                    </ul>
                </section>

                <hr style={{ borderColor: '#30363D' }} className="my-8" />

                {/* Step 5 */}
                <section id="step-5" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2" style={{ color: '#58A6FF' }}>
                        {t('docs.movie.step5')}
                    </h2>
                    <p className="mb-4 text-sm" style={{ color: '#C9D1D9' }}>
                        {t('docs.movie.step5_desc')}
                    </p>
                    <ul className="list-decimal pl-6 space-y-3 mb-6 text-sm" style={{ color: '#C9D1D9' }}>
                        <li>{t('docs.movie.step5_1')}</li>
                        <li><strong>{t('docs.movie.step5_2_bold')}</strong> {t('docs.movie.step5_2_desc')}</li>
                        <li><strong>{t('docs.movie.step5_3_bold')}</strong> {t('docs.movie.step5_3_desc')}</li>
                    </ul>
                </section>

            </div>
        </div>
    );
}
