const express = require('express');
const cors = require('cors');

const alunos = require('./routes/alunos.routes');

const app = express();
app.use(express.json());
app.use(cors());
app.use("/alunos", alunos);

app.listen(5000, () => {
    console.log("Estamos Funcionando");
});