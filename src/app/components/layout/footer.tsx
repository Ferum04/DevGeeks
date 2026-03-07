import { Link } from "react-router";
import { Box, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="border-t py-12 px-6 mt-auto text-xs"
      style={{
        background: '#0D1117', // GitHub main background
        borderColor: '#30363D',
        color: '#8B949E' // Subdued text color
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-8">

        {/* Logo and Brand */}
        <div className="flex flex-col gap-4 max-w-xs">
          <Link to="/" className="flex items-center gap-2">
            <Box size={24} style={{ color: '#8B949E' }} />
            <span className="text-lg font-semibold" style={{ color: '#E6EDF3' }}>
              DevGeeks
            </span>
          </Link>
          <p>
            Learn how to organize your own homelab. Build, deploy, and manage your infrastructure like a pro.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-white transition-colors"><Twitter size={18} /></a>
            <a href="#" className="hover:text-white transition-colors"><Github size={18} /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={18} /></a>
          </div>
        </div>

        {/* Link Columns */}
        <div className="flex flex-wrap gap-12 md:gap-24">
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold mb-1" style={{ color: '#E6EDF3' }}>Product</h3>
            <Link to="/docs" className="hover:text-blue-400 hover:underline transition-all">Features</Link>
            <Link to="/docs" className="hover:text-blue-400 hover:underline transition-all">Documentation</Link>
            <Link to="/docs" className="hover:text-blue-400 hover:underline transition-all">Hardware</Link>
            <Link to="/docs" className="hover:text-blue-400 hover:underline transition-all">Software</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-semibold mb-1" style={{ color: '#E6EDF3' }}>Platform</h3>
            <Link to="/docs" className="hover:text-blue-400 hover:underline transition-all">Proxmox</Link>
            <Link to="/docs" className="hover:text-blue-400 hover:underline transition-all">Docker</Link>
            <Link to="/docs" className="hover:text-blue-400 hover:underline transition-all">Home Assistant</Link>
            <Link to="/docs" className="hover:text-blue-400 hover:underline transition-all">Networking</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-semibold mb-1" style={{ color: '#E6EDF3' }}>Community</h3>
            <a href="#" className="hover:text-blue-400 hover:underline transition-all">Discussions</a>
            <a href="#" className="hover:text-blue-400 hover:underline transition-all">Blog</a>
            <a href="#" className="hover:text-blue-400 hover:underline transition-all">Open Source</a>
            <a href="#" className="hover:text-blue-400 hover:underline transition-all">Support</a>
          </div>
        </div>
      </div>

      {/* Bottom Legal Section */}
      <div
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t gap-4"
        style={{ borderColor: '#21262D' }}
      >
        <div className="flex items-center gap-4">
          <span>&copy; {new Date().getFullYear()} DevGeeks, Inc.</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-blue-400 hover:underline transition-all">Terms</a>
          <a href="#" className="hover:text-blue-400 hover:underline transition-all">Privacy</a>
          <a href="#" className="hover:text-blue-400 hover:underline transition-all">Status</a>
          <a href="#" className="hover:text-blue-400 hover:underline transition-all">Docs</a>
        </div>
      </div>
    </footer>
  );
}
