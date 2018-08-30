const jwt = require("jsonwebtoken");
const config = require("../config");

exports.generateToken = async (data) => {
    return jwt.sign(data, config.saltKey, { expiresIn: "1d" });
};

exports.decodeToken = async (token) => {
    let data = await jwt.verify(token, config.saltKey);
};

exports.authorize = (req, res, next) => {
    let token = req.body.token || req.query.token || req.headers["x-access-token"];

    if (!token) {
        res.status(401).json({
            message: "Acesso Restrito"
        });
    } else {
        jwt.verify(token, config.saltKey, (error, decode) => {
            if (error) {
                res.status(401).json({
                    message: "Token Inválido"
                });
            } else {
                next();
            }
        });
    }
};
