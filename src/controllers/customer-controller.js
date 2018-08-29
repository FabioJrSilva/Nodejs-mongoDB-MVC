const repository = require("../repositories/customer-repository");

exports.post = async (req, res, next) => {
    try {
        await repository.create(req.body);
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
