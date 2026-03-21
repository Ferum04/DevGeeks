import { createBrowserRouter } from "react-router";
import { Landing } from "./pages/landing";
import { DocsLayout } from "./pages/docs-layout";
import { Introduction } from "./pages/docs/introduction";
import { HardwareSelection } from "./pages/docs/hardware-selection";
import { ProxmoxInstallation } from "./pages/docs/proxmox-installation";
import { Register } from "./pages/register";
import { MusiServer } from "./pages/docs/musi-server";
import { MovieServer } from "./pages/docs/movie-server";
import { FileServer } from "./pages/docs/file-server";
import { TorrentServer } from "./pages/docs/torrent-server";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/docs",
    Component: DocsLayout,
    children: [
      { index: true, Component: Introduction },
      { path: "introduction", Component: Introduction },
      { path: "hardware-selection", Component: HardwareSelection },
      { path: "proxmox-installation", Component: ProxmoxInstallation },
      { path: "musi-server", Component: MusiServer },
      { path: "movie-server", Component: MovieServer },
      { path: "file-server", Component: FileServer },
      { path: "torrent-server", Component: TorrentServer },
    ],
  },
]);
