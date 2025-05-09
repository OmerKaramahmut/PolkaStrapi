// export default ({ env }) => ({
//   auth: {
//     secret: env('ADMIN_JWT_SECRET'),
//   },
//   apiToken: {
//     salt: env('API_TOKEN_SALT'),
//   },
//   url: env('STRAPI_ADMIN_BACKEND_URL', 'https://polkachemicals.com'),
// });


export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'your_admin_jwt_secret'),
  },
  url: env('ADMIN_URL', '/admin'),
});
