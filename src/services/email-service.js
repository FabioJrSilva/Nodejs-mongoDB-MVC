const config = require("../config");
const sendgrid = require("sendgrid")(config.sendgridKey);

exports.send = async (to, subject, body) => {
    sendgrid.send({
        to: to,
        from: "fabio.junior@uotz.com.br",
        subject: subject,
        html: body
    });
};
