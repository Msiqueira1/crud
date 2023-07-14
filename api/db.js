import mysql from "mysql";

export const db = mysql.createConnection({
  connectionLimit: 10,
  host: 'db-promocoesprd.chfub0qkk3vz.us-east-1.rds.amazonaws.com',
  user: 'itapromocoesprd',
  password: 'PRiPia*E455k',
  database: 'db-promocoesprd',
  dialect: 'mysql',
  connectionLimit: 1000,
  connectTimeout: 60 * 60 * 1000,
  acquireTimeout: 60 * 60 * 1000,
  timeout: 60 * 60 * 1000
});