const repository = require("../repositories/customer-repository");
const config = require("../../src/config");
const md5 = require("md5");
const emailService = require("../services/email-service");

exports.post = async (req, res, next) => {
    try {
        await repository.create({
            name: req.body.name,
            email: req.body.email,
            password: md5(req.body.password + config.saltKey)
        });
        emailService.send(
            req.body.email,
            "Bem vindo ao Nodejs",
            config.emailTpl.replace("{0}", req.body.name)
        );
        res.status(200).send({ message: "Cliente cadastrado com sucesso!" });
    } catch (error) {
        res.status(500).send({
            message: "Falha ao cadastrar um novo cliente!",
            error: error
        });
    }
};

exports.get = async (req, res, next) => {
    try {
        let result = await repository.get();
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({
            message: "Falha ao pesquisar clientes!",
            error: error
        });
    }
};
