/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6', // Brighter Blue like in image
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                    950: '#172554',
                },
                slate: {
                    50: '#f8f9fa', // Lighter background
                    100: '#f1f5f9',
                    800: '#1e293b',
                    900: '#0f172a',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                'premium': '0 4px 20px 0 rgba(0, 0, 0, 0.05)',
                'card': '0 2px 6px 0 rgba(0, 0, 0, 0.02)',
            }
        },
    },
    plugins: [],
}
