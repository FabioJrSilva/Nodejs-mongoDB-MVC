const repository = require("../repositories/product-repository");

exports.post = async (req, res, next) => {
    try {
        await repository.create(req.body);
        res.status(200).send({ message: "Dados salvos com sucesso!" });
    } catch (error) {
        res.status(500).send({
            message: "Falha ao criar produto!",
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
            message: "Falha ao buscar resultados!",
            error: error
        });
    }
};

exports.getBySlug = async (req, res, next) => {
    try {
        let result = await repository.getBySlug(req.params.slug);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({
            message: "Falha ao buscar resultados!",
            error: error
        });
    }
};

exports.getByTag = async (req, res, next) => {
    try {
        let result = await repository.getByTag(req.params.tag);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({
            message: "Falha ao buscar resultados!",
            error: error
        });
    }
};
exports.getById = async (req, res, next) => {
    try {
        let result = await repository.getById(req.params.id);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({
            message: "Falha ao buscar resultados!",
            error: error
        });
    }
};
exports.put = async (req, res, next) => {
    try {
        await repository.put(req.body, req.params.id);
        res.status(200).send({ message: "Produto atualizado com sucesso!" });
    } catch (error) {
        res.status(500).send({
            message: "Falha ao atualizar produto!",
            error: error
        });
    }
};

exports.delete = async (req, res, next) => {
    try {
        await repository.delete(req.params.id);
        res.status(200).send({ message: "Produto removido com sucesso!" });
    } catch (error) {
        res.status(500).send({
            message: "Falha ao remover produto!",
            error: error
        });
    }
};
