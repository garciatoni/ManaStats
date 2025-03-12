import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';

// Importar para usar fileURLToPath
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */

// Usar fileURLToPath y dirname para obtener el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

export default withNextIntl(nextConfig);