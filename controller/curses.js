const database = require("./database");
const fileMgmt = require("../shared/fileMgmt");
const joi = require("joi");

module.exports = {
  getAllCurses: async function (req, res, next) {
    const param = req.query;

    const schema = joi.object({
      column: joi.string().valid("name", "price").default("name"),
      sort: joi.string().valid("ASC", "DESC").default("ASC"),
    });
    const { error, value } = schema.validate(param);

    const fieldsMap = new Map([["name", "price"]]);

    const sql = `SELECT *FROM curses ORDER BY ${fieldsMap.get(value.column)} ${
      value.sort
    };`;

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
    const sql = "SELECT * FROM curses ORDER BY name ASC";
    res.set("Access-Control-Allow-Origin", "*");
    fileMgmt.exportToFile(res, sql, "curses");
  },

  findCurse: async function (req, res, next) {
    const param = req.query;

    const schema = joi.object({
      search: joi.string().required().min(2),
    });

    const { error, value } = schema.validate(param);

    if (error) {
      res.status(400).send(`search error: ${error}`);
      throw error;
    }
    const searchQuery = `%${value.search}%`;

    const sql = `SELECT * FROM curses WHERE name LIKE ? OR description LIKE ? ;`;

    try {
      const result = await database.query(sql, [searchQuery, searchQuery]);
      res.json(result[0]);
    } catch (err) {
      res.status(400).send(`search error: ${err}`);
      throw error;
    }
  },
};
