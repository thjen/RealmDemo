const {app} = require("./express/expressApp");
const port = 3000;
app.set("port", process.env.PORT || port);
app.listen(port, () => console.log(`listen = ${port}`));