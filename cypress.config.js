const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        baseUrl: 'http://localhost:8080' || 'http://localhost:8081',
        viewportHeight: 1080,
        viewportWidth: 1920,
        video: false,
        screenshotOnRunFailure: false,
        chromeWebSecurity: false,
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
})
