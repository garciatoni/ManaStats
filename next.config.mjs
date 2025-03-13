import createNextIntlPlugin from 'next-intl/plugin';
import { dirname } from 'path';
// Importar para usar fileURLToPath
import { fileURLToPath } from 'url';
import path from 'path';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

// Usar fileURLToPath y dirname para obtener el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],  // ✅ Ahora apunta a src/styles
    prependData: `@import "variables.scss"; @import "mixins.scss";`
  }
};

export default withNextIntl(nextConfig);