module.exports = {
    swcMinify: true,
    images: {
        formats: ['image/avif', 'image/webp'],
        domains: ['static01.nyt.com'],
        minimumCacheTTL: 60,
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    }
}