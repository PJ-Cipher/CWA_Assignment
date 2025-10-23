import type { PlaywrightTestConfig } from '@playwright/test';


const config: PlaywrightTestConfig = {
testDir: 'tests',
use: {
baseURL: 'http://localhost:3001',
trace: 'on-first-retry',
},
webServer: {
command: 'npm run build && npm run start',
port: 3001,
reuseExistingServer: !process.env.CI,
timeout: 120000,
},
};
export default config;