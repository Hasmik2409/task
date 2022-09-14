import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/main.js',
                'resources/css/app.css'
            ],
            refresh: true,
        }),
        ],
    resolve: {
        alias: {
            '@': '/resources/js',
        },
    },
});

