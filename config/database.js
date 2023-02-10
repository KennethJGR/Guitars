module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfilmkhmbjsn9ebbpui0-a.ohio-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitar_ly97'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'DwGxTj8SrvCVsq8nhUxKVyTgeDjes9Rt'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
