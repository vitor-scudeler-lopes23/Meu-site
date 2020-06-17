module.exports = {
  development: {
    dialect: "mysql",
    storage: "./db.development.sqlite"
  },
  test: {
    dialect: "mysql",
    storage: ":memory:"
  },
  production: {
    username: 'Vitor1',
    password: 'bandtec@1234',
    database: 'cadastro',
    host: 'localhost',
    dialect: 'mysql',
    xuse_env_variable: 'DATABASE_URL',
    dialectOptions: {
      options: {
        encrypt: true
      }
    },
    pool: { 
      max: 5,
      min: 1,
      acquire: 5000,
      idle: 30000,
      connectTimeout: 5000
    }
  }
};
 
