const repository = require("../repositories/order-repository");
const guid = require("guid"); // lib pra gerar numeros aleatótios;Items

exports.post = async (req, res, next) => {
    try {
        await repository.create({
            customer: req.body.customer,
            number: guid.raw().substring(0, 6),
            items: req.body.items
        });
        res.status(200).send({ message: "Pedido cadastrado com sucesso!" });
    } catch (error) {
        res.status(500).send({
            message: "Falha ao cadastrar um novo pedido!",
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
            message: "Falha ao pesquisar pedidos!",
            error: error
        });
    }
};
