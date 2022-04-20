const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/static'));

app.set('views', './views')
app.set('view engine', 'ejs')

app.use("/", require("./views/routes/main"));
app.use("/bestdesigns", require("./views/routes/bestdesigns"));
app.use("/Register", require("./views/routes/Register"));
app.use("/Burabay", require("./views/routes/Burabay"));
//app.use("/about", require("./views/routes/about"));
app.use("/main", require("./views/routes/main"));
app.use("/Charyn", require("./views/routes/Charyn"));
app.use("/contacts", require("./views/routes/contacts"));
app.use("/portfolio1", require("./views/routes/portfolio1"));
app.use("/services", require("./views/routes/services"));
app.use("/Shymbulak", require("./views/routes/Shymbulak"));
app.use("/SignIn", require("./views/routes/SignIn"));
app.use("/team", require("./views/routes/team"));


app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
    );


