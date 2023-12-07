import dns from 'dns'

import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

import redwood from '@redwoodjs/vite'

require('dotenv').config()

// See: https://vitejs.dev/config/server-options.html#server-host
// So that Vite will load on local instead of 127.0.0.1
dns.setDefaultResultOrder('verbatim')

const viteConfig: UserConfig = {
  plugins: [svgr(), redwood()],
}

export default defineConfig(viteConfig)
