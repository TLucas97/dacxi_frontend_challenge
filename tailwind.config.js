module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        extend: {
            colors: {
                'dacxi-purple': '#aa69ff',
                'dacxi-blue': '#2350a0',
                'dacxi-black': '#000032',
                'dacxi-grey': 'rgba(146, 146, 149, 0.2)',
                'dacxi-success': 'rgb(58, 184, 85)',
                'dacxi-error': 'rgba(255, 38, 103)',
                'dacxi-white': '#F5F5F5',
                'dacxi-blue': '#000032',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
