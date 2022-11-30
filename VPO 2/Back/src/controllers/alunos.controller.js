const alunos = require('../models/alunos');
const con = require('../dao/connection');

class Cursado {

    constructor(data) {
        this.data = data
    }

    aluno = {}
    addAluno(a) {
        this.aluno = a
    }

    curso = {}
    addCurso(c) {
        this.curso = c
    }

}

class Aluno {

    constructor(id, nome, nascimento) {
        this.id = id
        this.nome = nome
        this.nascimento = nascimento
    }

}

class Curso {

    constructor(id, curso, duracao) {
        this.id = id
        this.curso = curso
        this.duracao = duracao
    }

}

const create = (req, res) => {
    con.query(alunos.toCreate(req.body), (err, result) => {
        if (err == null)
            res.json(req.body).status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const read = (req, res) => {
    con.query(alunos.toReadAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const readAluno = (req, res) => {
    con.query(alunos.toRead(req.params), (err, result) => {
        if (err == null){
            let com = []
            result.forEach((e, indice) => {
                let cursado = new Cursado(e.data)
                let al = new Aluno(e.idAluno, e.nome, e.nascimento)
                let cur = new Curso(e.idCurso, e.curso, e.duracao)
                cursado.addAluno(al)
                cursado.addCurso(cur)
                com.push(cursado)
                if (indice == result.length - 1) {
                    res.json(com).end()
                }
            });
            
        }
        else
            res.status(500).json(err).end();
    });
}

const upDate = (req, res) => {
    con.query(alunos.toUpdate(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.json(req.body).status(200).end();
            else
                res.json(req.body).status(404).end();
        else
            res.status(500).json(err).end();
    });
}

const deleteAluno = (req, res) => {
    con.query(alunos.toDelete(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.json(req.body).status(204).end();
            else
                res.json(req.body).status(404).end();
        else
            res.status(400).json(err).end();
    });
}

module.exports = {
    create,
    read,
    upDate,
    deleteAluno,
    readAluno
}