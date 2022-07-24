const database = require("./database");

module.exports = {
  getAllLectures: async function (req, res, next) {
    const param = req.query;

    const fieldsMap = new Map([
      ["name", "lectures.first_name"],
      ["last_name", "lectures.last_name"],
      ["email", "lectures.email"],
    ]);

    const sql = "SELECT * FROM lectures";

    try {
      const result = await database.query(sql);
      res.set("Access-Control-Allow-Origin", "*");
      res.json(result[0]);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },
};
