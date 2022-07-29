const database = require("./database");

module.exports = {
  getAllCurses: async function (req, res, next) {
    const param = req.query;

    const sql = "SELECT * FROM curses";

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
