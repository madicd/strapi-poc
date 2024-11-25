module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a1b2c3d4e5f6g7h8i9j0'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'a1b2c3d4e5f6g7h8i9j0'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'a1b2c3d4e5f6g7h8i9j0'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
