import { Sequelize } from "sequelize-typescript";

async function init() {
    const sequelize = new Sequelize("db", "user", "pass", {
        host: "touch-typing-db",
        dialect: "mysql",
        models: [__dirname + "/models"],
    });

    // creates tables based on models
    return await sequelize.sync({ force: true });
}


export default init();
