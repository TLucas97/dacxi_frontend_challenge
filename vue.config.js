module.exports = {
    transpileDependencies: ['vuetify'],
    publicPath:
        process.env.NODE_ENV === 'production'
            ? '/dacxi_frontend_challenge/'
            : '/',
}
