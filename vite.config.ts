import { join } from 'path';
import type { UserConfig } from 'vite';

// eslint-disable-next-line import/no-extraneous-dependencies
import eslintPlugin from 'vite-plugin-eslint';

const config: UserConfig = {
    resolve: {
        alias: {
            '/@/': join(__dirname, 'src'),
        },
    },
    plugins: [eslintPlugin()],
};

export default config;
