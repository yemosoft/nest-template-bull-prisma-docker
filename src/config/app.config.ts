export default () => ({
  app: {
    port: parseInt(process.env.APP_PORT, 10) || 3000,
  },
  redis: {
    host: process.env.REDIS_HOST || "localhost",
    port: parseInt(process.env.REDIS_PORT, 10) || 6379,
  },
  // Diğer konfigürasyonlar...
});
