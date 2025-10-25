export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                "foo": "#eb6363",
                "ui-red": "#eb6363",
                "ui-blue": "#5266DF",
                "ui-white": "#f3f3f3",
                "white-hero-button": "#f5f5f5",
                "white-hero-button-shadow": "#d1d1d1",
                "grey-900": "#292929",
                "grey-800": "#383838",
                "grey-700": "#555555",
                "grey-500": "#5e5d5d",
                "grey-400": "#818181",
                "grey-300": "#979797",
                "grey-200": "#d6d6d6",
                "footer-nav": "#242946",
            },
            spacing: {
                "button-radius": "0.438rem",
            },
            boxShadow: {
                // Base shadows first (no dependencies)
                'red-btn-shdw': '0 0.438rem 0.25rem -0.188rem rgb(218,218,218)',
                'blue-btn-shdw': '0 0.5rem 0.5rem -0.188rem rgb(216,220,255)',
                'grey-btn-shdw': '0rem 0.125rem 0.375rem 0.063rem #d1d1d1',

                // Outlines
                'red-outline': 'inset 0 0 0 0.125rem #eb6363',
                'blue-outline': 'inset 0 0 0 0.125rem #5266DF',
                'grey-outline': 'inset 0 0 0 0.125rem #5e5d5d',

                // Combined shadows (outline + shadow)
                'red-outline-with-shdw': '0 0.438rem 0.25rem -0.188rem rgb(218,218,218), inset 0 0 0 0.125rem #eb6363',
                'blue-outline-with-shdw': '0 0.5rem 0.5rem -0.188rem rgb(216,220,255), inset 0 0 0 0.125rem #5266DF',
                'grey-outline-with-shdw': '0rem 0.125rem 0.375rem 0.063rem #d1d1d1, inset 0 0 0 0.125rem #5e5d5d',
            },

            screens: {
                'max-sm': {'max': '43.75rem'}
            }
        }
    }
}