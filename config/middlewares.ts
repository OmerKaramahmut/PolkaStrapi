// export default [
//   'strapi::errors',
//   {
//     name: 'strapi::security',
//     config: {
//       contentSecurityPolicy: {
//         useDefaults: true,
//         directives: {
//           'img-src': ["'self'", 'data:', 'blob:', 'https://polkachemicals.com'],
//           'media-src': ["'self'", 'data:', 'blob:', 'https://polkachemicals.com'],
//           upgradeInsecureRequests: true,
//         },
//       },
//     },
//   },
//   {
//     name: 'strapi::cors',
//     config: {
//       origin: ['https://polkachemicals.com', 'http://localhost:3000'],
//       methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//       credentials: true,
//     },
//   },
//   'strapi::poweredBy',
//   'strapi::logger',
//   'strapi::query',
//   'strapi::body',
//   'strapi::session',
//   'strapi::favicon',
//   'strapi::public',
// ];


export default [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'https://polkachemicals.com',
        'https://www.polkachemicals.com'
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      headers: '*',
      credentials: true,
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
