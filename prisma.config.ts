// prisma.config.ts
import 'dotenv/config';              // <-- loads .env into process.env at startup
import { defineConfig } from '@prisma/config';

export default defineConfig({
  schema: './prisma/schema.prisma',  // keep it minimal; don't read env here
});
