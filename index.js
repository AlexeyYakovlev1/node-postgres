const express = require("express");
const config = require("config");

const app = express();
const PORT = config.get("PORT") || 5000;

app.use(express.json({ extended: true }));

app.use("/users", require("./routes/user.routes"));
app.use("/posts", require("./routes/post.routes"));

const start = async() => {
    try {
        app.listen(PORT, () => {
            console.log(`server has been started on port ${PORT}`);
        })
    } catch(e) {
        console.log(e);
        process.exit(1);
    }
}

start();