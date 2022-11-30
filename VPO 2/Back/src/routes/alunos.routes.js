const express = require('express');
const router = express.Router();

const alunos = require("../controllers/alunos.controller");

router.post("/create", alunos.create);
router.get("/read", alunos.read);
router.put("/update", alunos.upDate);
router.delete("/delete", alunos.deleteAluno);

router.get("/alunos/:id", alunos.readAluno);

module.exports = router;