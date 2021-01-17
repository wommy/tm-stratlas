module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', process.env.DB_HOST),
        srv: env.bool('DATABASE_SRV', process.env.DB_SRV),
        port: env.int('DATABASE_PORT', process.env.DB_PORT),
        database: env('DATABASE_NAME', process.env.DB_NAME),
        username: env('DATABASE_USERNAME', process.env.DB_USERNAME),
        password: env('DATABASE_PASSWORD', process.env.DB_PSWRD),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
