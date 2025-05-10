// export default ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   url: env('PUBLIC_URL', 'https://polkachemicals.com'),
//   app: {
//     keys: env.array('APP_KEYS'),
//   },
// });

export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: env("SERVER_URL", "https://localhost:1337"),
  app: {
    keys: env.array("APP_KEYS"),
  },
  allowedHosts: ["api.polkachemicals.com"],
});
