config = {
  // connectionString: 'Driver=SQL Server;Server=192.168.100.7,1433;Database=yayy;Uid=sa;Pwd=rw3602384;',
  user: 'sa',
  password: 'rw3602384',
  server: '192.168.100.7',
  port: 1433,
  database: 'yayy',
  options: {
    encrypt: true,
    tdsVersion: '7_1'
  }
  // pool: {
  //   max: 10,
  //   min: 0,
  //   idleTimeoutMillis: 30000
  // }
};

module.exports = config
