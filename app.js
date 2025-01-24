const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.set("view.engine", "hbs");
app.use(express.urlencoded({extended:false}));
const userRouter = require("./routes/user.routeer.js");
app.use("/users", userRouter);


app.listen(3000, function () {
    console.log("Сервер ожидает подключение по адресу localhost:3000...");
});

module.exports = app;