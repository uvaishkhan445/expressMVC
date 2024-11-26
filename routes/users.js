const conn = require("../db/connection");
const express = require("express");
const router = express.Router();

// GET all products

router.get("/", async (req, res) => {
  try {
    const users = await conn.query("SELECT * FROM users");
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
