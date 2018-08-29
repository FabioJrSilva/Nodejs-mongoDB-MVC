const app = require("../src/app");

function normalizePort(value) {
    const port = parseInt(value, 10);
    if (isNaN(port)) {
        return value;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

app.listen(port, function() {
    console.log(`node-mongoDB listening on port ${port}`);
});
