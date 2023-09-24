/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            // screens: {
            //     'mobile': { 'max': '768px' }, // Define your custom mobile screen size
            // },
        },
    },
    plugins: [
        // function({ addUtilities }) {
        //     const newUtilities = {
        //         '.mobile\\:rotate-90': {
        //             transform: 'rotate(90deg)',
        //         },
        //         '.mobile\\:origin-center': {
        //             transformOrigin: 'center center',
        //         },
        //     };

        //     addUtilities(newUtilities, ['responsive', 'hover']);
        // },
    ],
}