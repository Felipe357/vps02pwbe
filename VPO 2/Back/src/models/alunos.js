const toCreate = (model) => {
    return `INSERT INTO alunos VALUES (default, '${model.nome}', '${model.nascimento}')`;
}

const toReadAll = () => {
    return "SELECT * FROM alunos";
}

const toRead = (model) => {
    return `SELECT * FROM vw_Alunos WHERE idAluno = ${model.id}`;
}


const toUpdate = (model) => {
    return `UPDATE alunos SET nome = '${model.nome}', nascimento = '${model.nascimento}' WHERE id = ${model.id}`;
}

const toDelete = (model) => {
    return `DELETE FROM alunos WHERE id = ${model.id}`;
}

module.exports = {
    toCreate,
    toReadAll,
    toUpdate,
    toDelete,
    toRead
}