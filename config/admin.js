module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4d2df7b8124358dd65894609366d6ed0'),
  },
});
