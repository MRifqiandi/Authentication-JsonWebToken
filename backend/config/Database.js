import { Sequelize } from "sequelize";

const db = new Sequelize("testjwt", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
