module.exports = {
    content: ['./src/**/*.vue'],
    theme: {
        container: {
            center: true,
            padding: '1rem'
        },
        extend: {}
    },
    plugins: [require('prettier-plugin-tailwindcss'), require('@tailwindcss/forms')]
}
