/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",    // arquivos da pasta pages
        "./components/**/*.{js,ts,jsx,tsx}" // arquivos da pasta components
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#4ADE80',
                    light: '#5EFc82',
                },
            },
        },
    },
    plugins: [],
};
