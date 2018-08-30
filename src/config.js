const crypto = require("crypto");

let EMAIL_TPL = "Olá, <strong>{0}<strong>, seja bem vindo ao curso de Nodejs";

// gera uma senha para SALT_KEY
var saltKey =
    "62f7260c0babbaede093480176f1dfadc9610cfcccf6c6045802fdaef16ca41d54f2d2350847f254d00d87e98fa730ca77366a94f4440d53b2f3e846823a49dc";
crypto.pbkdf2("node-mongoDB", "salt", 100000, 64, "sha512", (err, derivedKey) => {
    if (err) throw err;
    saltKey = derivedKey.toString("hex");
    // console.log(saltKey);
});
module.exports = {
    emailTpl: EMAIL_TPL,
    saltKey: saltKey,
    connectionString: "mongodb://127.0.0.1:27017",
    sendgridKey: "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",
    userImagesBlogconnectionString: "TBD"
};
