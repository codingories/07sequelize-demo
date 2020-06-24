const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("fang", "root", "123456", {
  dialect: "mysql",
});
// 创建了user模型
class User extends Model {}
// 初始化User
User.init(
  {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
  },
  { sequelize, modelName: "user" }
);
// 同步到数据库
// sequelize
//   // 创建一条记录
//   .sync() // 同步
//   .then(() =>
//     User.create({
//       username: "janedoe",
//       birthday: new Date(1980, 6, 20),
//     })
//   )
//   // 打印结果
//   .then((jane) => {
//     console.log(jane.toJSON());
//   });

async function run() {
  User.destroy({
    where: {
      id: 1,
    },
  });
  const users = await User.findAll();
  console.log(JSON.stringify(users));
  sequelize.close();
}
run();
