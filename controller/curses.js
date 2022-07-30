const database = require("./database");
const fileMgmt = require("../shared/fileMgmt");

module.exports = {
  getAllCurses: async function (req, res, next) {
    const param = req.query;

    const sql = "SELECT *FROM curses ORDER BY price ASC";

    try {
      const result = await database.query(sql);
      res.set("Access-Control-Allow-Origin", "*");
      res.json(result[0]);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },

  exportCurses: function (req, res, next) {
    const sql = "SELECT * FROM curses";
    res.set("Access-Control-Allow-Origin", "*");
    fileMgmt.exportToFile(res, sql, "curses");
  },

  findCurse: async function (req, res, next) {
    const param = req.query;

    const searchQuery = `%${value.search}%`;

    const sql = `SELECT * FROM curses ORDER BY name ASC;`;

    try {
      const result = await database.query(sql, [
        searchQuery,
        searchQuery,
        searchQuery,
      ]);

      res.json(result[0]);
    } catch (err) {
      res.status(400).send(`search error: ${err}`);
      throw error;
    }
  },
};
