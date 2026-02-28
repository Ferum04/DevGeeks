import { createBrowserRouter } from "react-router";
import { Landing } from "./pages/landing";
import { DocsLayout } from "./pages/docs-layout";
import { Introduction } from "./pages/docs/introduction";
import { HardwareSelection } from "./pages/docs/hardware-selection";
import { ProxmoxInstallation } from "./pages/docs/proxmox-installation";
import { DockerBasics } from "./pages/docs/docker-basics";
import { HomeAssistant } from "./pages/docs/home-assistant";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/docs",
    Component: DocsLayout,
    children: [
      { index: true, Component: Introduction },
      { path: "introduction", Component: Introduction },
      { path: "hardware-selection", Component: HardwareSelection },
      { path: "proxmox-installation", Component: ProxmoxInstallation },
      { path: "docker-basics", Component: DockerBasics },
      { path: "home-assistant", Component: HomeAssistant },
    ],
  },
]);
