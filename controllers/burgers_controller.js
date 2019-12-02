const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", (req, res) => {
    burger.all(data => {
        let hbsObj = {
            burgers: data
        };
        console.log(hbsObj);
        res.render("index", hbsObj);
    })
})

router.post("/api/burgers", (req, res) => {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.name, req.body.devoured
    ], result => {
        res.json({ id: result.insertId });
    })
})